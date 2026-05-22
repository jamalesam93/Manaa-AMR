## 2025-05-22 - [Insecure Identifiers]
**Vulnerability:** Weak identifier generation
**Learning:** Found usage of `Date.now().toString()` being used to generate supposedly unique identifiers for quiz scenarios and family profiles. Such weak IDs can be guessed easily which could result in an Insecure Direct Object Reference (IDOR).
**Prevention:** To prevent IDORs, all user identifiers should be securely generated using `crypto.randomUUID()` instead of `Date.now()`.
