## 2024-05-15 - [Insecure LocalStorage Deserialization]
**Vulnerability:** Several utility functions (`getDailyChallenge`, `getDailyChallengeStats`) and the app context (`AppContext.jsx`) parse data from `localStorage` using `JSON.parse` without `try-catch` blocks or schema validation.
**Learning:** This exposes the application to DoS attacks through local storage injection. If the stored data becomes invalid JSON, the parsing throws an error that crashes the component or the whole application, leading to a persistent unhandled exception until `localStorage` is cleared manually.
**Prevention:** All data retrieved from `localStorage` must be parsed within `try-catch` blocks, strictly validated for expected types (e.g., `Array.isArray`, `typeof === 'object'`), and ensure `console.error` calls are restricted to development (`import.meta.env.DEV`).
## 2026-06-16 - [Missing Blocklist for Danger Protocols in URL Validation]
**Vulnerability:** The URL validator `isSafeUrl` only blocked `javascript:` and `vbscript:`, allowing dangerous protocols like `data:` and `file:` through.
**Learning:** Incomplete protocol blocklists can lead to XSS attacks (via `data:` URI containing base64 encoded HTML) or local file access if rendered directly in the DOM (e.g., `img src` or anchor `href`).
**Prevention:** When creating URL sanitization utility functions, always use a comprehensive blocklist or allowlist of protocols. Here, `data:` and `file:` must be explicitly blocked alongside script execution protocols.
