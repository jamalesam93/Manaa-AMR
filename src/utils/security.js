/**
 * Security utilities to prevent common vulnerabilities like DOM-based XSS.
 */

/**
 * Checks if a given URL is safe to use in href or src attributes.
 * Allows safe schemes (http, https, blob, data) and relative paths.
 * Explicitly blocks executable schemes like javascript: and vbscript:.
 *
 * @param {string} url - The URL to validate.
 * @returns {boolean} - True if the URL is safe, false otherwise.
 */
export function isSafeUrl(url) {
    if (!url) return false;

    // Allow relative URLs and local paths
    if (url.startsWith('/') || url.startsWith('.')) {
        return true;
    }

    try {
        // Use a dummy base to properly parse URLs without protocol if needed,
        // but new URL will throw if it's not absolute and no base is provided.
        // We provide a base to ensure it parses, and then we check the protocol.
        const parsedUrl = new URL(url, 'http://localhost');

        // List of explicitly allowed protocols
        const allowedProtocols = ['http:', 'https:', 'blob:', 'data:'];

        return allowedProtocols.includes(parsedUrl.protocol);
    } catch {
        // If URL parsing fails, consider it unsafe just to be careful,
        // although legitimate relative URLs might fail without a base.
        // But we already handle relative URLs above.
        return false;
    }
}

/**
 * Returns the URL if it's safe, otherwise returns a fallback URL.
 *
 * @param {string} url - The URL to sanitize.
 * @param {string} [fallback=''] - The fallback URL to use if the original is unsafe.
 * @returns {string} - A safe URL.
 */
export function getSafeUrl(url, fallback = '') {
    return isSafeUrl(url) ? url : fallback;
}
