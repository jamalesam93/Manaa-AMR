## 2024-05-20 - DOM-based XSS via unvalidated URLs
**Vulnerability:** The application was setting `link.href` and `img.src` (and `video.src`/`audio.src`) attributes using user-controlled properties directly in `ImageGallery.jsx` and `MediaPlayer.jsx`.
**Learning:** `href` and `src` attributes can execute `javascript:` URIs if no validation is done. React handles normal DOM properties safely for basic XSS but not URL-based XSS. Wait, is it from user-controlled property though?
**Prevention:** Always validate and sanitize URLs before passing them to the DOM, using a utility function `isSafeUrl(url)` that checks against allowed protocols (e.g., `http:`, `https:`, `mailto:`, `tel:`, etc.).
