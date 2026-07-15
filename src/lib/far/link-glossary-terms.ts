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

let cachedRegex: RegExp | null = null;
let cachedLookup: Map<string, string> | null = null;

function matchEngine(): { regex: RegExp; lookup: Map<string, string> } {
	if (cachedRegex && cachedLookup) {
		return { regex: cachedRegex, lookup: cachedLookup };
	}

	const patterns = allMatchPatterns();
	const lookup = new Map<string, string>();
	for (const p of patterns) {
		const key = p.label.toLowerCase();
		// Longest-first list: first write wins for duplicate labels.
		if (!lookup.has(key)) lookup.set(key, p.termId);
	}

	const alternation = patterns.map((p) => escapeRegExp(p.label)).join("|");
	const b = boundaryClass();
	// Lookbehind/lookahead keep punctuation out of the match while still matching at string edges.
	cachedRegex = new RegExp(`(?<=^|${b})(${alternation})(?=$|${b})`, "gi");
	cachedLookup = lookup;
	return { regex: cachedRegex, lookup: cachedLookup };
}

/**
 * Split plain text into text/term segments. Mutates `linkedIds` so each term id
 * is linked at most once across a chapter (pass the same Set to every field).
 */
export function segmentGlossaryText(text: string, linkedIds: Set<string>): TextSegment[] {
	if (!text) return [];

	const { regex, lookup } = matchEngine();
	regex.lastIndex = 0;

	const segments: TextSegment[] = [];
	let lastIndex = 0;
	let match: RegExpExecArray | null;

	while ((match = regex.exec(text)) !== null) {
		const matched = match[1] ?? match[0];
		const termId = lookup.get(matched.toLowerCase());
		if (!termId || linkedIds.has(termId)) {
			continue;
		}

		if (match.index > lastIndex) {
			segments.push({ kind: "text", text: text.slice(lastIndex, match.index) });
		}

		linkedIds.add(termId);
		segments.push({ kind: "term", text: matched, termId });
		lastIndex = match.index + matched.length;
	}

	if (lastIndex < text.length) {
		segments.push({ kind: "text", text: text.slice(lastIndex) });
	}

	if (segments.length === 0) {
		return [{ kind: "text", text }];
	}

	return segments;
}
