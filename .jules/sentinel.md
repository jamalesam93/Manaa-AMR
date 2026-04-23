
## 2024-04-23 - Insecure Deserialization in LocalStorage
**Vulnerability:** Calls to `JSON.parse` for data read from `localStorage` were lacking both `try...catch` blocks (in several files) and explicit schema/type validation, opening the application up to runtime crashes and insecure deserialization vulnerabilities if a malicious user manipulated `localStorage`.
**Learning:** Data fetched from `localStorage` cannot be implicitly trusted to be the correct type or even structurally sound JSON.
**Prevention:** All data retrieved from `localStorage` must be parsed within try-catch blocks and strictly validated for expected types (e.g., `Array.isArray`, `typeof === 'object'`) and schema before use.
