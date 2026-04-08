/**
 * Security utilities to protect against common web vulnerabilities.
 */

/**
 * Validates a URL to ensure it does not use dangerous protocols like 'javascript:'.
 * Helps prevent DOM-based XSS attacks when dynamically setting href or src attributes.
 *
 * @param {string} url - The URL to validate.
 * @returns {boolean} True if the URL is safe, false otherwise.
 */
export function isSafeUrl(url) {
    if (!url || typeof url !== 'string') {
        return false;
    }

    // Allow relative URLs starting with /, ./, or ../
    if (/^\.?\.?\//.test(url)) {
        return true;
    }

    // Allow anchor links
    if (url.startsWith('#')) {
        return true;
    }

    try {
        const parsedUrl = new URL(url, 'https://example.com'); // Base URL needed for relative paths, though we handle most above

        // Define dangerous protocols
        const dangerousProtocols = ['javascript:', 'vbscript:', 'data:'];

        // Block data: URIs if they contain text/html (potential XSS)
        // We might need to allow data:image/ for base64 images if used in the app, but block html
        if (parsedUrl.protocol === 'data:') {
             const isHtml = url.substring(0, 20).toLowerCase().includes('text/html');
             if (isHtml) return false;
             return true; // Allow other data URIs like images
        }

        // Block executing protocols
        if (dangerousProtocols.includes(parsedUrl.protocol.toLowerCase())) {
            return false;
        }

        return true;
    } catch {
        // If it can't be parsed as a URL, it might be a malformed relative path.
        // It's safer to reject it if it doesn't match our relative path regex.
        return false;
    }
}
