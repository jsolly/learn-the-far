# AWS static media preparation

Status: **prepared, not applied or migrated**. This repository owns its proposed
CloudFormation stack, SHA-256 manifest, publication catalog and TypeScript
upload/verification tooling. Tracked source and public URLs remain unchanged.
No infrastructure, access policy, credential, DNS, certificate, deployment or
Git history change is part of this preparation.

## Published scope

At main `374451ef169c20ae0694236c64222a8925211ddd` the complete public media
inventory contains six files, totaling 893,735 bytes:

| Public path | Bytes | Content type |
| --- | ---: | --- |
| `/og-image.png` | 843,660 | `image/png` |
| `/apple-touch-icon.png` | 34,722 | `image/png` |
| `/favicon.ico` | 7,672 | `image/x-icon` |
| `/sounds/correct.mp3` | 2,439 | `audio/mpeg` |
| `/sounds/incorrect.mp3` | 1,529 | `audio/mpeg` |
| `/sounds/session-complete.mp3` | 3,713 | `audio/mpeg` |

`scripts/assets/catalog.ts` names only these already-published distributables.
It ties the images/icons to `FarAppDocument.astro` and sounds to the quiz sound
module. Inventory refuses missing actual references, symlink sources and new
unclassified public media. Adding media requires explicit catalog review; it
never blindly publishes a folder or makes draft/private content public.

Application JS/CSS, npm fonts, study content, test fixtures and authoring sources
remain versioned by their existing owners. In particular,
`retained-assets/confetti.module.CSklD5ZL.js.txt`, its license and retention
mechanism remain untouched. The historical
`/_astro/confetti.module.CSklD5ZL.js` URL must survive indefinitely under the
existing old-client contract. This media stack does not replace that mechanism.

## Stack and object contract

`config/aws/static-assets/template.json` defines the independent
`learn-the-far-static-assets` stack in `us-east-1`. It creates encrypted,
versioned S3 storage with all public-access blocks enabled and ACLs disabled,
and CloudFront OAC signing against the regional S3 REST endpoint. Only that
specific distribution may read the `sha256/*` prefix. TLS is required. The
bucket and bucket policy retain on stack deletion/replacement, and the supplied
stack policy denies their replacement/deletion during updates. There is no
expiration, destructive sync or cross-repository bucket/runtime dependency.

No IAM roles, access expansion, custom domain, certificate, DNS, CORS policy or
image-processing service is introduced. CloudFront uses its default certificate
and PriceClass_100. The eventual same-origin build-materialization design does
not require browser CORS changes.

Each manifest row pins the public path, full SHA-256, byte length, content type
and key `sha256/<full SHA-256><public path>`. Content keys never change in place.
Uploads send `Cache-Control: public, max-age=31536000, immutable` and the measured
content type, with `If-None-Match: *`. Existing mismatched objects stop the
uploader. Verification GETs every usable CloudFront URL and checks actual
bytes/hash and delivery headers. Metadata/ETags alone are insufficient.
Transient failures retry within a bound, including delayed reads after PUTs to
allow CloudFront's short negative cache to expire; integrity/authorization
errors stop immediately. Old keys are retained.

## Local checks

Repository setup and its pinned Node 24 are sufficient; no AWS login is needed:

```bash
npm run assets -- inventory
npm run assets -- check
npm run check:ts
npm run test:unit
npm run gate
```

`inventory` deliberately regenerates the manifest from the reviewed catalog and
actual bytes. `check` validates complete published-reference coverage and every
source hash. Ordinary typechecking includes the strict tool project. Offline
Vitest cases cover publication classification, path/type/key validation, missing
and hash-mismatched objects, delivery headers, retry/idempotency, exact upload
targets, symlink inputs and a real isolated CLI invocation. The full gate retains
all current update-notice and retained-asset browser contracts.

AWS `ValidateTemplate` accepted this template on November 1, 2026. This proves
template validity, not stack creation or runtime delivery access.

