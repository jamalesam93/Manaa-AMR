
## 2024-05-07 - Weak Randomness and Predictable Identifiers
**Vulnerability:** The application used `Math.random()` for shuffling quiz scenarios and `Date.now().toString()` for generating unique identifiers for quiz results and family profiles.
**Learning:** `Math.random()` is not cryptographically secure and can lead to predictable patterns, which is a risk if used for security-sensitive logic (though primarily a defense-in-depth enhancement here). `Date.now().toString()` produces highly predictable identifiers, which can expose the application to enumeration attacks or identifier collisions if used as primary keys or referenced in URLs/APIs.
**Prevention:** Always use `crypto.getRandomValues()` for generating random numbers and `crypto.randomUUID()` for generating cryptographically secure, non-predictable UUIDs.
