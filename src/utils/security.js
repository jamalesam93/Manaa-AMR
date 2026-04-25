/**
 * Security utilities
 */

/**
 * Validates if a URL is safe to be used in href/src attributes
 * Prevents javascript: and other dangerous protocols
 *
 * @param {string} url - The URL to check
 * @returns {boolean} True if the URL is safe
 */
export function isSafeUrl(url) {
    if (!url || typeof url !== 'string') return false;

    // Check for common safe protocols and relative URLs
    // Allow empty protocol (relative URLs), http, https, mailto, tel
    // We also allow blob: and data: (often used for legitimate downloads)
    const allowedProtocols = ['http:', 'https:', 'mailto:', 'tel:', 'blob:', 'data:'];

    try {
        // If it can be parsed as a URL, check the protocol
        const parsedUrl = new URL(url, 'http://dummy.com'); // Base URL needed for relative URLs

        // If it's a relative URL, it will have the dummy.com protocol (http:)
        if (parsedUrl.protocol === 'http:' && !url.startsWith('http')) {
            return true;
        }

        return allowedProtocols.includes(parsedUrl.protocol);
    } catch {
        // If URL parsing fails, it's likely a malformed or relative URL
        // Simple string check for dangerous protocols
        const dangerousPrefixes = ['javascript:', 'vbscript:', 'file:'];
        const lowerUrl = url.toLowerCase().trim();

        for (const prefix of dangerousPrefixes) {
            if (lowerUrl.startsWith(prefix)) {
                return false;
            }
        }

        return true;
    }
}

/**
 * Sanitizes a URL, returning a safe fallback if the URL is dangerous
 *
 * @param {string} url - The URL to sanitize
 * @param {string} fallback - The fallback to return if unsafe
 * @returns {string} The safe URL or fallback
 */
export function getSafeUrl(url, fallback = '#') {
    if (url === null || url === undefined) return url;
    return isSafeUrl(url) ? url : fallback;
}
