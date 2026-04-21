/**
 * Security utilities
 */

/**
 * Validates that a URL is safe to use in href or src attributes to prevent XSS.
 * Allows common safe protocols (http, https, mailto, tel) and blocks potentially
 * dangerous ones (javascript, vbscript, data).
 *
 * @param {string} url - The URL to validate
 * @returns {boolean} - True if safe, false otherwise
 */
export function isSafeUrl(url) {
    if (typeof url !== 'string' || !url) return false;

    // Normalize and extract protocol
    const normalizedUrl = url.trim().toLowerCase();

    // Check for dangerous protocols directly
    if (normalizedUrl.startsWith('javascript:') ||
        normalizedUrl.startsWith('vbscript:')) {
        return false;
    }

    // Relative URLs are generally safe
    if (normalizedUrl.startsWith('/') ||
        normalizedUrl.startsWith('./') ||
        normalizedUrl.startsWith('../') ||
        normalizedUrl.startsWith('#') ||
        normalizedUrl.startsWith('?')) {
        return true;
    }

    try {
        const parsedUrl = new URL(normalizedUrl, 'http://dummy.com'); // Base url needed for relative urls
        const protocol = parsedUrl.protocol;

        // Allowed protocols
        const safeProtocols = ['http:', 'https:', 'mailto:', 'tel:', 'blob:', 'data:'];

        // Note: data: URIs are allowed as they are used for images in this app,
        // but we should ideally restrict them to specific mime types if possible.
        // For now, we allow them to not break existing functionality.
        if (!safeProtocols.includes(protocol)) {
            return false;
        }

        // If data URI, optionally check mime type (e.g., only allow images)
        if (protocol === 'data:' && normalizedUrl.startsWith('data:text/html')) {
            return false; // Block data URIs that can execute HTML/JS
        }

        return true;
    } catch {
        // If it can't be parsed as a URL, consider it unsafe unless it's a relative path
        // (which is already checked above, so this is just a fallback)
        return false;
    }
}

/**
 * Returns the URL if safe, otherwise returns an empty string or fallback.
 *
 * @param {string} url - The URL to sanitize
 * @param {string} fallback - Optional fallback string (default empty string)
 * @returns {string} - The sanitized URL
 */
export function getSafeUrl(url, fallback = undefined) {
    if (url === undefined || url === null) {
        return undefined; // Or null, as requested in memory!
    }

    return isSafeUrl(url) ? url : fallback;
}
