## 2024-04-09 - Prevent DOM-based XSS in download functions
**Vulnerability:** DOM-based XSS via user-supplied URLs in download links (`javascript:` execution).
**Learning:** Functions that create `<a>` tags and dynamically set `link.href` to user-supplied input (like `image.src` in `ImageGallery` or `src` in `MediaPlayer`) are vulnerable to executing malicious scripts if the URL scheme is `javascript:`.
**Prevention:** Implement and use a utility function like `isSafeUrl` to strictly validate all URLs assigned to `href` or `src` attributes, ensuring only safe protocols (`http:`, `https:`, relative paths) are allowed.
