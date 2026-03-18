## 2024-05-18 - [Insecure Deserialization & Vite Environment Variables]
**Vulnerability:** Insecure deserialization of `localStorage` items and improper use of `process.env.NODE_ENV` in a Vite environment.
**Learning:**
1. Deserializing data from `localStorage` using `JSON.parse` without `try-catch` blocks and type validation can lead to application crashes or unexpected states if the data is tampered with or corrupted.
2. In Vite applications, `process.env.NODE_ENV` is not automatically injected into the browser build in the same way it is in Webpack. This can cause a `ReferenceError` in production, leading to broken error boundaries that fail to render the fallback UI, and exposing stack traces or crashing the app outright.
**Prevention:**
1. Always wrap `JSON.parse` operations in `try-catch` blocks.
2. After parsing, explicitly validate the expected structure (e.g., `Array.isArray(parsed)`, `typeof parsed === 'object' && parsed !== null`) before using the data.
3. Use `import.meta.env.DEV` instead of `process.env.NODE_ENV` in Vite applications for conditional rendering or logging based on the environment.
4. Wrap `console.error` calls in development environment checks to avoid leaking sensitive internal implementation details to end users in production.
