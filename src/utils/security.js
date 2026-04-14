/**
 * Security utilities to prevent DOM-based vulnerabilities
 */

/**
 * Validates a URL scheme against an allowlist to prevent XSS via javascript:/vbscript:
 * Allows standard web schemes and data/blob URIs for media handling
 * @param {string} url - The URL to validate
 * @returns {boolean} True if safe, false otherwise
 */
export function isSafeUrl(url) {
    if (!url || typeof url !== 'string') return false;

    // Allow relative URLs
    if (url.startsWith('/') || url.startsWith('./') || url.startsWith('../') || !url.includes(':')) {
        return true;
    }

    try {
        const parsedUrl = new URL(url);
        const allowedSchemes = ['http:', 'https:', 'blob:', 'data:'];
        return allowedSchemes.includes(parsedUrl.protocol);
    } catch {
        // If it can't be parsed as a URL and has a colon, it's potentially dangerous
        // (e.g., 'javascript:alert(1)')
        const schemeMatch = url.match(/^([^:]+):/);
        if (schemeMatch) {
            const scheme = schemeMatch[1].toLowerCase();
            return ['http', 'https', 'blob', 'data'].includes(scheme);
        }
        return false;
    }
}

/**
 * Returns the original URL if safe, otherwise returns a safe fallback or '#'
 * @param {string} url - The URL to validate
 * @param {string} fallback - Optional fallback URL
 * @returns {string} Safe URL
 */
export function getSafeUrl(url, fallback = '#') {
    return isSafeUrl(url) ? url : fallback;
}
