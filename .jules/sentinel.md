## 2024-05-15 - [Insecure LocalStorage Deserialization]
**Vulnerability:** Several utility functions (`getDailyChallenge`, `getDailyChallengeStats`) and the app context (`AppContext.jsx`) parse data from `localStorage` using `JSON.parse` without `try-catch` blocks or schema validation.
**Learning:** This exposes the application to DoS attacks through local storage injection. If the stored data becomes invalid JSON, the parsing throws an error that crashes the component or the whole application, leading to a persistent unhandled exception until `localStorage` is cleared manually.
**Prevention:** All data retrieved from `localStorage` must be parsed within `try-catch` blocks, strictly validated for expected types (e.g., `Array.isArray`, `typeof === 'object'`), and ensure `console.error` calls are restricted to development (`import.meta.env.DEV`).
## 2024-05-16 - [XSS and Local File Access via Unsafe URL Protocols]
**Vulnerability:** The `isSafeUrl` function only blocked `javascript:` and `vbscript:` protocols, leaving `data:` and `file:` protocols open to exploitation.
**Learning:** Incomplete protocol blacklisting allows attackers to bypass XSS protections using `data:` URIs (e.g., `data:text/html;base64,...`) or access local files in certain environments via `file:` URIs.
**Prevention:** Use a comprehensive approach for URL validation. Either whitelist strictly allowed protocols (e.g., `http:`, `https:`) or ensure all dangerous protocols are explicitly blocked.
