/**
 * Security utilities for Mana'a application
 */

/**
 * Validates a URL to prevent DOM-based XSS attacks.
 * Blocks executable schemes like javascript: and vbscript:.
 * Allows safe schemes like http:, https:, mailto:, tel:, data:, and blob:.
 *
 * @param {string} url - The URL to validate
 * @returns {boolean} - True if the URL is safe, false otherwise
 */
export function isSafeUrl(url) {
    if (typeof url !== 'string') {
        return false;
    }

    // Empty URLs are considered safe (they just point to current page or do nothing)
    if (!url || url.trim() === '') {
        return true;
    }

    try {
        // Use a dummy base URL to correctly parse relative URLs
        const parsedUrl = new URL(url, 'https://example.com');

        // Allowed protocols
        const allowedProtocols = [
            'http:',
            'https:',
            'mailto:',
            'tel:',
            'data:',
            'blob:' // Needed for legitimate media downloads
        ];

        // Block known dangerous protocols explicitly
        const blockedProtocols = [
            'javascript:',
            'vbscript:',
            'file:'
        ];

        const protocol = parsedUrl.protocol.toLowerCase();

        if (blockedProtocols.includes(protocol)) {
            return false;
        }

        // Only allow recognized safe protocols for absolute URLs
        // Note: relative URLs will be resolved against the dummy base, so they will get 'https:'
        return allowedProtocols.includes(protocol);
    } catch {
        // If URL parsing fails entirely, fail securely
        return false;
    }
}

/**
 * Returns a safe version of the URL, or undefined if unsafe/missing.
 * Useful for React props like src or href.
 *
 * @param {string} url - The URL to sanitize
 * @returns {string|undefined} - The safe URL or undefined
 */
export function getSafeUrl(url) {
    if (url === undefined || url === null) {
        return undefined;
    }

    return isSafeUrl(url) ? url : undefined;
}
