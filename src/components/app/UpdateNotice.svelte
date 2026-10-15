<script lang="ts">
import { onMount } from "svelte";
import { Button } from "$lib/components/ui/button";

let { busy }: { busy: boolean } = $props();
let available = $state(false);
const current = import.meta.env.PUBLIC_RELEASE_ID;
const identity = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/u;

onMount(() => {
	let lastCheck = 0;
	let pending = false;
	let stopped = false;
	const controller = new AbortController();
	async function check() {
		if (pending || !navigator.onLine || document.hidden || Date.now() - lastCheck < 60_000) {
			return;
		}
		lastCheck = Date.now();
		pending = true;
		try {
			const response = await fetch("/release.json", {
				cache: "no-store",
				signal: AbortSignal.any([controller.signal, AbortSignal.timeout(10_000)]),
			});
			if (!response.ok || !response.headers.get("content-type")?.includes("application/json")) {
				return;
			}
			const release: unknown = await response.json();
			if (
				!stopped &&
				identity.test(current) &&
				typeof release === "object" &&
				release !== null &&
				"id" in release &&
				typeof release.id === "string" &&
				identity.test(release.id)
			) {
				available = release.id !== current;
			}
		} catch {
			// Offline, aborted and failed checks do not establish a new release.
		} finally {
			pending = false;
		}
	}
	const interval = window.setInterval(() => void check(), 300_000);
	window.addEventListener("focus", check);
	window.addEventListener("online", check);
	document.addEventListener("visibilitychange", check);
	void check();
	return () => {
		stopped = true;
		controller.abort();
		window.clearInterval(interval);
		window.removeEventListener("focus", check);
		window.removeEventListener("online", check);
		document.removeEventListener("visibilitychange", check);
	};
});
</script>

<p role="status" class="sr-only">
	{available ? `An update is available. ${busy ? "Finish your quiz to reload safely." : "Your saved progress will be kept."}` : ""}
</p>

{#if available}
	<aside aria-label="Website update" class="border-b border-border bg-background px-4 py-3 text-foreground">
		<div class="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3">
			<p class="text-sm">
				An update is available. {busy ? "Finish your quiz to reload safely." : "Your saved progress will be kept."}
			</p>
			<Button disabled={busy} onclick={() => { if (!busy) window.location.reload(); }}>Update and reload</Button>
		</div>
	</aside>
{/if}
