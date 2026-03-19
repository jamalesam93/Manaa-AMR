## 2024-05-24 - [Insecure Deserialization in LocalStorage]
**Vulnerability:** Unsafe calls to `JSON.parse` on data directly retrieved from `localStorage` without try-catch blocks or type validation in `AppContext.jsx` and `dailyChallenge.js`.
**Learning:** `localStorage` can be manipulated by malicious scripts (XSS) or the user. Blindly parsing and assuming its structure can lead to application crashes, unexpected behavior, or potentially Prototype Pollution if the parsed data is unsafely merged.
**Prevention:** Always wrap `JSON.parse(localStorage.getItem(...))` in a `try-catch` block. Immediately validate the parsed data's type (e.g., `Array.isArray()`, `typeof === 'object'`) and ideally its schema before using it in the application logic.
