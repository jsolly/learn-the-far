// biome-ignore-all lint/suspicious/useAwait: Fakes implement the asynchronous transport interface.
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdir, mkdtemp, readFile, rm, symlink, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { it } from "vitest";
import manifest from "../../config/aws/static-assets/manifest.json" with { type: "json" };
import template from "../../config/aws/static-assets/template.json" with { type: "json" };
import { CATALOG } from "../../scripts/assets/catalog.ts";
import {
	type AssetManifest,
	type AssetTransport,
	assertCoverage,
	assertUploadTarget,
	assetUrl,
	CACHE_CONTROL,
	createManifest,
	digest,
	type ObjectResponse,
	objectKey,
	parseManifest,
	publishedReferences,
	TransientError,
	uploadAssets,
	verifyAssets,
} from "../../scripts/assets/media.ts";

const bytes = new TextEncoder().encode("image-fixture");
const path = "/og-image.png";
const sha256 = digest(bytes);
const asset = {
	path,
	sha256,
	bytes: bytes.length,
	key: objectKey(path, sha256),
	contentType: "image/png",
};
const fixture: AssetManifest = { version: 1, assets: [asset] };
const object = (): ObjectResponse => ({
	bytes,
	contentType: "image/png",
	cacheControl: CACHE_CONTROL,
});
function fake(
	initial?: ObjectResponse,
): AssetTransport & { writes: number; value: ObjectResponse | undefined } {
	const state = {
		writes: 0,
		value: initial,
		async get() {
			return state.value;
		},
		async put() {
			state.writes++;
			state.value = object();
		},
	};
	return state;
}
async function publicationFixture(): Promise<string> {
	const root = await mkdtemp(join(tmpdir(), "learn-media-"));
	await mkdir(join(root, "config/aws/static-assets"), { recursive: true });
	for (const item of CATALOG) {
		const source = join(root, item.source);
		await mkdir(dirname(source), { recursive: true });
		await writeFile(
			source,
			CATALOG.filter((other) => other.source === item.source)
				.map((other) => JSON.stringify(other.path))
				.join("\n"),
		);
		const target = join(root, `public${item.path}`);
		await mkdir(dirname(target), { recursive: true });
		await writeFile(target, bytes);
	}
	return root;
}

it("the committed manifest pins every published media source and excludes retained executable assets", async () => {
	const root = fileURLToPath(new URL("../../", import.meta.url));
	const references = await publishedReferences(root);
	assert.equal(references.size, 6);
	assertCoverage(parseManifest(manifest), references);
	assert.deepEqual(await createManifest(root, references), manifest);
	assert.equal(
		manifest.assets.reduce((sum, item) => sum + item.bytes, 0),
		893735,
	);
	assert.ok(!manifest.assets.some((item) => item.path.includes("confetti")));
});

it("manifest schemas reject duplicate, reordered, private and altered key/type contracts", () => {
	assert.deepEqual(parseManifest(fixture), fixture);
	for (const change of [
		{ path: "/private.png" },
		{ path: "/sounds/../private.mp3" },
		{ key: "different" },
		{ contentType: "text/html" },
		{ bytes: 0 },
		{ sha256: "bad" },
	]) {
		assert.throws(() => parseManifest({ version: 1, assets: [{ ...asset, ...change }] }));
	}
	assert.throws(() => parseManifest({ version: 1, assets: [asset, asset] }));
	assert.throws(() => parseManifest({ version: 1, assets: [], other: true }));
	assert.equal(
		assetUrl("https://d123.cloudfront.net", asset),
		`https://d123.cloudfront.net/sha256/${sha256}/og-image.png`,
	);
	assert.throws(() => assetUrl("https://other.example", asset));
});

it("publication inventory refuses unclassified files, missing references and symlink sources", async () => {
	const root = await publicationFixture();
	try {
		const references = await publishedReferences(root);
		assert.equal(references.size, 6);
		await writeFile(join(root, "public/private.webp"), bytes);
		await assert.rejects(publishedReferences(root), /Unclassified/u);
		await rm(join(root, "public/private.webp"));
		await writeFile(join(root, "src/lib/quiz-sounds.svelte.ts"), "unreferenced");
		await assert.rejects(publishedReferences(root), /Missing published reference/u);
		await rm(join(root, `public${path}`));
		await symlink(join(root, "public/favicon.ico"), join(root, `public${path}`));
		await assert.rejects(createManifest(root, new Set([path])), /Symlink/u);
	} finally {
		await rm(root, { recursive: true, force: true });
	}
});

it("uploads are idempotent and never overwrite mismatched objects", async () => {
	const transport = fake();
	await uploadAssets(fixture, async () => bytes, transport);
	await uploadAssets(fixture, async () => bytes, transport);
	assert.equal(transport.writes, 1);
	transport.value = { ...object(), bytes: new Uint8Array([0]) };
	await assert.rejects(
		uploadAssets(fixture, async () => bytes, transport),
		/bytes mismatch/u,
	);
	assert.equal(transport.writes, 1);
});

it("missing, hash-mismatched and incorrectly served objects cannot pass verification", async () => {
	await assert.rejects(verifyAssets(fixture, fake()), /Missing object/u);
	await Promise.all(
		[
			{ bytes: new Uint8Array(bytes.length) },
			{ contentType: "text/html" },
			{ cacheControl: "max-age=10" },
		].map((change) =>
			assert.rejects(verifyAssets(fixture, fake({ ...object(), ...change })), /mismatch/u),
		),
	);
	const transport = fake();
	await assert.rejects(
		uploadAssets(fixture, async () => new Uint8Array([2]), transport),
		/Local bytes mismatch/u,
	);
	assert.equal(transport.writes, 0);
});

