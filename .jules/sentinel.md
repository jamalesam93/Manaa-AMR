## 2024-05-15 - [Insecure LocalStorage Deserialization]
**Vulnerability:** Several utility functions (`getDailyChallenge`, `getDailyChallengeStats`) and the app context (`AppContext.jsx`) parse data from `localStorage` using `JSON.parse` without `try-catch` blocks or schema validation.
**Learning:** This exposes the application to DoS attacks through local storage injection. If the stored data becomes invalid JSON, the parsing throws an error that crashes the component or the whole application, leading to a persistent unhandled exception until `localStorage` is cleared manually.
**Prevention:** All data retrieved from `localStorage` must be parsed within `try-catch` blocks, strictly validated for expected types (e.g., `Array.isArray`, `typeof === 'object'`), and ensure `console.error` calls are restricted to development (`import.meta.env.DEV`).
## 2024-05-15 - Unsafe URL Schemes Allowed in isSafeUrl
**Vulnerability:** The `isSafeUrl` function only blocked `javascript:` and `vbscript:` protocols, allowing `data:` and `file:` protocols to pass. This could enable XSS through base64 encoded data URIs or unauthorized access via file paths.
**Learning:** Checking for malicious URL schemes needs to be comprehensive to mitigate all potential XSS vectors and unauthorized resource loading. The default URL parser allows many schemes that are unsafe to render in `src` or `href` attributes.
**Prevention:** Block a wider list of dangerous protocols including `data:` and `file:` when sanitizing URLs, instead of just `javascript:` and `vbscript:`.
