## 2025-04-16 - Insecure Deserialization in React State Initialization
**Vulnerability:** Initializing React state using data parsed directly from `localStorage` without a try-catch block or schema validation can lead to application crashes (DoS) or unexpected state injection.
**Learning:** Malformed or maliciously manipulated JSON in `localStorage` can break application state on the initial render.
**Prevention:** Always wrap `JSON.parse` operations in try-catch blocks and explicitly validate the type/schema of parsed data before using it to set component state (e.g., using `Array.isArray()`). Ensure error messages are environment-aware to not leak details in production.
