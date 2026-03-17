## 2025-01-20 - Insecure Deserialization of LocalStorage Data

**Vulnerability:** Unsafe JSON parsing (`JSON.parse()`) of user-controlled `localStorage` data without schema or type validation in React state initializers (e.g., `familyProfiles` array).
**Learning:** React state initialization with invalid/malicious localStorage data can cause component trees to crash during render if the application expects specific types (like `.map()` on an array). Additionally, unhandled deserialization errors expose technical details if not conditionally suppressed in production.
**Prevention:** Always wrap `localStorage` deserialization in `try-catch` blocks. Validate that parsed data matches expected types (e.g., `Array.isArray()`, `typeof === 'object'`) and schema before returning it. Suppress deserialization error logs in production (using `import.meta.env.DEV`).
