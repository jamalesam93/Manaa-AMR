
## 2024-05-03 - Insecure Deserialization in Local Storage
**Vulnerability:** Insecure deserialization via `localStorage` data parsing. In `src/contexts/AppContext.jsx` and `src/utils/dailyChallenge.js`, `JSON.parse` was called directly on data from `localStorage` without validating the result's type or using a try-catch block.
**Learning:** Client-side state managed in `localStorage` can be tampered with by an attacker (or corrupted), leading to application crashes, unexpected behavior, or even client-side logic bypasses when assumptions about the data structure are broken.
**Prevention:** Always wrap `JSON.parse` operations in try-catch blocks and perform strict schema/type validation (e.g., ensuring `Array.isArray()` for expected arrays or `typeof obj === 'object' && !Array.isArray(obj)` for expected objects) before utilizing the deserialized data.
