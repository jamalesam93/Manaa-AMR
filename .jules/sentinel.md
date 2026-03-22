## 2026-03-22 - [Insecure Deserialization in Progress Tracker]
**Vulnerability:** Insecure deserialization of localStorage data without strict type validation and potential sensitive information disclosure in production logs.
**Learning:** Utilities relying on JSON.parse(localStorage) need post-parse type validation to prevent prototype pollution or unexpected state structures. Error logs need to be wrapped in import.meta.env.DEV to prevent leaking implementation details in production.
**Prevention:** Always validate parsed JSON data (e.g., check if it's an object and not an array) before merging with default state. Use environment checks for console.error.
