## 2024-05-28 - Insecure ID Generation via Date.now()
**Vulnerability:** Use of `Date.now().toString()` to generate unique identifiers for quiz results and family profiles.
**Learning:** This approach yields predictable identifiers based on server/client time, allowing malicious users to predict and guess IDs to access other users' private data (IDOR vulnerability) if these IDs are ever utilized in API requests or shared state.
**Prevention:** Always use cryptographically secure random identifier generators like `crypto.randomUUID()` to produce unguessable identifiers for sensitive entities.
