# Website update alignment acceptance

Canon pin: `f861d7c961a7bb1e6229d4565b7c787d91279e1c`.
Original release remains PR #134, commit
`438421fd36ba92a76765e6642740f0d42a25ad30`, Production smoke run `38733635071`.
This follow-up audits and fixes the confirmed gaps, without replacing that proof.

`npm run gate` invokes `npm run check:updates`, which builds real A, B and C
with distinct fixture deployment identities. Identities and HTML are real build output;
A is `0fba6052-3acc-428b-8540-30659fc598ca`,
B is `34106519-20d8-4876-8f01-fb16bcac346d`, and
C is `1d1aadcb-5c14-4360-87a0-b0cec26f531e`.
the local server publishes snapshots atomically at one origin. No auth fixture,
service worker, production write, or Preview is used.

| Canon case | Result and evidence |
| --- | --- |
| Fresh A / first installation | Passed: embedded A matches release metadata; no update notice |
| A in two tabs, publish B | Passed: timer/focus detection; neither tab reloads automatically |
| Ordinary site application | Passed: keyboard reload to B; saved reading/quiz progress survives; other A quiz remains usable |
| Waiting worker / activation / control races | Not applicable: this site installs no worker |
| Worker install failure / old offline cache | Not applicable: no worker or offline shell |
| Offline discovery/application | Passed: no polling offline, confirmed notice persists, apply disabled until reconnect |
| Old lazy resources | Passed: A imports retained confetti from B's server; build rejects unretained future lazy chunks |
| User work | Passed: active quiz cannot reload, answers remain usable, saved progress survives; no exposed editable draft form |
| Accessibility/layout | Passed: Update/Later/reopen by keyboard, focus replacement, desktop/mobile light/dark screenshots; persistent polite status |
| Dismissal | Passed: B stays dismissed through polls/view navigation, reopen works, C overrides B's dismissal |
| Metadata failures | Passed: invalid JSON/schema/content type, redirected JSON, HTTP 503 and real ten-second timeout do not fabricate availability |
| Request ordering | Passed: serialized fetch ownership; duplicate clicks issue one recheck and one reload |
| Third release / rollback | Passed: a changed click target requires another explicit choice; opaque rollback identity is also different |
| Failure recovery | Passed: failed apply preserves B and progress; current-version recovery announces and restores focus; stale A shows retry without loops; manual retry loads B |
| Polling lifecycle | Passed: foreground timer, cooldown, offline pause, modeled visibility handler, document teardown |
| Authenticated routes | Not applicable: public app without authentication |
| Multiple worker scopes | Not applicable: no worker registration or cache manipulation |
| Last deployed migration | UUID wire schema retained so prior deployed detector can recognize the next build; no worker migration; pre-detector tabs still need one manual refresh |

Screenshots: `/tmp/far-update-desktop-light.png`,
`/tmp/far-update-desktop-dark.png`, `/tmp/far-update-mobile-light.png`,
`/tmp/far-update-mobile-dark.png`. The discovery and application HTTP 503 cases intentionally produce two
console diagnostics; unexpected browser warnings/errors and page errors fail.
Visibility is modeled at the document API boundary in the browser, rather than
claiming that a headless browser reproduces OS background suspension.

Screen-reader runtime announcement behavior and OS suspension are not exercised;
markup inspection and the mounted live region cover announcement structure.
Hosting access to arbitrary old deployments is not assumed. Supported hydrated
clients retain their eager code/data in memory, and their only deferred module's
original URL is retained indefinitely in the repository. Full-page route loads
use the current atomic deployment. See `retained-assets/README.md` and the
repository development guide for the support and migration policy.
