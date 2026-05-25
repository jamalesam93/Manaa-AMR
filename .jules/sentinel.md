## 2025-02-20 - [Insecure Deserialization in AppContext.jsx]
**Vulnerability:** The `familyProfiles` initialization directly parsed data from `localStorage` without validation, which could crash the app or lead to prototype pollution if the stored data wasn't an array as expected.
**Learning:** Directly trusting `localStorage` data can lead to subtle bugs and vulnerabilities when the application state expects a specific structure (like an Array) but receives an Object or invalid JSON.
**Prevention:** Always parse `localStorage` items within `try-catch` blocks and perform strict type validation (e.g., `Array.isArray()`) before merging the data into the application state.
