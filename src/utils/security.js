/**
 * Security utilities
 */

/**
 * Validates a URL to prevent DOM-based XSS attacks via javascript: or vbscript: URIs.
 * Allows safe protocols (http, https, blob, data) and relative paths.
 * Returns false if the input is not a string or if it contains a dangerous protocol.
 *
 * @param {string} url The URL to validate
 * @returns {boolean} True if the URL is safe, false otherwise
 */
export function isSafeUrl(url) {
    if (typeof url !== 'string') {
        return false;
    }

    const trimmed = url.trim();

    // Empty strings are typically safe (though they may result in a broken image/link)
    if (!trimmed) {
        return true;
    }

    try {
        // Try parsing with a dummy base URL to handle both absolute and relative URLs
        const parsedUrl = new URL(trimmed, 'http://example.com');
        const protocol = parsedUrl.protocol.toLowerCase();

        // Define safe protocols. We explicitly allow blob: and data:
        // as they are used legitimately in the application for media.
        const safeProtocols = ['http:', 'https:', 'blob:', 'data:'];

        return safeProtocols.includes(protocol);
    } catch {
        // If URL parsing fails (e.g. extremely malformed), fallback to regex check
        // Check if there is ANY scheme present
        const schemeRegex = /^[a-zA-Z][a-zA-Z0-9+.-]*:/;
        if (schemeRegex.test(trimmed)) {
            const schemeMatch = trimmed.match(schemeRegex)[0].toLowerCase();
            const safeProtocols = ['http:', 'https:', 'blob:', 'data:'];
            return safeProtocols.includes(schemeMatch);
        }

        // If no scheme is present, it's a relative path and generally safe
        return true;
    }
}

/**
 * Returns the provided URL if it's safe, otherwise returns a fallback or empty string.
 *
 * @param {string} url The URL to sanitize
 * @param {string} [fallback=''] The fallback URL if the original is unsafe
 * @returns {string} The original URL if safe, otherwise the fallback
 */
export function getSafeUrl(url, fallback = undefined) {
    if (url === undefined || url === null) {
        return url; // Keep undefined/null to prevent React from rendering empty attributes
    }
    return isSafeUrl(url) ? url : fallback;
}
