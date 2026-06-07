## 2024-05-15 - [Insecure LocalStorage Deserialization]
**Vulnerability:** Several utility functions (`getDailyChallenge`, `getDailyChallengeStats`) and the app context (`AppContext.jsx`) parse data from `localStorage` using `JSON.parse` without `try-catch` blocks or schema validation.
**Learning:** This exposes the application to DoS attacks through local storage injection. If the stored data becomes invalid JSON, the parsing throws an error that crashes the component or the whole application, leading to a persistent unhandled exception until `localStorage` is cleared manually.
**Prevention:** All data retrieved from `localStorage` must be parsed within `try-catch` blocks, strictly validated for expected types (e.g., `Array.isArray`, `typeof === 'object'`), and ensure `console.error` calls are restricted to development (`import.meta.env.DEV`).
## 2026-06-07 - [Information Disclosure via console.error in Production]
**Vulnerability:** The application was logging errors and exceptions directly to the console using `console.error` without environment checks, exposing potentially sensitive details such as application state and stack traces.
**Learning:** This widespread pattern across utility functions and error boundaries can give attackers valuable context on the application's internal workings.
**Prevention:** Always wrap `console.error` (and similar debug logging) inside an `if (import.meta.env.DEV)` check to ensure it is only active in the development environment.
