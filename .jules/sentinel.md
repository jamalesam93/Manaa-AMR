## 2024-05-15 - [Insecure LocalStorage Deserialization]
**Vulnerability:** Several utility functions (`getDailyChallenge`, `getDailyChallengeStats`) and the app context (`AppContext.jsx`) parse data from `localStorage` using `JSON.parse` without `try-catch` blocks or schema validation.
**Learning:** This exposes the application to DoS attacks through local storage injection. If the stored data becomes invalid JSON, the parsing throws an error that crashes the component or the whole application, leading to a persistent unhandled exception until `localStorage` is cleared manually.
**Prevention:** All data retrieved from `localStorage` must be parsed within `try-catch` blocks, strictly validated for expected types (e.g., `Array.isArray`, `typeof === 'object'`), and ensure `console.error` calls are restricted to development (`import.meta.env.DEV`).

## 2026-06-25 - [Incomplete URL Protocol Sanitization]
**Vulnerability:** The `isSafeUrl` function only blocked `javascript:` and `vbscript:` protocols, leaving `data:` and `file:` protocols permitted. This could potentially allow XSS via data URIs and unauthorized file access or information disclosure.
**Learning:** URL sanitization needs to be comprehensive. Permitting `data:` protocols allows bypassing standard XSS protections by executing scripts embedded in the data URI itself. Permitting `file:` protocols introduces risks associated with local file access.
**Prevention:** Always maintain a strict blocklist of protocols for URL sanitization or ideally an allowlist of permitted protocols. In this case, `data:` and `file:` were added to the blocklist in `isSafeUrl` to strengthen defenses against XSS and path traversal vulnerabilities.


## 2024-05-18 - [Sensitive Information Disclosure in Error Logs]
**Vulnerability:** Calls to `console.error` in the `ErrorBoundary` component and social sharing utility (`shareUtils.js`) were missing environment checks, meaning that detailed error objects and stack traces could be leaked to the browser console in production.
**Learning:** React error boundaries and general error catch blocks often inadvertently expose application internals to users or attackers looking at the console if not explicitly restricted.
**Prevention:** To prevent sensitive information exposure in production, all `console.error` calls and debug information must be wrapped in `if (import.meta.env.DEV)` blocks.
