## 2024-04-20 - [DOM-based XSS Prevention via URI Sanatization]
**Vulnerability:** User input or attacker-controlled data could be assigned to `src` or `href` attributes in `MediaPlayer.jsx` and `ImageGallery.jsx`, potentially allowing `javascript:` or `vbscript:` execution.
**Learning:** React components that accept URLs must sanitize them before assignment to `href` or `src` attributes. Standard `new URL` parsing can handle complex protocols but fails on relative URLs, meaning a fallback validation is needed to allow relative assets while blocking dangerous schemes.
**Prevention:** Implement and use a robust URL sanitizer like `getSafeUrl` that explicitly permits `http:`, `https:`, `blob:`, and `data:` schemes while allowing relative paths.
