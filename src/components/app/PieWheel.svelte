<script lang="ts">
	import { PieChart, type PieSeriesOption } from "echarts/charts";
	import { TooltipComponent, type TooltipComponentOption } from "echarts/components";
	import { type ComposeOption, init, use } from "echarts/core";
	import { LabelLayout } from "echarts/features";
	import { SVGRenderer } from "echarts/renderers";
	import type { Attachment } from "svelte/attachments";

	import type { UnitId } from "$lib/far/types";
	import type { UnitStats } from "$lib/types";

	type Props = {
		stats: UnitStats[];
		/** When true, lifecycle slices are dimmed; Fundamentals stays selectable. */
		locked?: boolean;
		onpick: (unitId: UnitId) => void;
	};

	type WheelOption = ComposeOption<PieSeriesOption | TooltipComponentOption>;

	/** Leave room for emphasis.scaleSize so hover can grow without clipping. */
	const OUTER_RADIUS = 88;
	const PAD_ANGLE = 2;
	const TRACK_SERIES_ID = "wheel-track";
	const LABEL_SERIES_ID = "wheel-labels";
	const HOVER_SCALE_SIZE = 8;

	use([PieChart, TooltipComponent, LabelLayout, SVGRenderer]);

	let { stats, locked = false, onpick }: Props = $props();

	function clampRatio(ratio: number): number {
		return Math.min(1, Math.max(0, ratio));
	}

	function sliceIsLocked(unitId: UnitId, isLocked = locked): boolean {
		return isLocked && unitId !== "fundamentals";
	}

	function sliceLabel(stat: UnitStats, isLocked = locked): string {
		return sliceIsLocked(stat.unit.id, isLocked)
			? `${stat.unit.label}: complete Fundamentals to unlock`
			: `${stat.unit.label}: ${Math.round(clampRatio(stat.ratio) * 100)}% mastered`;
	}

	function chartLabelFontSize(chartWidth: number): number {
		return Math.round(Math.min(14, Math.max(11, chartWidth / 32)));
	}

	function createOption(
		currentStats: UnitStats[],
		isLocked: boolean,
		chartWidth: number,
	): WheelOption {
		const pieGeometry = {
			type: "pie" as const,
			center: ["50%", "50%"],
			startAngle: 90,
			clockwise: true,
			padAngle: PAD_ANGLE,
		};

		const track: PieSeriesOption = {
			...pieGeometry,
			id: TRACK_SERIES_ID,
			radius: ["0%", `${OUTER_RADIUS}%`],
			// Keep hover live while locked; click handler gates lifecycle slices.
			silent: false,
			cursor: "pointer",
			z: 1,
			avoidLabelOverlap: false,
			label: { show: false },
			labelLine: { show: false },
			emphasis: {
				scale: true,
				scaleSize: HOVER_SCALE_SIZE,
				focus: "self",
				itemStyle: {
					shadowBlur: 12,
					shadowOffsetX: 0,
					shadowColor: "rgba(0, 0, 0, 0.28)",
				},
			},
			blur: {
				itemStyle: { opacity: isLocked ? 0.2 : 0.35 },
			},
			data: currentStats.map((stat) => {
				const dimmed = sliceIsLocked(stat.unit.id, isLocked);
				return {
					value: 1,
					name: stat.unit.label,
					itemStyle: {
						color: `hsla(${stat.unit.hue}, 45%, 50%, ${dimmed ? 0.08 : 0.14})`,
					},
					emphasis: {
						itemStyle: {
							color: `hsla(${stat.unit.hue}, 55%, 48%, ${dimmed ? 0.32 : 0.5})`,
						},
					},
				};
			}),
		};

		const progress = currentStats.flatMap(
			(stat, progressIndex): PieSeriesOption[] => {
				const ratio = clampRatio(stat.ratio);
				if (ratio === 0) return [];
				const dimmed = sliceIsLocked(stat.unit.id, isLocked);

				return [
					{
						...pieGeometry,
						id: `wheel-progress-${stat.unit.id}`,
						radius: ["0%", `${OUTER_RADIUS * ratio}%`],
						silent: true,
						z: 2,
						label: { show: false },
						labelLine: { show: false },
						// Keep progress rings still while the track scales on hover.
						emphasis: { disabled: true },
						data: currentStats.map((slice, sliceIndex) => ({
							value: 1,
							name: slice.unit.label,
							itemStyle: {
								color:
									sliceIndex === progressIndex
										? `hsla(${stat.unit.hue}, 70%, 52%, ${dimmed ? 0.18 : 1})`
										: "transparent",
							},
						})),
					},
				];
			},
		);

		const labels: PieSeriesOption = {
			...pieGeometry,
			id: LABEL_SERIES_ID,
			radius: ["0%", `${OUTER_RADIUS}%`],
			silent: true,
			z: 3,
			avoidLabelOverlap: false,
			emphasis: { disabled: true },
			label: {
				show: true,
				position: "inside",
				formatter: "{b}",
				color: "#111827",
				backgroundColor: "#f9fafb",
				borderColor: "rgba(17, 24, 39, 0.35)",
				borderWidth: 1,
				borderRadius: 5,
				padding: [3, 6],
				fontFamily: "Inter Variable, Inter, sans-serif",
				fontSize: chartLabelFontSize(chartWidth),
				fontWeight: 600,
			},
			labelLayout: { hideOverlap: false },
			labelLine: { show: false },
			data: currentStats.map((stat) => ({
				value: 1,
				name: stat.unit.label,
				itemStyle: { color: "transparent" },
			})),
		};

		return {
			animationDuration: 500,
			animationDurationUpdate: 500,
			tooltip: {
				trigger: "item",
				confine: true,
				formatter: (params) => {
					if (
						typeof params !== "object" ||
						params === null ||
						!("seriesId" in params) ||
						params.seriesId !== TRACK_SERIES_ID ||
						typeof params.dataIndex !== "number"
					) {
						return "";
					}
					const stat = currentStats[params.dataIndex];
					return stat ? sliceLabel(stat, isLocked) : "";
				},
			},
			series: [track, ...progress, labels],
		};
	}

	const attachChart: Attachment<HTMLDivElement> = (element) => {
		const chart = init(element, undefined, { renderer: "svg" });
		let chartWidth = element.clientWidth;
		const updateChart = () => {
			chart.setOption(createOption(stats, locked, chartWidth), {
				lazyUpdate: true,
				notMerge: true,
			});
		};

		chart.on("click", (event) => {
			if (event.seriesId !== TRACK_SERIES_ID || typeof event.dataIndex !== "number") {
				return;
			}

			const stat = stats[event.dataIndex];
			if (!stat || sliceIsLocked(stat.unit.id)) return;
			onpick(stat.unit.id);
		});

		$effect(updateChart);

		const resizeObserver = new ResizeObserver(([entry]) => {
			const nextWidth = entry?.contentRect.width ?? element.clientWidth;
			chart.resize();

			if (Math.abs(nextWidth - chartWidth) < 0.5) return;

			chartWidth = nextWidth;
			updateChart();
		});
		resizeObserver.observe(element);

		return () => {
			resizeObserver.disconnect();
			chart.dispose();
		};
	};
