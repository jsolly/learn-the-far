<script lang="ts">
	import type { UnitStats } from "$lib/types";
	import type { UnitId } from "$lib/far/types";

	type Props = {
		stats: UnitStats[];
		/** While gated, Fundamentals stays active and lifecycle slices are locked. */
		gated?: boolean;
		onpick: (unitId: UnitId) => void;
	};

	let { stats, gated = false, onpick }: Props = $props();

	const CX = 120;
	const CY = 120;
	const OUTER_R = 112;
	const PAD_DEG = 2; // gap between slices

	function polar(radius: number, angleDeg: number): [number, number] {
		const a = ((angleDeg - 90) * Math.PI) / 180;
		return [CX + radius * Math.cos(a), CY + radius * Math.sin(a)];
	}

	/** Pie wedge from the center to radius, spanning a0..a1 degrees. */
	function sector(radius: number, a0: number, a1: number): string {
		if (radius <= 0.5) return "";
		const [x0, y0] = polar(radius, a0);
		const [x1, y1] = polar(radius, a1);
		const large = a1 - a0 > 180 ? 1 : 0;
		return [
			`M ${CX} ${CY}`,
			`L ${x0} ${y0}`,
			`A ${radius} ${radius} 0 ${large} 1 ${x1} ${y1}`,
			"Z",
		].join(" ");
	}

	/** CSS polygon matching the wedge, so each overlay is a native HTML button. */
	function hitArea(a0: number, a1: number): string {
		const points = [`${(CX / 240) * 100}% ${(CY / 240) * 100}%`];
		const steps = Math.max(2, Math.ceil((a1 - a0) / 5));
		for (let i = 0; i <= steps; i++) {
			const [x, y] = polar(OUTER_R, a0 + ((a1 - a0) * i) / steps);
			points.push(`${(x / 240) * 100}% ${(y / 240) * 100}%`);
		}
		return `polygon(${points.join(", ")})`;
	}

	let slices = $derived(
		stats.map((s, i) => {
			const step = 360 / stats.length;
			const a0 = i * step + PAD_DEG / 2;
			const a1 = (i + 1) * step - PAD_DEG / 2;
			const disabled = gated && s.unit.id !== "fundamentals";
			const emphasized = gated && s.unit.id === "fundamentals";
			const mid = (a0 + a1) / 2;
			const [lx, ly] = polar(OUTER_R * 0.67, mid);
			return {
				id: s.unit.id,
				label: s.unit.label,
				hue: s.unit.hue,
				ratio: s.ratio,
				disabled,
				emphasized,
				track: sector(OUTER_R, a0, a1),
				fill: sector(OUTER_R * s.ratio, a0, a1),
				hitArea: hitArea(a0, a1),
				lx,
				ly,
			};
		}),
	);
</script>

<div
	class="relative mx-auto aspect-square w-full max-w-[20rem]"
	role="group"
	aria-label={gated ? "Mastery wheel. Complete Fundamentals to unlock the lifecycle." : "Mastery wheel"}
>
	<svg
		viewBox="0 0 240 240"
		class="pointer-events-none h-full w-full"
		aria-hidden="true"
	>
		{#each slices as slice (slice.id)}
			<g opacity={slice.disabled ? 0.3 : 1}>
				<!-- empty track -->
				<path
					d={slice.track}
					fill={`hsl(${slice.hue} 45% 50% / ${slice.emphasized ? 0.28 : 0.14})`}
					stroke={slice.emphasized ? "var(--color-primary)" : "var(--color-background)"}
					stroke-width={slice.emphasized ? 4 : 2}
				/>
				<!-- mastery fill: center → outer rim -->
				{#if slice.fill}
					<path
						d={slice.fill}
						fill={`hsl(${slice.hue} 70% 52%)`}
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
				>
					{slice.label}
				</text>
			</g>
		{/each}
	</svg>
	{#each slices as slice (slice.id)}
		<button
			type="button"
			disabled={slice.disabled}
			aria-label={slice.disabled
				? `${slice.label}: locked until Fundamentals is complete`
				: `${slice.label}: ${Math.round(slice.ratio * 100)}% mastered`}
			class="absolute inset-0 bg-transparent outline-none transition-colors enabled:cursor-pointer enabled:hover:bg-foreground/5 enabled:focus-visible:bg-primary/20 disabled:cursor-not-allowed"
			style={`clip-path: ${slice.hitArea}`}
			onclick={() => onpick(slice.id)}
		></button>
	{/each}
</div>
