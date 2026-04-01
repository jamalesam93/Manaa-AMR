/**
 * Security utilities to protect against common vulnerabilities.
 */

/**
 * Validates a URL to prevent DOM-based XSS (e.g., javascript: URIs).
 *
 * @param {string} url - The URL to validate
 * @returns {boolean} - True if the URL is considered safe
 */
export function isSafeUrl(url) {
    if (!url || typeof url !== 'string') {
        return false;
    }

    try {
        // Remove leading/trailing whitespace that could bypass checks
        const cleanUrl = url.trim();

        // Use a dummy base so relative URLs can be parsed without error
        const parsedUrl = new URL(cleanUrl, 'http://dummy.local');

        // Ensure the URL protocol is safe
        const protocol = parsedUrl.protocol.toLowerCase();

        // Deny-list known dangerous protocols
        if (['javascript:', 'vbscript:', 'data:', 'file:'].includes(protocol)) {
            return false;
        }

        return true;
    } catch {
        // Fallback checks for parsing errors
        const lowerUrl = url.trim().toLowerCase();
        if (lowerUrl.startsWith('javascript:') ||
            lowerUrl.startsWith('vbscript:') ||
            lowerUrl.startsWith('data:') ||
            lowerUrl.startsWith('file:')) {
            return false;
        }

        // Assume relative URL if parsing fails but no obvious XSS vector is found
        return true;
    }
}
