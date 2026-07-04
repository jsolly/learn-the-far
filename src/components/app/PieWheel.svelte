<script lang="ts">
	import type { UnitStats } from "$lib/types";
	import type { UnitId } from "$lib/far/types";

	type Props = {
		stats: UnitStats[];
		masteryPercent: number;
		onpick: (unitId: UnitId) => void;
	};

	let { stats, masteryPercent, onpick }: Props = $props();

	const CX = 120;
	const CY = 120;
	const R = 112;
	const PAD_DEG = 2; // gap between slices

	function polar(radius: number, angleDeg: number): [number, number] {
		const a = ((angleDeg - 90) * Math.PI) / 180;
		return [CX + radius * Math.cos(a), CY + radius * Math.sin(a)];
	}

	// A pie sector from the center out to `radius`, spanning a0..a1 degrees.
	function sector(radius: number, a0: number, a1: number): string {
		if (radius <= 0) return "";
		const [x0, y0] = polar(radius, a0);
		const [x1, y1] = polar(radius, a1);
		const large = a1 - a0 > 180 ? 1 : 0;
		return `M ${CX} ${CY} L ${x0} ${y0} A ${radius} ${radius} 0 ${large} 1 ${x1} ${y1} Z`;
	}

	let slices = $derived(
		stats.map((s, i) => {
			const step = 360 / stats.length;
			const a0 = i * step + PAD_DEG / 2;
			const a1 = (i + 1) * step - PAD_DEG / 2;
			const fillR = Math.max(0, R * s.ratio);
			const mid = (a0 + a1) / 2;
			const [lx, ly] = polar(R * 0.66, mid);
			return {
				id: s.unit.id,
				label: s.unit.label,
				hue: s.unit.hue,
				ratio: s.ratio,
				level: s.level,
				track: sector(R, a0, a1),
				fill: sector(fillR, a0, a1),
				lx,
				ly,
			};
		}),
	);
</script>

<div class="relative mx-auto aspect-square w-full max-w-[20rem]">
	<svg viewBox="0 0 240 240" class="h-full w-full -rotate-0" role="group" aria-label="Mastery wheel">
		{#each slices as slice (slice.id)}
			<g
				role="button"
				tabindex="0"
				aria-label={`${slice.label}: ${Math.round(slice.ratio * 100)}% mastered`}
				class="cursor-pointer outline-none focus-visible:[&_path]:stroke-foreground"
				onclick={() => onpick(slice.id)}
				onkeydown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						onpick(slice.id);
					}
				}}
			>
				<!-- track -->
				<path
					d={slice.track}
					fill={`hsl(${slice.hue} 45% 50% / 0.14)`}
					stroke="var(--color-background)"
					stroke-width="2"
				/>
				<!-- fill -->
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
					fill={slice.level === "new" ? `hsl(${slice.hue} 40% 45%)` : "white"}
				>
					{slice.label}
				</text>
			</g>
		{/each}
		<!-- center hub -->
		<circle cx={CX} cy={CY} r="46" fill="var(--color-card)" stroke="var(--color-border)" stroke-width="2" />
	</svg>
	<div class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
		<span class="text-2xl font-bold tabular-nums">{masteryPercent}%</span>
		<span class="text-[0.65rem] uppercase tracking-wide text-muted-foreground">captured</span>
	</div>
</div>
