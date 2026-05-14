## 2026-05-14 - Predictable ID Generation
**Vulnerability:** Insecure Direct Object Reference (IDOR) via Predictable IDs. The codebase used `Date.now().toString()` to generate IDs for sensitive application state, specifically quiz results and family profiles.
**Learning:** `Date.now().toString()` is not random and creates sequential, highly predictable IDs. If these IDs are used for user-specific data retrieval or synchronization, an attacker could trivially guess IDs and potentially access or modify data belonging to other users.
**Prevention:** Always use cryptographically secure random values, such as `crypto.randomUUID()`, when generating unique identifiers for application entities, especially those that might be synced or used across sessions/users.