## Human apply and upload handoff

Infrastructure apply and upload capability remain human-owned. John reviews
this stack, manifest and cost before applying with his approved existing access.
The following are reviewable handoff commands; agents do not run them or install
credentials to run them:

```bash
aws cloudformation create-stack --region us-east-1 \
  --stack-name learn-the-far-static-assets \
  --template-body file://config/aws/static-assets/template.json \
  --stack-policy-body file://config/aws/static-assets/stack-policy.json
aws cloudformation wait stack-create-complete --region us-east-1 \
  --stack-name learn-the-far-static-assets
aws cloudformation describe-stacks --region us-east-1 \
  --stack-name learn-the-far-static-assets --query 'Stacks[0].Outputs'
```

Retain the exact `BucketName`, `DeliveryOrigin` and `DistributionId` outputs.
After the distribution is deployed, print and review the deterministic PUT plan:

```bash
npm run assets -- plan BUCKET_NAME
```

It prints one conditional AWS CLI PUT per manifest row and executes none. John
can run reviewed commands with approved write access; an existing-key failure
requires verification rather than overwrite. Alternatively, an authorized
operator can issue a short-lived external JSON map from each immutable key to
its exact regional S3 presigned PUT URL. Sign for the exact bucket/key, content
type, cache header and conditional write. Keep this credential map outside Git.
The tool validates the exact supplied bucket hostname and key, refuses redirects,
and redacts request URLs from transport failures. It preserves the session proxy
and CA trust; no identity discovery, presigning or credential installation occurs.

```bash
npm run assets -- upload DELIVERY_ORIGIN BUCKET_NAME /absolute/private/put-urls.json
npm run assets -- verify DELIVERY_ORIGIN /absolute/external/media-verification.json
```

Upload checks every local source before its first PUT, resumes verified objects,
and verifies delivery after writes. `verify` needs only public GET access. Its
optional external create-only receipt records the manifest file hash, delivery
origin, timestamp and object count. The tool captures that hash before
verification and refuses a receipt if the manifest changes during requests. Retain it with an independent original-source
snapshot. There is no authorized write path to a new bucket until human apply;
no AWS upload or public URL verification has been claimed here.

## Cutover remains separate

Do not remove tracked assets until every intended object passes byte/hash/header
and URL verification, unauthenticated S3 access is denied, and rollback material
is retained. The next implementation should hydrate exact immutable objects into
local/build media inputs before compiling, preserve current same-origin public
paths, and prove a fresh checkout works without another checkout or one-off
untracked directory. Then remove only verified tracked copies in a separate
reviewable commit with exact-path ignores and repository-owned materialization.
Do not rewrite Git history or expire old objects.

This preserves OG/icon URLs, sound playback, local-first study progress,
offline behavior and current update notices. Keep generated code's current
Vercel release pinning and the retained confetti URL. Do not substitute browser
redirects to a new CDN origin. Re-run the full gate and update browser proof,
independent review, exact-commit CI and any separately authorized Preview before
requesting a merge/production decision. Until then, rollback is the untouched
current source and serving behavior. After cutover, restore the prior manifest
and its retained immutable objects or the independent source snapshot.

## Cost before apply

The initial payload is 0.894 MB, six objects. At an illustrative storage rate of
$0.03/GB-month, a single copy would cost below $0.00003/month. This is a sizing
example, not an account-specific quote: versions/retained releases accumulate,
PUT/GET requests are metered, and CloudFront viewer requests and transfer depend
on traffic. One upload requires six PUTs; each complete verification/hydration
needs at least six GETs and roughly 0.894 MB. Vercel delivery remains metered in
the proposed same-origin build approach. Account-wide free allowances may already
be consumed. Check current [S3 pricing](https://aws.amazon.com/s3/pricing/) and
[CloudFront pricing](https://aws.amazon.com/cloudfront/pricing/) before apply.
No flat-rate subscription, logging bucket, Lambda or paid transformation service
is created by this stack.
