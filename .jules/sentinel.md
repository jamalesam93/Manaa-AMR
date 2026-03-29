## 2024-05-24 - Secure Error Handling in Production
**Vulnerability:** The `ErrorBoundary` uses `process.env.NODE_ENV` which may cause errors (ReferenceError) in Vite (as Vite uses `import.meta.env.DEV`), exposing an internal failure when rendering errors. Furthermore, `console.error` calls throughout the app can leak sensitive data to end-user consoles.
**Learning:** Vite replaces `process.env.NODE_ENV` with `import.meta.env.MODE` and uses `import.meta.env.DEV` to detect dev mode. Also, `console.error` should be wrapped so they don't fire in production to prevent leakage.
**Prevention:** Wrap error logging in `if (import.meta.env.DEV)` and use `import.meta.env.DEV` for environment conditional logic in Vite apps.
