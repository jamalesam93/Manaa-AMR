## 2024-04-19 - Insecure Deserialization in LocalStorage
**Vulnerability:** Found insecure deserialization where `localStorage.getItem('manaa_familyProfiles')` was parsed via `JSON.parse()` without a `try-catch` block or type validation.
**Learning:** React state initialization from `localStorage` can crash the entire application during the initial render phase if the stored data is malformed or intentionally corrupted.
**Prevention:** Always wrap `JSON.parse()` of untrusted data (like `localStorage`) in a `try-catch` block. Validate the expected schema (e.g., `Array.isArray()`) before using the parsed data, and provide a safe fallback value.