</script>

<div
	class="relative mx-auto aspect-square w-full max-w-[20rem] sm:max-w-[26rem] lg:max-w-[28rem]"
	role="group"
	aria-label={locked
		? "Mastery wheel — Fundamentals is available; clear 80% or pass the test to unlock lifecycle slices"
		: "Mastery wheel"}
>
	<div class="absolute inset-0 h-full w-full" aria-hidden="true" {@attach attachChart}></div>

	<div class="pointer-events-none absolute inset-0 z-20">
		{#each stats as stat (stat.unit.id)}
			<button
				type="button"
				class="slice-control"
				disabled={sliceIsLocked(stat.unit.id)}
				onclick={() => onpick(stat.unit.id)}
			>
				{sliceLabel(stat)}
			</button>
		{/each}
	</div>
</div>

<style>
	.slice-control {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	.slice-control:focus-visible {
		pointer-events: auto;
		left: 50%;
		bottom: 0.75rem;
		z-index: 1;
		width: max-content;
		max-width: calc(100% - 1.5rem);
		height: auto;
		padding: 0.4rem 0.65rem;
		margin: 0;
		overflow: visible;
		clip: auto;
		white-space: normal;
		color: var(--color-card-foreground);
		background: var(--color-card);
		border: 2px solid var(--color-foreground);
		border-radius: 0.375rem;
		outline: 2px solid var(--color-background);
		outline-offset: 2px;
		transform: translateX(-50%);
	}
</style>
