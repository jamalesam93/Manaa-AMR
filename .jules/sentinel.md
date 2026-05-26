## 2025-02-26 - [Predictable IDs replaced with cryptographically secure UUIDs]
**Vulnerability:** Predictable IDs were generated using `Date.now().toString()` in `src/utils/progressTracker.js` and `src/contexts/AppContext.jsx`.
**Learning:** Using time-based predictable identifiers exposes the application to Insecure Direct Object Reference (IDOR) risks, as attackers can easily guess IDs and potentially access or modify data belonging to other users or contexts.
**Prevention:** Always use cryptographically secure random number generators, such as `crypto.randomUUID()` in the Web Crypto API, to ensure non-predictable unique identifiers.
