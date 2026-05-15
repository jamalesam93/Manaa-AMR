## 2025-05-15 - Secure Predictable IDs
**Vulnerability:** Predictable IDs were generated using `Date.now().toString()` in `src/utils/progressTracker.js` for quiz progress and `src/contexts/AppContext.jsx` for family profiles.
**Learning:** `Date.now().toString()` generates predictable values that can easily be guessed by an attacker, leading to IDOR (Insecure Direct Object Reference) vulnerabilities or naming collisions.
**Prevention:** Use `crypto.randomUUID()` to generate cryptographically secure, random, and non-predictable unique identifiers (UUIDs) for sensitive data IDs.