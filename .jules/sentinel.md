## 2024-05-20 - [Fix Insecure Deserialization in LocalStorage]
**Vulnerability:** Insecure deserialization and lack of type checking when parsing JSON data from `localStorage` in `src/contexts/AppContext.jsx` and `src/utils/dailyChallenge.js`.
**Learning:** Parsing `localStorage` data without validation can lead to client-side Denial of Service (DoS) and application crashes if the data is maliciously altered, corrupted, or simply missing (e.g. evaluating to `null`). It's crucial to always wrap `JSON.parse` in a `try-catch` and validate the parsed data type (e.g., `Array.isArray()`, `typeof === 'object'`) before accessing its properties.
**Prevention:** Always validate and provide safe fallbacks for data retrieved from `localStorage` before relying on it in the application's state or logic.

## 2024-05-20 - [Fix Process.env Usage in Vite Error Boundary]
**Vulnerability:** Using `process.env.NODE_ENV` in a Vite application's ErrorBoundary component.
**Learning:** Vite uses `import.meta.env` for environment variables. Referencing `process.env.NODE_ENV` in browser code can cause an `Uncaught ReferenceError`, completely crashing the application instead of rendering the ErrorFallback UI.
**Prevention:** Use `import.meta.env.DEV` instead of `process.env.NODE_ENV` for environment-conditional logic in Vite projects.

## 2024-05-20 - [Fix Information Disclosure via Console.Error]
**Vulnerability:** Exposing sensitive error details and stack traces to users in production environments via `console.error`.
**Learning:** Unrestricted `console.error` calls can inadvertently leak implementation details and potentially sensitive information.
**Prevention:** Wrap `console.error` calls and debug UI elements in `if (import.meta.env.DEV)` blocks to ensure they are only visible during development.
