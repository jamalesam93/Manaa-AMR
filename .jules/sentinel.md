## 2024-05-20 - [Replace Predictable IDs with Secure UUIDs]
**Vulnerability:** Weak identifier generation using `Date.now().toString()` for quiz results and family profiles. This predictably sequential ID generation could lead to Insecure Direct Object Reference (IDOR) vulnerabilities if these IDs were used in URLs or APIs.
**Learning:** Sequential timestamps are not cryptographically secure and are trivial to guess or brute-force, allowing attackers to iterate through IDs to access unauthorized data.
**Prevention:** Always use `crypto.randomUUID()` or a dedicated UUID library (like `uuid` v4) to generate cryptographically secure, random identifiers that are practically impossible to guess.
