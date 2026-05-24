## 2024-05-15 - Predictable ID Generation
**Vulnerability:** Found `Date.now().toString()` being used to generate unique IDs for quiz results and family profiles.
**Learning:** `Date.now()` is predictable and can lead to Insecure Direct Object Reference (IDOR) vulnerabilities if these IDs are ever used in an API context, allowing attackers to guess other users' IDs.
**Prevention:** Always use cryptographically secure random number generators like `crypto.randomUUID()` for creating unique identifiers.
