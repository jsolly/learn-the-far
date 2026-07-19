import { allMatchPatterns } from "./glossary";

export type TextSegment =
	| { kind: "text"; text: string }
	| { kind: "term"; text: string; termId: string };

function escapeRegExp(value: string): string {
	return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Word-ish boundary: start/end or non-alphanumeric (allows matching around & / hyphen punctuation). */
function boundaryClass(): string {
	return "[^A-Za-z0-9]";
}

/** Short all-caps labels (CO, KO, COR…) must match case-sensitively to avoid “Co.” false hits. */
function isAcronymLabel(label: string): boolean {
	return /^[A-Z0-9]{1,4}$/.test(label);
}

type MatchHit = { index: number; text: string; termId: string };

let cachedInsensitive: RegExp | null = null;
let cachedSensitive: RegExp | null = null;
let cachedInsensitiveLookup: Map<string, string> | null = null;
let cachedSensitiveLookup: Map<string, string> | null = null;

function matchEngine(): {
	insensitive: RegExp | null;
	sensitive: RegExp | null;
	insensitiveLookup: Map<string, string>;
	sensitiveLookup: Map<string, string>;
} {
	if (
		cachedInsensitiveLookup &&
		cachedSensitiveLookup &&
		(cachedInsensitive || cachedSensitive)
	) {
		return {
			insensitive: cachedInsensitive,
			sensitive: cachedSensitive,
			insensitiveLookup: cachedInsensitiveLookup,
			sensitiveLookup: cachedSensitiveLookup,
		};
	}

	const patterns = allMatchPatterns();
	const insensitiveLookup = new Map<string, string>();
	const sensitiveLookup = new Map<string, string>();
	const insensitiveLabels: string[] = [];
	const sensitiveLabels: string[] = [];

	for (const p of patterns) {
		if (isAcronymLabel(p.label)) {
			if (!sensitiveLookup.has(p.label)) {
				sensitiveLookup.set(p.label, p.termId);
				sensitiveLabels.push(p.label);
			}
		} else {
			const key = p.label.toLowerCase();
			if (!insensitiveLookup.has(key)) {
				insensitiveLookup.set(key, p.termId);
				insensitiveLabels.push(p.label);
			}
		}
	}

	const b = boundaryClass();
	cachedInsensitive =
		insensitiveLabels.length > 0
			? new RegExp(
					`(?<=^|${b})(${insensitiveLabels.map(escapeRegExp).join("|")})(?=$|${b})`,
					"gi",
				)
			: null;
	cachedSensitive =
		sensitiveLabels.length > 0
			? new RegExp(
					`(?<=^|${b})(${sensitiveLabels.map(escapeRegExp).join("|")})(?=$|${b})`,
					"g",
				)
			: null;
	cachedInsensitiveLookup = insensitiveLookup;
	cachedSensitiveLookup = sensitiveLookup;

	return {
		insensitive: cachedInsensitive,
		sensitive: cachedSensitive,
		insensitiveLookup,
		sensitiveLookup,
	};
}

function collectHits(
	text: string,
	regex: RegExp | null,
	lookup: Map<string, string>,
	normalize: (matched: string) => string,
): MatchHit[] {
	if (!regex) return [];
	regex.lastIndex = 0;
	const hits: MatchHit[] = [];
	let match: RegExpExecArray | null;
	while ((match = regex.exec(text)) !== null) {
		const matched = match[1] ?? match[0];
		const termId = lookup.get(normalize(matched));
		if (!termId) continue;
		hits.push({ index: match.index, text: matched, termId });
	}
	return hits;
}

/**
 * Split plain text into text/term segments. Mutates `linkedKeys` so each term
 * is linked at most once per surface class across a chapter (phrase once and
 * acronym once — e.g. “contracting officer” and later “CO”). Pass the same
 * Set to every field in a chapter.
 */
export function segmentGlossaryText(text: string, linkedKeys: Set<string>): TextSegment[] {
	if (!text) return [];

	const { insensitive, sensitive, insensitiveLookup, sensitiveLookup } = matchEngine();
	const hits = [
		...collectHits(text, insensitive, insensitiveLookup, (m) => m.toLowerCase()),
		...collectHits(text, sensitive, sensitiveLookup, (m) => m),
	].sort((a, b) => a.index - b.index || b.text.length - a.text.length);

	const segments: TextSegment[] = [];
	let lastIndex = 0;

	for (const hit of hits) {
		if (hit.index < lastIndex) continue;
		const key = `${hit.termId}:${isAcronymLabel(hit.text) ? "acronym" : "phrase"}`;
		if (linkedKeys.has(key)) continue;

		if (hit.index > lastIndex) {
			segments.push({ kind: "text", text: text.slice(lastIndex, hit.index) });
		}

		linkedKeys.add(key);
		segments.push({ kind: "term", text: hit.text, termId: hit.termId });
		lastIndex = hit.index + hit.text.length;
	}

	if (lastIndex < text.length) {
		segments.push({ kind: "text", text: text.slice(lastIndex) });
	}

	if (segments.length === 0) {
		return [{ kind: "text", text }];
	}

	return segments;
}
