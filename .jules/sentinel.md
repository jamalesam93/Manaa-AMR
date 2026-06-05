## 2024-05-15 - [Insecure LocalStorage Deserialization]
**Vulnerability:** Several utility functions (`getDailyChallenge`, `getDailyChallengeStats`) and the app context (`AppContext.jsx`) parse data from `localStorage` using `JSON.parse` without `try-catch` blocks or schema validation.
**Learning:** This exposes the application to DoS attacks through local storage injection. If the stored data becomes invalid JSON, the parsing throws an error that crashes the component or the whole application, leading to a persistent unhandled exception until `localStorage` is cleared manually.
**Prevention:** All data retrieved from `localStorage` must be parsed within `try-catch` blocks, strictly validated for expected types (e.g., `Array.isArray`, `typeof === 'object'`), and ensure `console.error` calls are restricted to development (`import.meta.env.DEV`).
## 2024-06-05 - [Sensitive Information Exposure via Logs]
**Vulnerability:** Calls to `console.error` were exposed in the production environment across multiple files including the application error boundary (`ErrorBoundary.jsx`) and several utility files (e.g., `streakTracker.js`, `achievements.js`).
**Learning:** This could leak sensitive application internals, stack traces, state data or user context into the browser console where it could be harvested by malicious scripts or viewed by users.
**Prevention:** Ensure that all debugging information, specifically `console.error` calls containing internal application state, are strictly wrapped in `if (import.meta.env.DEV)` blocks so they are stripped or bypassed in production builds.
