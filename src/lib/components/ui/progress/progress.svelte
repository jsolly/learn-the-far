<script lang="ts">
	import { Progress as ProgressPrimitive } from "bits-ui";
	import { cn, type WithoutChildrenOrChild } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		max = 100,
		value,
		/** Optional preview fill (e.g. current quiz question) — lighter than `value`. */
		buffer,
		...restProps
	}: WithoutChildrenOrChild<ProgressPrimitive.RootProps> & {
		buffer?: number;
	} = $props();

	let maxSafe = $derived(max ?? 1);
	let valuePct = $derived(Math.min(100, Math.max(0, (100 * (value ?? 0)) / maxSafe)));
	let bufferPct = $derived(
		buffer == null ? null : Math.min(100, Math.max(0, (100 * buffer) / maxSafe)),
	);
	let showBuffer = $derived(bufferPct != null && bufferPct > valuePct + 0.01);
</script>

<ProgressPrimitive.Root
	bind:ref
	data-slot="progress"
	class={cn("bg-muted relative flex h-1 w-full items-center overflow-x-hidden rounded-full", className)}
	{value}
	{max}
	{...restProps}
>
	{#if showBuffer && bufferPct != null}
		<div
			data-slot="progress-buffer"
			class="absolute inset-y-0 left-0 rounded-full transition-all"
			style={`width: ${bufferPct}%; background-color: color-mix(in oklch, var(--primary) 28%, transparent); background-image: repeating-linear-gradient(-45deg, transparent 0 3px, color-mix(in oklch, var(--primary) 18%, transparent) 3px 6px);`}
			aria-hidden="true"
		></div>
	{/if}
	<div
		data-slot="progress-indicator"
		class="bg-primary absolute inset-y-0 left-0 rounded-full transition-all"
		style="width: {valuePct}%"
	></div>
</ProgressPrimitive.Root>
