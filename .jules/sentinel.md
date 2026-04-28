## 2024-05-24 - [DOM-based XSS Prevention via URL Sanitization]
**Vulnerability:** Unsanitized dynamic URLs assigned to `href` and `src` attributes in React components (`MediaPlayer.jsx`, `ImageGallery.jsx`).
**Learning:** React does not automatically sanitize URLs passed to `href` or `src`. This can lead to DOM-based XSS if user-controlled or external data contains executable schemes like `javascript:` or `vbscript:`.
**Prevention:** Implement a robust URL sanitization utility (`getSafeUrl`) that uses the URL API to parse and validate protocols, explicitly blocking dangerous schemes while allowing safe ones, and apply this to all dynamic `src` and `href` assignments.
