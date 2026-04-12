## 2024-04-12 - Prevent DOM-based XSS in Dynamic Links
**Vulnerability:** Dynamic assignment of user-controllable URLs to `href` (for downloads) and `src` (for media elements) attributes, without validating the URL scheme, which allows execution of malicious schemes like `javascript:`.
**Learning:** React does not automatically sanitize `href` or `src` attributes, making dynamic URL assignments susceptible to XSS.
**Prevention:** Always validate dynamically assigned URLs against an allowlist of safe schemes (`http:`, `https:`, `blob:`, `data:`) using a utility function like `isSafeUrl` and `getSafeUrl` before assigning them to DOM elements or creating download links.
