## 2025-05-15 - Insecure Deserialization in localStorage

**Vulnerability:** Data read from `localStorage` (`manaa_dailyChallenge`, `manaa_familyProfiles`) was parsed directly using `JSON.parse` without `try-catch` blocks or schema validation.
**Learning:** If an attacker can inject malicious payloads into `localStorage` (e.g. via Cross-Site Scripting or insecure parent components), they could execute arbitrary code or trigger application crashes when the data is deserialized directly without validation.
**Prevention:** Always wrap `JSON.parse` in a `try-catch` block when parsing data originating from client storage APIs like `localStorage` or `sessionStorage`. Implement strict type and schema validations before utilizing the parsed data. Fail securely by returning default values.
