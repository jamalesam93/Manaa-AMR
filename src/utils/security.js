/**
 * Security utilities for validating and sanitizing user inputs, URLs, and state.
 */

const BLOCKED_SCHEMES = ['javascript:', 'vbscript:', 'data:text/html', 'file:'];

/**
 * Validates if a URL is safe to be used in href, src, or other attributes.
 * Allows common schemes (http, https, blob, data) but strictly blocks executable schemes.
 *
 * @param {string} url - The URL to check.
 * @returns {boolean} - True if the URL is safe, false otherwise.
 */
export function isSafeUrl(url) {
    if (!url || typeof url !== 'string') {
        return false;
    }

    try {
        const parsedUrl = new URL(url, window.location.origin);
        const protocol = parsedUrl.protocol.toLowerCase();

        // Check against blocked schemes explicitly
        for (const blockedScheme of BLOCKED_SCHEMES) {
             if (protocol === blockedScheme || url.toLowerCase().startsWith(blockedScheme)) {
                 return false;
             }
        }

        // Ensure data URIs are not HTML to prevent execution
        if (protocol === 'data:' && url.toLowerCase().includes('text/html')) {
            return false;
        }

        return true;
    } catch {
        // If it can't be parsed as a URL, it might be a relative path.
        // Check for javascript: or vbscript: at the start
        const lowerUrl = url.toLowerCase().trim();
        for (const blockedScheme of BLOCKED_SCHEMES) {
             if (lowerUrl.startsWith(blockedScheme)) {
                 return false;
             }
        }

        return true; // Assume relative paths are safe if they don't start with bad schemes
    }
}

/**
 * Returns a sanitized URL, falling back to a safe default if the provided URL is unsafe.
 *
 * @param {string} url - The URL to sanitize.
 * @param {string} [fallback=''] - The fallback URL to use if unsafe.
 * @returns {string} - A safe URL string.
 */
export function getSafeUrl(url, fallback = '') {
    return isSafeUrl(url) ? url : fallback;
}
