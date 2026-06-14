## 2024-05-15 - [Insecure LocalStorage Deserialization]
**Vulnerability:** Several utility functions (`getDailyChallenge`, `getDailyChallengeStats`) and the app context (`AppContext.jsx`) parse data from `localStorage` using `JSON.parse` without `try-catch` blocks or schema validation.
**Learning:** This exposes the application to DoS attacks through local storage injection. If the stored data becomes invalid JSON, the parsing throws an error that crashes the component or the whole application, leading to a persistent unhandled exception until `localStorage` is cleared manually.
**Prevention:** All data retrieved from `localStorage` must be parsed within `try-catch` blocks, strictly validated for expected types (e.g., `Array.isArray`, `typeof === 'object'`), and ensure `console.error` calls are restricted to development (`import.meta.env.DEV`).
## 2024-10-24 - [Unsafe URL Validation allowing data: and file: protocols]
**Vulnerability:** The `isSafeUrl` function only blocked `javascript:` and `vbscript:` protocols. It allowed `data:` and `file:` protocols which could lead to XSS via `data:text/html,<script>...</script>` or unauthorized local file access via `file:///...`.
**Learning:** Checking against a blacklist of URL protocols must be comprehensive. Attackers often bypass basic XSS filters by using alternative protocols like `data:` when `javascript:` is blocked.
**Prevention:** Always block `data:` and `file:` protocols in addition to `javascript:` and `vbscript:` when validating URLs for use in potentially unsafe contexts like `href` or `src` attributes.
