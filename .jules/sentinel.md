## 2024-05-13 - [HIGH] Prevent IDOR with Predictable IDs
**Vulnerability:** Found `Date.now().toString()` used as unique identifiers for quiz results and family profiles.
**Learning:** This generates predictable IDs which makes it trivial for attackers to iterate over possible identifiers (Insecure Direct Object Reference) and potentially access data belonging to other users if synced externally.
**Prevention:** Always use `crypto.randomUUID()` or strong cryptographically secure random number generators for ID generation across the codebase instead of `Date.now()`.
