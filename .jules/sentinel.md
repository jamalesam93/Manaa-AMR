## 2025-05-01 - Prevented Insecure Deserialization in Utilities
**Vulnerability:** Application uses `localStorage.getItem` and immediately passes result to `JSON.parse` without `try/catch` and without checking if the output matches expected schema (object, array) in multiple utils (`streakTracker.js`, `progressTracker.js`, `achievements.js`, `dailyChallenge.js`, and `AppContext.jsx`).
**Learning:** `localStorage` can be modified by user or extensions, potentially leading to insecure deserialization or application crashes when assuming data formats.
**Prevention:** Always parse `localStorage` content within a try/catch block and strictly validate the structure (e.g. `typeof === 'object'` and `!Array.isArray(data)`) to prevent prototype pollution or invalid state.