it("transient network failures and fresh-upload negative caches retry with a bound", async () => {
	let reads = 0;
	const transport = fake();
	transport.get = async () => (++reads < 3 ? undefined : object());
	await uploadAssets(fixture, async () => bytes, transport);
	assert.equal(reads, 3);
	assert.equal(transport.writes, 1);
	reads = 0;
	transport.get = async () => {
		reads++;
		throw new TransientError("offline");
	};
	await assert.rejects(verifyAssets(fixture, transport), /offline/u);
	assert.equal(reads, 3);
	reads = 0;
	transport.get = async () => {
		reads++;
		throw new Error("denied");
	};
	await assert.rejects(verifyAssets(fixture, transport), /denied/u);
	assert.equal(reads, 1);
});

it("upload authorization pins the reviewed bucket, region, manifest key and HTTPS URL", () => {
	const bucket = "reviewed-assets-bucket";
	const signed = `https://${bucket}.s3.us-east-1.amazonaws.com/${asset.key}?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=fake`;
	assertUploadTarget(fixture, bucket, asset.key, signed);
	assert.throws(() => assertUploadTarget(fixture, "other", asset.key, signed));
	assert.throws(() => assertUploadTarget(fixture, bucket, "other", signed));
	assert.throws(() =>
		assertUploadTarget(fixture, bucket, asset.key, signed.replace("https:", "http:")),
	);
});

it("the real Node TypeScript CLI inventories and checks independent source fixtures", async () => {
	const root = await publicationFixture();
	const cli = fileURLToPath(new URL("../../scripts/assets/cli.ts", import.meta.url));
	const run = (command: string) =>
		execFileSync(process.execPath, [cli, command], { cwd: root, encoding: "utf8", stdio: "pipe" });
	try {
		assert.match(run("inventory"), /Inventoried 6 published media/u);
		assert.match(run("check"), /Verified 6 source media/u);
		await writeFile(join(root, `public${path}`), "corrupted");
		assert.throws(() => run("check"));
		const generated: unknown = JSON.parse(
			await readFile(join(root, "config/aws/static-assets/manifest.json"), "utf8"),
		);
		assert.equal(parseManifest(generated).assets.length, 6);
	} finally {
		await rm(root, { recursive: true, force: true });
	}
});

it("the stack keeps storage private, encrypted, versioned and retained behind its signed distribution", () => {
	const resources = template.Resources;
	assert.equal(resources.MediaBucket.DeletionPolicy, "Retain");
	assert.equal(resources.MediaBucket.UpdateReplacePolicy, "Retain");
	assert.equal(resources.MediaBucket.Properties.VersioningConfiguration.Status, "Enabled");
	assert.ok(
		Object.values(resources.MediaBucket.Properties.PublicAccessBlockConfiguration).every(Boolean),
	);
	assert.equal(
		resources.MediaBucket.Properties.OwnershipControls.Rules[0]?.ObjectOwnership,
		"BucketOwnerEnforced",
	);
	assert.equal(
		resources.OriginAccess.Properties.OriginAccessControlConfig.SigningBehavior,
		"always",
	);
	const policy = JSON.stringify(resources.MediaBucketPolicy);
	assert.ok(
		policy.includes("AWS:SourceArn") &&
			policy.includes("/sha256/*") &&
			policy.includes("aws:SecureTransport"),
	);
	assert.equal(resources.MediaCache.Properties.CachePolicyConfig.MinTTL, 0);
});

it("verification receipts cannot attest a manifest changed while delivery requests run", async () => {
	const root = await publicationFixture();
	const cli = fileURLToPath(new URL("../../scripts/assets/cli.ts", import.meta.url));
	const receipt = `${root}-receipt.json`;
	const stub = join(root, "fake-fetch.mjs");
	try {
		execFileSync(process.execPath, [cli, "inventory"], { cwd: root, stdio: "pipe" });
		await writeFile(
			stub,
			`import {appendFile} from "node:fs/promises";
let changed = false;
globalThis.fetch = async (input) => {
 if (process.env.LEARN_MEDIA_MUTATE === "1" && !changed) { await appendFile("config/aws/static-assets/manifest.json", "\\n"); changed = true; }
 const url = String(input);
 return new Response("image-fixture", {headers:{"content-type":url.endsWith(".ico")?"image/x-icon":url.endsWith(".mp3")?"audio/mpeg":"image/png","cache-control":"public, max-age=31536000, immutable"}});
};`,
		);
		execFileSync(
			process.execPath,
			["--import", stub, cli, "verify", "https://d123.cloudfront.net", receipt],
			{ cwd: root, stdio: "pipe" },
		);
		assert.match(
			await readFile(receipt, "utf8"),
			new RegExp(digest(await readFile(join(root, "config/aws/static-assets/manifest.json"))), "u"),
		);
		await rm(receipt);
		assert.throws(
			() =>
				execFileSync(
					process.execPath,
					["--import", stub, cli, "verify", "https://d123.cloudfront.net", receipt],
					{ cwd: root, stdio: "pipe", env: { ...process.env, LEARN_MEDIA_MUTATE: "1" } },
				),
			(error: unknown) => {
				assert.ok(error instanceof Error && "stderr" in error);
				assert.match(String(error.stderr), /Manifest changed during verification/u);
				return true;
			},
		);
		await assert.rejects(readFile(receipt), { code: "ENOENT" });
	} finally {
		await rm(root, { recursive: true, force: true });
		await rm(receipt, { force: true });
	}
});
