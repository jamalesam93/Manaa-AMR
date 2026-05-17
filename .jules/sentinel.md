## 2024-05-17 - Fix predictable identifier generation (IDOR risk)
**Vulnerability:** The application was using `Date.now().toString()` to generate unique IDs for quiz results (`src/utils/progressTracker.js`) and family profiles (`src/contexts/AppContext.jsx`).
**Learning:** Using `Date.now()` produces predictable sequential identifiers. In contexts where IDs refer to user data (like profiles or quiz results), predictable IDs can be easily guessed, leading to potential Insecure Direct Object Reference (IDOR) vulnerabilities or ID collisions in distributed systems.
**Prevention:** Always use cryptographically secure random identifier generators like `crypto.randomUUID()` when creating unique identifiers for user entities or objects to ensure uniqueness and non-predictability.
