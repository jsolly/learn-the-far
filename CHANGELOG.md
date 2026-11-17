# Changelog

## 2026-11-17

- Install the shared browser-fixture clock once and intercept only the explicit update request. Await the reloaded document's own metadata response, preserving duplicate-click and stale-reload assertions.

- Bound mise bootstrap downloads and test that download timeouts prevent installation. Split hook integration scenarios into isolated fixtures, bound child processes, and disable fixture Git auto-maintenance.
