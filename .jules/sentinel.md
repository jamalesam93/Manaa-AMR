## 2024-03-21 - [Predictable Identifiers in Application State and Progress]
**Vulnerability:** Predictable IDs were generated using `Date.now().toString()` for quiz results and family profiles.
**Learning:** Using predictable, time-based IDs can lead to Insecure Direct Object Reference (IDOR) vulnerabilities or ID collisions, allowing attackers to guess other users' data IDs.
**Prevention:** Always use cryptographically secure random identifiers (e.g., `crypto.randomUUID()`) when assigning unique IDs to domain entities (like profiles, progress records).
