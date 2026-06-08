## 2024-05-15 - [Insecure LocalStorage Deserialization]
**Vulnerability:** Several utility functions (`getDailyChallenge`, `getDailyChallengeStats`) and the app context (`AppContext.jsx`) parse data from `localStorage` using `JSON.parse` without `try-catch` blocks or schema validation.
**Learning:** This exposes the application to DoS attacks through local storage injection. If the stored data becomes invalid JSON, the parsing throws an error that crashes the component or the whole application, leading to a persistent unhandled exception until `localStorage` is cleared manually.
**Prevention:** All data retrieved from `localStorage` must be parsed within `try-catch` blocks, strictly validated for expected types (e.g., `Array.isArray`, `typeof === 'object'`), and ensure `console.error` calls are restricted to development (`import.meta.env.DEV`).

## 2025-02-14 - Fix Insecure Deserialization and Info Leaks in Storage Utils
**Vulnerability:** Weak `JSON.parse` state hydration allowed insecure deserialization (crashing/corrupting app state via mismatched types), and raw `console.error` calls leaked internal stack traces/errors to the production console.
**Learning:** Returning default objects based solely on truthy `localStorage.getItem` values without strict type checking (e.g. `typeof === 'object'`, `Array.isArray()`) fails to protect against malformed data. Information disclosure via unhandled `console.error` provides reconnaissance data for attackers in production.
**Prevention:** Always strictly validate the type and structure of data immediately after `JSON.parse` before merging or using it. Wrap any debug or error logging in `if (import.meta.env.DEV)` blocks to strip them from production builds.
