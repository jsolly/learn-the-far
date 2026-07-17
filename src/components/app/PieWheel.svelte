<script lang="ts">
	import { PieChart, type PieSeriesOption } from "echarts/charts";
	import { type ComposeOption, init, use } from "echarts/core";
	import { LabelLayout } from "echarts/features";
	import { SVGRenderer } from "echarts/renderers";
	import type { Attachment } from "svelte/attachments";

	import type { UnitStats } from "$lib/types";

	type Props = {
		stats: UnitStats[];
		/** Overall mastery shown in the ALEKS-style center hub. */
		hubPercent: number;
	};

	type WheelOption = ComposeOption<PieSeriesOption>;

	const OUTER_RADIUS = 92;
	/** Donut hole — fill grows from this edge outward (ALEKS pie). */
	const INNER_RADIUS = 36;
	const PAD_ANGLE = 2;
	const LABEL_SERIES_ID = "wheel-labels";

	use([PieChart, LabelLayout, SVGRenderer]);

	let { stats, hubPercent }: Props = $props();

	function clampRatio(ratio: number): number {
		return Math.min(1, Math.max(0, ratio));
	}

	function chartLabelFontSize(chartWidth: number): number {
		return Math.round(Math.min(14, Math.max(11, chartWidth / 32)));
	}

	function progressOuterRadius(ratio: number): number {
		const band = OUTER_RADIUS - INNER_RADIUS;
		return INNER_RADIUS + band * clampRatio(ratio);
	}

	function sliceSummary(stat: UnitStats): string {
		const masteredPct = Math.round(clampRatio(stat.masteredRatio) * 100);
		const learningPct = Math.round(clampRatio(stat.learningRatio) * 100);
		const capturedPct = Math.round(clampRatio(stat.ratio) * 100);
		return `${stat.unit.label}: ${capturedPct}% captured (${masteredPct}% mastered, ${learningPct}% learning)`;
	}

	function sliceFill(
		currentStats: UnitStats[],
		stat: UnitStats,
		progressIndex: number,
		kind: "learning" | "mastered",
	): PieSeriesOption | null {
		const masteredRatio = clampRatio(stat.masteredRatio);
		const learningRatio = clampRatio(stat.learningRatio);
		const capturedRatio = clampRatio(masteredRatio + learningRatio);
		if (kind === "learning" && learningRatio === 0) return null;
		if (kind === "mastered" && masteredRatio === 0) return null;

		const outer =
			kind === "learning"
				? progressOuterRadius(capturedRatio)
				: progressOuterRadius(masteredRatio);
		const color =
			kind === "mastered"
				? `hsla(${stat.unit.hue}, 72%, 48%, 1)`
				: `hsla(${stat.unit.hue}, 55%, 68%, 0.85)`;

		return {
			type: "pie",
			center: ["50%", "50%"],
			startAngle: 90,
			clockwise: true,
			padAngle: PAD_ANGLE,
			id: `wheel-${kind}-${stat.unit.id}`,
			radius: [`${INNER_RADIUS}%`, `${outer}%`],
			silent: true,
			z: kind === "learning" ? 2 : 3,
			label: { show: false },
			labelLine: { show: false },
			emphasis: { disabled: true },
			data: currentStats.map((slice, sliceIndex) => ({
				value: 1,
				name: slice.unit.label,
				itemStyle: {
					color: sliceIndex === progressIndex ? color : "transparent",
				},
			})),
		};
	}

	function createOption(currentStats: UnitStats[], chartWidth: number): WheelOption {
		const pieGeometry = {
			type: "pie" as const,
			center: ["50%", "50%"],
			startAngle: 90,
			clockwise: true,
			padAngle: PAD_ANGLE,
		};

		const track: PieSeriesOption = {
			...pieGeometry,
			id: "wheel-track",
			radius: [`${INNER_RADIUS}%`, `${OUTER_RADIUS}%`],
			silent: true,
			cursor: "default",
			z: 1,
			avoidLabelOverlap: false,
			label: { show: false },
			labelLine: { show: false },
			emphasis: { disabled: true },
			data: currentStats.map((stat) => ({
				value: 1,
				name: stat.unit.label,
				itemStyle: {
					color: `hsla(${stat.unit.hue}, 45%, 50%, 0.14)`,
				},
			})),
		};

		const progress = currentStats.flatMap((stat, progressIndex): PieSeriesOption[] => {
			const layers = [
				sliceFill(currentStats, stat, progressIndex, "learning"),
				sliceFill(currentStats, stat, progressIndex, "mastered"),
			];
			return layers.filter((layer): layer is PieSeriesOption => layer !== null);
		});

		const labels: PieSeriesOption = {
			...pieGeometry,
			id: LABEL_SERIES_ID,
			radius: [`${INNER_RADIUS}%`, `${OUTER_RADIUS}%`],
			silent: true,
			z: 4,
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
			series: [track, ...progress, labels],
		};
	}

	const attachChart: Attachment<HTMLDivElement> = (element) => {
		const chart = init(element, undefined, { renderer: "svg" });
		let chartWidth = element.clientWidth;
		const updateChart = () => {
			chart.setOption(createOption(stats, chartWidth), {
				lazyUpdate: true,
				notMerge: true,
			});
		};

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

	let wheelDescription = $derived(
		[
			`Mastery wheel — ${hubPercent}% captured.`,
			...stats.map((stat) => sliceSummary(stat)),
		].join(" "),
	);
</script>

<div
	class="relative mx-auto aspect-square w-full max-w-[20rem] sm:max-w-[26rem] lg:max-w-[28rem]"
	role="img"
	aria-label={wheelDescription}
>
	<div class="absolute inset-0 h-full w-full" aria-hidden="true" {@attach attachChart}></div>

	<!-- ALEKS-style center hub: overall progress -->
	<div class="pointer-events-none absolute inset-0 z-10 flex items-center justify-center" aria-hidden="true">
		<div
			class="flex flex-col items-center justify-center rounded-full bg-card shadow-sm"
			style={`width: ${INNER_RADIUS}%; aspect-ratio: 1`}
		>
			<span class="text-2xl font-bold tabular-nums leading-none sm:text-3xl">{hubPercent}%</span>
			<span class="mt-1 text-[0.65rem] uppercase tracking-wide text-muted-foreground sm:text-xs"
				>captured</span
			>
		</div>
	</div>
</div>
