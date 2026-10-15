<script lang="ts">
import { onMount, tick } from "svelte";
import { Button } from "$lib/components/ui/button";

let { busy }: { busy: boolean } = $props();
const current = import.meta.env.PUBLIC_RELEASE_ID;
const identity = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/u;
const attemptKey = "learn-the-far:update-attempt:v1";
let detected = $state<string | null>(null);
let dismissed = $state<string | null>(null);
let applying = $state(false);
let reloading = false;
let online = $state(true);
let error = $state("");
let announcement = $state("");
let reopenButton = $state<HTMLButtonElement | null>(null);
let laterButton = $state<HTMLButtonElement | null>(null);
let stopped = false;
let timer: number | undefined;
let lastCheck = 0;
let failures = 0;
let request: Promise<string | null> | null = null;
let abort: AbortController | null = null;

function sessionBusy(): boolean {
	return busy;
}

function clearTimer() {
	window.clearTimeout(timer);
	timer = undefined;
}

function schedule() {
	clearTimer();
	if (stopped || document.hidden || !navigator.onLine || applying) {
		return;
	}
	const delay = Math.min(300_000 * 2 ** failures, 1_800_000) + Math.random() * 30_000;
	timer = window.setTimeout(() => void check(), delay);
}

function focusPage() {
	document.querySelector<HTMLHeadingElement>("main h1")?.focus();
}

function observe(release: string) {
	if (release === current) {
		const focusedNotice = Boolean(document.activeElement?.closest('[aria-label="Website update"]'));
		if (focusedNotice) {
			void tick().then(() => {
				if (!detected && !error) {
					focusPage();
				}
			});
		}
		if (detected !== null) {
			error = "";
		}
		detected = null;
		dismissed = null;
		announcement = "";
	} else if (release !== detected) {
		const replacedFocus = document.activeElement === reopenButton;
		if (replacedFocus) {
			void tick().then(() => {
				if (!stopped && detected === release && document.activeElement === document.body) {
					laterButton?.focus();
				}
			});
		}
		detected = release;
		dismissed = null;
		announcement = "An update is available. Choose when to reload.";
	}
}

function fetchRelease(): Promise<string | null> {
	if (request !== null) {
		return request;
	}
	abort = new AbortController();
	request = (async () => {
		try {
			const response = await fetch("/release.json", {
				cache: "no-store",
				credentials: "same-origin",
				signal: AbortSignal.any([abort.signal, AbortSignal.timeout(10_000)]),
			});
			if (
				!response.ok ||
				response.redirected ||
				new URL(response.url).origin !== location.origin ||
				!response.headers.get("content-type")?.includes("application/json")
			) {
				return null;
			}
			const release: unknown = await response.json();
			return typeof release === "object" &&
				release !== null &&
				"id" in release &&
				typeof release.id === "string" &&
				identity.test(release.id)
				? release.id
				: null;
		} catch {
			// Optional metadata failures never establish a release or reload the page.
			return null;
		} finally {
			request = null;
			abort = null;
		}
	})();
	return request;
}

async function check() {
	if (stopped || request || applying || document.hidden || !navigator.onLine) {
		return;
	}
	if (
		Date.now() - lastCheck <
		Math.max(60_000, failures ? Math.min(300_000 * 2 ** failures, 1_800_000) : 0)
	) {
		schedule();
		return;
	}
	lastCheck = Date.now();
	const release = await fetchRelease();
	if (stopped) {
		return;
	}
	failures = release ? 0 : Math.min(failures + 1, 3);
	if (release) {
		observe(release);
	}
	schedule();
}

