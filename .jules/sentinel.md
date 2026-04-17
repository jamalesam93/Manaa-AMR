## 2026-04-17 - Prevent DOM-based XSS with safe URL validation
**Vulnerability:** DOM-based XSS was possible in `MediaPlayer.jsx` and `ImageGallery.jsx` because dynamic URLs were passed directly to `src` or `href` attributes without validation.
**Learning:** React does not automatically prevent XSS if a dynamic value contains executable schemes (like `javascript:` or `vbscript:`) in attributes that expect a URL.
**Prevention:** Created a utility `isSafeUrl` and `getSafeUrl` in `src/utils/security.js` to explicitly block these dangerous schemes while permitting safe ones like `blob:` and `data:` (except `text/html`). Always validate dynamic URLs assigned to HTML attributes.
