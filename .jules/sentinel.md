## 2024-05-31 - [Insecure Object Generation]
**Vulnerability:** Found `Date.now().toString()` being used to generate unique IDs for quiz results and family profiles.
**Learning:** This approach results in predictable identifiers, leading to potential Insecure Direct Object Reference (IDOR) vulnerabilities, as an attacker could guess the IDs.
**Prevention:** Use `crypto.randomUUID()` to generate cryptographically secure, unpredictable, and universally unique identifiers.
