/**
 * Verifies hub % matches weighted slice fill for representative progress mixes.
 * Run: node scripts/verify-pie-progress.mjs
 */
import {
	capturedFillRatio,
	hubCapturedPercent,
	weightedCapturedRatio,
} from "../src/lib/pie-progress.ts";

/** Real deck sizes (Basics is larger than the other lifecycle slices). */
const DECK = [
	{ id: "basics", total: 50 },
	{ id: "find", total: 22 },
	{ id: "shape", total: 22 },
	{ id: "bid", total: 22 },
	{ id: "vehicle", total: 22 },
	{ id: "team", total: 22 },
	{ id: "propose", total: 22 },
	{ id: "win", total: 22 },
];

function slice(total, cleared, { mastered = cleared, learning = 0 } = {}) {
	const ratio = total === 0 ? 0 : cleared / total;
	return {
		cleared,
		total,
		ratio,
		masteredRatio: total === 0 ? 0 : mastered / total,
		learningRatio: total === 0 ? 0 : learning / total,
	};
}

function scenario(name, clearedById) {
	const slices = DECK.map(({ id, total }) => {
		const cleared = clearedById[id] ?? 0;
		// Split: first clear = learning, second+ = mastered (approx for fill layers).
		const learning = Math.min(cleared, Math.ceil(cleared * 0.3));
		const mastered = cleared - learning;
		return slice(total, cleared, { mastered, learning });
	});

	const hub = hubCapturedPercent(slices);
	const weighted = weightedCapturedRatio(slices);
	const weightedPct = Math.round(weighted * 100);
	const fillMatchesRatio = slices.every(
		(s) => Math.abs(capturedFillRatio(s) - s.ratio) < 1e-9,
	);

	const ok = hub === weightedPct && fillMatchesRatio;
	const detail = DECK.map(({ id, total }) => {
		const c = clearedById[id] ?? 0;
		const pct = total ? Math.round((c / total) * 100) : 0;
		const angle = Math.round((total / DECK.reduce((n, d) => n + d.total, 0)) * 100);
		return `${id} ${pct}% of slice (angle ~${angle}% of wheel, ${c}/${total})`;
	}).join("; ");

	console.log(`${ok ? "PASS" : "FAIL"} ${name}`);
	console.log(`  hub=${hub}%  weightedArea=${weightedPct}%  fill≡ratio=${fillMatchesRatio}`);
	console.log(`  ${detail}`);
	if (!ok) process.exitCode = 1;
	return ok;
}

scenario("empty", {});
scenario("user-like ~20% (Basics heavy)", { basics: 32, vehicle: 8 });
scenario("Basics 80% only", { basics: 40 });
scenario("Vehicle 100% only", { vehicle: 22 });
scenario("every slice 50%", Object.fromEntries(DECK.map((d) => [d.id, Math.floor(d.total / 2)])));
scenario("full capture", Object.fromEntries(DECK.map((d) => [d.id, d.total])));
scenario("thin progress across many slices", {
	basics: 5,
	find: 5,
	shape: 5,
	bid: 5,
	vehicle: 5,
	team: 5,
	propose: 5,
	win: 5,
});
scenario("one slice fully mastered look (learning+mastered layers)", {
	basics: 50, // all cleared — fill uses mastered+learning ratios in UI
});

if (!process.exitCode) console.log("\nAll pie-progress scenarios passed.");
