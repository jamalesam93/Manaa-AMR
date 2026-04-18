/**
 * Security utilities to prevent DOM-based XSS and other vulnerabilities.
 */

const BLOCKED_SCHEMES = ['javascript:', 'vbscript:', 'data:text/html'];

/**
 * Validates if a URL is safe to use in href or src attributes.
 * Intentionally allows blob: and data: schemes (except HTML) for legitimate media downloads,
 * but strictly blocks executable schemes like javascript: and vbscript:.
 *
 * @param {string} url - The URL to validate
 * @returns {boolean} - True if safe, false otherwise
 */
export const isSafeUrl = (url) => {
    if (!url) return true;
    if (typeof url !== 'string') return false; // Fail securely for non-strings

    // Remove all whitespace and control characters to prevent bypasses like "java\nscript:"
    // eslint-disable-next-line no-control-regex
    const sanitizedUrl = url.replace(/[\u0000-\u001F\u007F-\u009F\s]+/g, '').toLowerCase();

    for (const scheme of BLOCKED_SCHEMES) {
        if (sanitizedUrl.startsWith(scheme)) {
            return false;
        }
    }

    return true;
};

/**
 * Returns the URL if safe, otherwise returns a fallback safe URL.
 *
 * @param {string} url - The URL to validate
 * @param {string} fallback - The fallback URL if unsafe (default: '#')
 * @returns {string|undefined} - The safe URL or fallback
 */
export const getSafeUrl = (url, fallback = '#') => {
    if (!url) return url;
    return isSafeUrl(url) ? url : fallback;
};
