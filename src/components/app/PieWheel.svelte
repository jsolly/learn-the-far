<script lang="ts">
	import type { UnitStats } from "$lib/types";
	import type { UnitId } from "$lib/far/types";

	type Props = {
		stats: UnitStats[];
		/** Center hub percentage (mastery when unlocked, fundamentals when gated). */
		hubPercent: number;
		hubLabel: string;
		/** When true, slices are dimmed and not selectable (fundamentals hard gate). */
		locked?: boolean;
		onpick: (unitId: UnitId) => void;
	};

	let { stats, hubPercent, hubLabel, locked = false, onpick }: Props = $props();

	const CX = 120;
	const CY = 120;
	const OUTER_R = 112;
	/** Must match the visible hub circle — fill grows from this edge outward. */
	const HUB_R = 46;
	const PAD_DEG = 2; // gap between slices

	function polar(radius: number, angleDeg: number): [number, number] {
		const a = ((angleDeg - 90) * Math.PI) / 180;
		return [CX + radius * Math.cos(a), CY + radius * Math.sin(a)];
	}

	/** Donut wedge between innerR and outerR spanning a0..a1 degrees. */
	function ringSector(innerR: number, outerR: number, a0: number, a1: number): string {
		if (outerR <= innerR + 0.5) return "";
		const [ox0, oy0] = polar(outerR, a0);
		const [ox1, oy1] = polar(outerR, a1);
		const [ix0, iy0] = polar(innerR, a0);
		const [ix1, iy1] = polar(innerR, a1);
		const large = a1 - a0 > 180 ? 1 : 0;
		return [
			`M ${ox0} ${oy0}`,
			`A ${outerR} ${outerR} 0 ${large} 1 ${ox1} ${oy1}`,
			`L ${ix1} ${iy1}`,
			`A ${innerR} ${innerR} 0 ${large} 0 ${ix0} ${iy0}`,
			"Z",
		].join(" ");
	}

	let slices = $derived(
		stats.map((s, i) => {
			const step = 360 / stats.length;
			const a0 = i * step + PAD_DEG / 2;
			const a1 = (i + 1) * step - PAD_DEG / 2;
			const band = OUTER_R - HUB_R;
			const fillOuter = locked ? HUB_R : HUB_R + band * s.ratio;
			const mid = (a0 + a1) / 2;
			const [lx, ly] = polar(HUB_R + band * 0.72, mid);
			return {
				id: s.unit.id,
				label: s.unit.label,
				hue: s.unit.hue,
				ratio: s.ratio,
				track: ringSector(HUB_R, OUTER_R, a0, a1),
				fill: ringSector(HUB_R, fillOuter, a0, a1),
				lx,
				ly,
			};
		}),
	);
</script>

<div class="relative mx-auto aspect-square w-full max-w-[20rem]" class:opacity-80={locked}>
	<svg
		viewBox="0 0 240 240"
		class="h-full w-full -rotate-0"
		role="group"
		aria-label={locked ? "Fundamentals gate — lifecycle locked" : "Mastery wheel"}
	>
		{#each slices as slice (slice.id)}
			<g
				role="button"
				tabindex={locked ? -1 : 0}
				aria-label={locked
					? `${slice.label}: unlock fundamentals first`
					: `${slice.label}: ${Math.round(slice.ratio * 100)}% mastered`}
				aria-disabled={locked}
				class="outline-none focus-visible:[&_path]:stroke-foreground"
				class:cursor-pointer={!locked}
				class:cursor-not-allowed={locked}
				onclick={() => {
					if (!locked) onpick(slice.id);
				}}
				onkeydown={(e) => {
					if (locked) return;
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						onpick(slice.id);
					}
				}}
			>
				<!-- empty track -->
				<path
					d={slice.track}
					fill={`hsl(${slice.hue} 45% 50% / ${locked ? 0.08 : 0.14})`}
					stroke="var(--color-background)"
					stroke-width="2"
				/>
				<!-- mastery fill: hub edge → outer rim -->
				{#if slice.fill}
					<path
						d={slice.fill}
						fill={`hsl(${slice.hue} 70% 52%)`}
						stroke="var(--color-background)"
						stroke-width="2"
						class="transition-all duration-500"
					/>
				{/if}
				<text
					x={slice.lx}
					y={slice.ly}
					text-anchor="middle"
					dominant-baseline="middle"
					class="pointer-events-none select-none text-[9px] font-semibold"
					fill={`hsl(${slice.hue} 50% 28%)`}
					stroke="var(--color-card)"
					stroke-width="3"
					paint-order="stroke fill"
					opacity={locked ? 0.55 : 1}
				>
					{slice.label}
				</text>
			</g>
		{/each}
		<!-- center hub -->
		<circle
			cx={CX}
			cy={CY}
			r={HUB_R}
			fill="var(--color-card)"
			stroke={locked ? "hsl(210 70% 52%)" : "var(--color-border)"}
			stroke-width="2"
		/>
	</svg>
	<div class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
		<span class="text-2xl font-bold tabular-nums">{hubPercent}%</span>
		<span class="text-[0.65rem] uppercase tracking-wide text-muted-foreground">{hubLabel}</span>
	</div>
</div>
