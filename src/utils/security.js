/**
 * Security utilities for the application
 */

/**
 * Validates a URL to prevent DOM-based XSS attacks.
 * Intentionally allows blob: and data: schemes for legitimate media downloads,
 * but strictly blocks executable schemes like javascript: and vbscript:.
 *
 * @param {string} url - The URL to validate
 * @returns {boolean} - True if the URL is safe, false otherwise
 */
export function isSafeUrl(url) {
    if (!url || typeof url !== 'string') return false;

    // Remove leading/trailing whitespace and control characters
    const trimmedUrl = url.trim();
    if (!trimmedUrl) return false;

    // Check against forbidden executable schemes directly
    const lowerUrl = trimmedUrl.toLowerCase();
    if (lowerUrl.startsWith('javascript:') || lowerUrl.startsWith('vbscript:')) {
        return false;
    }

    try {
        // If it's an absolute URL, check the protocol
        const parsedUrl = new URL(trimmedUrl, window.location.origin);
        const protocol = parsedUrl.protocol.toLowerCase();

        return !['javascript:', 'vbscript:'].includes(protocol);
    } catch {
        // If it can't be parsed, it's likely a relative URL.
        // We already checked for javascript:/vbscript: prefix above.
        return true;
    }
}

/**
 * Validates a URL and returns a safe fallback if invalid.
 *
 * @param {string} url - The URL to validate
 * @param {string} fallback - The fallback URL to use if invalid (defaults to '#')
 * @returns {string} - The safe URL
 */
export function getSafeUrl(url, fallback = '#') {
    return isSafeUrl(url) ? url : fallback;
}