async function applyUpdate() {
	if (sessionBusy() || applying || !detected || !navigator.onLine) {
		return;
	}
	const target = detected;
	let focusRemaining = false;
	applying = true;
	error = "";
	clearTimer();
	try {
		// A click requires a fresh check, even when a background check is in flight.
		await request;
		if (stopped) {
			return;
		}
		const latest = await fetchRelease();
		if (stopped) {
			return;
		}
		if (!latest || !navigator.onLine) {
			error = "Could not check the update. Reconnect and try again.";
			return;
		}
		if (latest !== target) {
			observe(latest);
			error =
				latest === current
					? "This version is current again."
					: "Another update is available. Choose Update and reload again when ready.";
			focusRemaining = latest === current;
			return;
		}
		if (sessionBusy()) {
			error = "Finish your quiz to reload safely.";
			return;
		}
		try {
			sessionStorage.setItem(attemptKey, JSON.stringify({ from: current, target }));
		} catch {
			error = "This browser cannot track the update. Reload manually when ready.";
			return;
		}
		// Only this explicit handler reloads, once, retaining the current URL and storage.
		reloading = true;
		window.location.reload();
	} finally {
		if (!reloading) {
			applying = false;
			schedule();
			if (focusRemaining) {
				await tick();
				laterButton?.focus();
			}
		}
	}
}

async function later() {
	dismissed = detected;
	if (!detected) {
		error = "";
	}
	announcement = "";
	await tick();
	if (detected) {
		reopenButton?.focus();
	} else {
		focusPage();
	}
}

async function reopen() {
	dismissed = null;
	await tick();
	laterButton?.focus();
}

onMount(() => {
	stopped = false;
	online = navigator.onLine;
	try {
		const raw = sessionStorage.getItem(attemptKey);
		sessionStorage.removeItem(attemptKey);
		const attempt: unknown = raw ? JSON.parse(raw) : null;
		if (
			typeof attempt === "object" &&
			attempt !== null &&
			"from" in attempt &&
			"target" in attempt &&
			typeof attempt.from === "string" &&
			typeof attempt.target === "string" &&
			identity.test(attempt.from) &&
			identity.test(attempt.target) &&
			current === attempt.from
		) {
			detected = attempt.target;
			error = "The page is still on the previous version. Try updating again when ready.";
			announcement = "";
		}
	} catch {
		// Missing or invalid tab-local attempt metadata does not change user progress.
	}
	const resume = () => {
		online = navigator.onLine;
		if (document.hidden || !online) {
			clearTimer();
		} else {
			void check();
		}
	};
	window.addEventListener("focus", resume);
	window.addEventListener("online", resume);
	window.addEventListener("offline", resume);
	document.addEventListener("visibilitychange", resume);
	void check();
	return () => {
		stopped = true;
		abort?.abort();
		clearTimer();
		window.removeEventListener("focus", resume);
		window.removeEventListener("online", resume);
		window.removeEventListener("offline", resume);
		document.removeEventListener("visibilitychange", resume);
	};
});
</script>

<p role="status" class="sr-only">
	{#key detected}<span>{announcement}</span>{/key}
	{detected === null || dismissed !== detected ? error : ""}
</p>

{#if detected || error}
	<aside aria-label="Website update" class="border-b border-border bg-background px-4 py-3 text-foreground">
		<div class="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3">
			{#if detected && dismissed === detected}
				<Button variant="outline" bind:ref={reopenButton} onclick={reopen}>Update available</Button>
			{:else}
				<div class="text-sm">
					<p>{detected ? "An update is available." : "Update check."} {busy ? "Finish your quiz to reload safely." : "Your saved progress will be kept."}</p>
					{#if !online}<p>Reconnect before updating.</p>{/if}
					{#if error}<p>{error}</p>{/if}
				</div>
				<div class="flex flex-wrap gap-2">
					{#if detected}<Button disabled={busy || applying || !online} onclick={() => void applyUpdate()}>{applying ? "Checking update…" : "Update and reload"}</Button>{/if}
					<Button variant="outline" disabled={applying} bind:ref={laterButton} onclick={later}>Later</Button>
				</div>
			{/if}
		</div>
	</aside>
{/if}
