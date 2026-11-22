# Changelog

## 2026-11-22

- Remove the `auto-merge.yml` workflow, its `AUTO_MERGE_TOKEN` use, its test and gh stub, and the auto-merge probe note. Each agent now arms native squash auto-merge on its own reviewed pull request, and GitHub merges it once the required checks pass.

## 2026-11-20

- The commit gate skips the negative quiz smoke contract and the website update browser contract with a warning only where `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD` is set outside CI and Chromium cannot launch, as in Claude Duet cloud sessions. Anywhere else, CI included, a Chromium that cannot launch fails the gate with its launch error. Hook trust tests cover the run, skip and fail cases.

## 2026-11-17

- Install the shared browser-fixture clock once and intercept only the explicit update request. Count every application request until navigation commits, then await metadata from the new document, preserving duplicate-click and stale-reload assertions.

- Bound mise bootstrap downloads and test that download timeouts prevent installation. Split hook integration scenarios into isolated fixtures, bound child processes, and disable fixture Git auto-maintenance.
