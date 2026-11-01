// biome-ignore-all lint/performance/noAwaitInLoops: Serialize conditional uploads and verification with bounded retries.
import { createHash } from "node:crypto";
import { lstat, readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { setTimeout } from "node:timers/promises";
import { CATALOG } from "./catalog.ts";
export const CACHE_CONTROL = "public, max-age=31536000, immutable";
const DISTRIBUTION = /^d[a-z0-9]+\.cloudfront\.net$/u;
const HASH = /^[a-f0-9]{64}$/u;
const MEDIA_EXTENSION = /\.(?:png|ico|mp3|wav|ogg|webp|jpe?g|gif|svg)$/u;
export interface Asset {
	path: string;
	sha256: string;
	bytes: number;
	key: string;
	contentType: string;
}
export interface AssetManifest {
	version: 1;
	assets: Asset[];
}
export const digest = (bytes: Uint8Array): string =>
	createHash("sha256").update(bytes).digest("hex");
export function objectKey(path: string, sha256: string): string {
	return `sha256/${sha256}${path}`;
}
function record(value: unknown): value is Record<string, unknown> {
	return !!value && typeof value === "object" && !Array.isArray(value);
}
function parseAuthorizations(value: unknown): Record<string, string> {
	if (!record(value) || Object.values(value).some((url) => typeof url !== "string")) {
		throw new Error("Invalid authorization map");
	}
	return Object.fromEntries(
		Object.entries(value).map(([key, url]) => {
			if (typeof url !== "string") {
				throw new Error("Invalid authorization URL");
			}
			return [key, url];
		}),
	);
}
export function parseAuthorizationJson(text: string): Record<string, string> {
	try {
		return parseAuthorizations(JSON.parse(text));
	} catch {
		// biome-ignore lint/style/useErrorCause: Parser errors can quote credential-bearing input; redact both JSON and schema failures.
		throw new Error("Invalid upload authorization document (details redacted)");
	}
}
export function parseManifest(value: unknown): AssetManifest {
	if (
		!record(value) ||
		value["version"] !== 1 ||
		!Array.isArray(value["assets"]) ||
		Object.keys(value)
			.sort((left, right) => left.localeCompare(right, "en"))
			.join(",") !== "assets,version"
	) {
		throw new Error("Invalid manifest");
	}
	const assets: Asset[] = [];
	let previous = "";
	const entries: readonly unknown[] = value["assets"];
	for (const entry of entries) {
		if (
			!record(entry) ||
			Object.keys(entry)
				.sort((left, right) => left.localeCompare(right, "en"))
				.join(",") !== "bytes,contentType,key,path,sha256"
		) {
			throw new Error("Invalid manifest entry");
		}
		const { path, sha256, bytes, key, contentType } = entry;
		const catalog = CATALOG.find((item) => item.path === path);
		if (
			typeof path !== "string" ||
			path <= previous ||
			typeof sha256 !== "string" ||
			!HASH.test(sha256) ||
			typeof bytes !== "number" ||
			!Number.isSafeInteger(bytes) ||
			bytes <= 0 ||
			!catalog ||
			contentType !== catalog.contentType ||
			key !== objectKey(path, sha256)
		) {
			throw new Error("Invalid asset contract");
		}
		assets.push({
			path,
			sha256,
			bytes,
			key: objectKey(path, sha256),
			contentType: catalog.contentType,
		});
		previous = path;
	}
	if (!assets.length) {
		throw new Error("Empty manifest");
	}
	return { version: 1, assets };
}
async function mediaFiles(root: string, prefix = ""): Promise<string[]> {
	const paths: string[] = [];
	for (const entry of await readdir(root, { withFileTypes: true })) {
		if (entry.isSymbolicLink()) {
			throw new Error("Symlinks are not media sources");
		}
		const relative = `${prefix}/${entry.name}`;
		if (entry.isDirectory()) {
			paths.push(...(await mediaFiles(join(root, entry.name), relative)));
		} else if (MEDIA_EXTENSION.test(entry.name)) {
			paths.push(relative);
		}
	}
	return paths.sort((left, right) => left.localeCompare(right, "en"));
}
/** Positive publication catalog, checked against actual document/sound references and all public media. */
export async function publishedReferences(root: string): Promise<Set<string>> {
	const actual = await mediaFiles(join(root, "public"));
	const expected = CATALOG.map((item) => item.path).sort((left, right) =>
		left.localeCompare(right, "en"),
	);
	if (JSON.stringify(actual) !== JSON.stringify(expected)) {
		throw new Error("Unclassified public media; review publication catalog before uploading");
	}
	for (const item of CATALOG) {
		const source = await readFile(join(root, item.source), "utf8");
		if (!source.includes(JSON.stringify(item.path))) {
			throw new Error(`Missing published reference: ${item.path}`);
		}
	}
	return new Set(expected);
}
export async function createManifest(
	root: string,
	references: ReadonlySet<string>,
): Promise<AssetManifest> {
	const assets: Asset[] = [];
	if ((await lstat(join(root, "public"))).isSymbolicLink()) {
		throw new Error("Public source root cannot be a symlink");
	}
	for (const path of [...references].sort((left, right) => left.localeCompare(right, "en"))) {
		const catalog = CATALOG.find((item) => item.path === path);
		if (!catalog) {
			throw new Error("Not in published media catalog");
		}
		let current = join(root, "public");
		for (const part of path.slice(1).split("/")) {
			current = join(current, part);
			if ((await lstat(current)).isSymbolicLink()) {
				throw new Error("Symlink is not a media source");
			}
		}
		const bytes = await readFile(current);
		const sha256 = digest(bytes);
		assets.push({
			path,
			sha256,
			bytes: bytes.length,
			key: objectKey(path, sha256),
			contentType: catalog.contentType,
		});
	}
	return parseManifest({ version: 1, assets });
}
export function assertCoverage(manifest: AssetManifest, references: ReadonlySet<string>): void {
	if (
		JSON.stringify(manifest.assets.map((item) => item.path)) !==
		JSON.stringify([...references].sort((left, right) => left.localeCompare(right, "en")))
	) {
		throw new Error("Published media coverage mismatch");
	}
}
export interface ObjectResponse {
	bytes: Uint8Array;
	contentType: string | null;
	cacheControl: string | null;
}
export interface AssetTransport {
	get(asset: Asset): Promise<ObjectResponse | undefined>;
	put(asset: Asset, bytes: Uint8Array): Promise<void>;
}

function assertObject(asset: Asset, response: ObjectResponse): void {
	if (response.bytes.length !== asset.bytes || digest(response.bytes) !== asset.sha256) {
		throw new Error(`Object bytes mismatch: ${asset.path}`);
	}
	if (response.contentType !== asset.contentType || response.cacheControl !== CACHE_CONTROL) {
		throw new Error(`Object headers mismatch: ${asset.path}`);
	}
}

/** Retry transient transport failures only; integrity errors never become permission to overwrite. */
async function retry<T>(operation: () => Promise<T>): Promise<T> {
	let last: unknown;
	for (let attempt = 0; attempt < 3; attempt++) {
		try {
			return await operation();
		} catch (error) {
			if (!(error instanceof TransientError)) {
				throw error;
			}
			last = error;
			if (attempt < 2) {
				await setTimeout(1_100 * (attempt + 1));
			}
		}
	}
	throw last;
}
export class TransientError extends Error {}

export async function verifyAssets(
	manifest: AssetManifest,
	transport: AssetTransport,
): Promise<void> {
	for (const asset of manifest.assets) {
		const response = await retry(() => transport.get(asset));
		if (!response) {
			throw new Error(`Missing object: ${asset.path}`);
		}
		assertObject(asset, response);
	}
}

export async function uploadAssets(
	manifest: AssetManifest,
	read: (asset: Asset) => Promise<Uint8Array>,
	transport: AssetTransport,
): Promise<void> {
	// Validate all source bytes before the first write.
	for (const asset of manifest.assets) {
		const bytes = await read(asset);
		if (bytes.length !== asset.bytes || digest(bytes) !== asset.sha256) {
			throw new Error(`Local bytes mismatch: ${asset.path}`);
		}
	}
	for (const asset of manifest.assets) {
		const existing = await retry(() => transport.get(asset));
		if (existing) {
			assertObject(asset, existing);
			continue;
		}
		const bytes = await read(asset);
		if (bytes.length !== asset.bytes || digest(bytes) !== asset.sha256) {
			throw new Error(`Local bytes mismatch: ${asset.path}`);
		}
		await retry(() => transport.put(asset, bytes));
		const uploaded = await retry(async () => {
			const response = await transport.get(asset);
			// S3-origin CloudFront errors cache for at least one second, even with TTL 0.
			if (!response) {
				throw new TransientError(`Upload not readable: ${asset.path}`);
			}
			return response;
		});
		assertObject(asset, uploaded);
	}
}

export function deliveryOrigin(value: string): string {
	const url = new URL(value);
	if (
		url.protocol !== "https:" ||
		url.username ||
		url.password ||
		url.port ||
		url.pathname !== "/" ||
		url.search ||
		url.hash ||
		!DISTRIBUTION.test(url.hostname)
	) {
		throw new Error("Expected the stack's HTTPS CloudFront origin");
	}
	return url.origin;
}
export function assetUrl(origin: string, asset: Asset): string {
	return `${deliveryOrigin(origin)}/${asset.key}`;
}

export function assertUploadTarget(
	manifest: AssetManifest,
	bucket: string | undefined,
	key: string,
	value: string,
): void {
	let url: URL;
	try {
		url = new URL(value);
	} catch {
		// biome-ignore lint/style/useErrorCause: Malformed presigned inputs can carry credentials; do not expose the original URL.
		throw new Error("Invalid upload authorization URL");
	}
	if (
		!bucket ||
		!manifest.assets.some((entry) => entry.key === key) ||
		url.protocol !== "https:" ||
		url.username ||
		url.password ||
		url.port ||
		url.hash ||
		url.hostname !== `${bucket}.s3.us-east-1.amazonaws.com` ||
		decodeURIComponent(url.pathname) !== `/${key}` ||
		url.searchParams.get("X-Amz-Algorithm") !== "AWS4-HMAC-SHA256" ||
		!url.searchParams.has("X-Amz-Signature")
	) {
		throw new Error(
			"Authorization must contain only exact manifest keys on the intended regional S3 endpoint",
		);
	}
}
