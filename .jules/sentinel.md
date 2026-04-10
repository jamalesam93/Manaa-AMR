# Sentinel Security Journal


## 2025-02-24 - [Fix DOM-based XSS in Media Components]
**Vulnerability:** DOM-based XSS was possible via dynamic URL assignment to `href` and `src` attributes in `MediaPlayer.jsx` and `ImageGallery.jsx` when handling user-provided media URLs (especially for downloads).
**Learning:** `javascript:` and `vbscript:` schemes in user-supplied data assigned to `href` or `src` attributes can execute arbitrary scripts when interacted with or loaded.
**Prevention:** Created `src/utils/security.js` with `isSafeUrl` and `getSafeUrl` functions. Used these functions to validate all dynamic URL assignments to `src` for `<audio>`/`<video>`/`<img>` and `href` for download links, specifically blocking executable schemes while allowing legitimate `blob:` and `data:` downloads.
