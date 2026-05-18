## 2025-02-25 - Prevent Insecure Predictable IDs (IDOR risk)
**Vulnerability:** Predictable IDs were generated using `Date.now().toString()` for quiz results in `src/utils/progressTracker.js` and family profiles in `src/contexts/AppContext.jsx`.
**Learning:** Generating IDs using timestamps creates predictable sequences. If these IDs are used for fetching or modifying data, it introduces an Insecure Direct Object Reference (IDOR) risk where an attacker could guess the IDs of other users' data.
**Prevention:** Always use cryptographically secure random identifier generation, such as `crypto.randomUUID()`, for unique entity identifiers.
