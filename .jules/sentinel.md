## 2024-05-10 - Insecure Deserialization in LocalStorage
**Vulnerability:** `JSON.parse()` was used on `localStorage` data without any type or structure validation.
**Learning:** `localStorage` data can be manipulated by extensions, XSS, or manually by users. Parsing it blindly and assuming it returns an object can lead to crashes or unexpected behavior if an array or primitive is returned.
**Prevention:** Always wrap `JSON.parse` in a `try-catch` block and validate the type of the parsed data (e.g., `typeof data === 'object' && data !== null && !Array.isArray(data)`) before using it.
