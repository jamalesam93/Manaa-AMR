## 2026-05-16 - Prevent Predictable Identifiers
**Vulnerability:** Predictable IDs were generated using `Date.now().toString()` in `src/utils/progressTracker.js` and `src/contexts/AppContext.jsx`.
**Learning:** This approach can lead to Insecure Direct Object Reference (IDOR) vulnerabilities if these IDs are ever synced to a backend or shared, and they are susceptible to collisions if multiple IDs are created within the same millisecond.
**Prevention:** Use `crypto.randomUUID()` to generate cryptographically secure, unpredictable, and unique identifiers across the application.
