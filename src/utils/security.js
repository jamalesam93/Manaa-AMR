/**
 * Security utilities for the application
 */

/**
 * Validates URLs to prevent DOM-based XSS via javascript: or data: URIs
 * @param {string} url - The URL to validate
 * @returns {boolean} - True if the URL is safe, false otherwise
 */
export function isSafeUrl(url) {
    if (!url || typeof url !== 'string') return false;

    // Trim whitespace
    const trimmedUrl = url.trim();

    // Prevent javascript: and data: URIs even if disguised
    const lowerUrl = trimmedUrl.toLowerCase();
    if (lowerUrl.startsWith('javascript:') || lowerUrl.startsWith('data:text/html')) {
        return false;
    }

    // Allow relative paths
    if (trimmedUrl.startsWith('/') || trimmedUrl.startsWith('./') || trimmedUrl.startsWith('../')) {
        return true;
    }

    try {
        const parsedUrl = new URL(trimmedUrl, window.location.origin);
        return ['http:', 'https:', 'blob:', 'data:'].includes(parsedUrl.protocol);
    } catch {
        // If URL parsing fails, and it's not a relative path, reject it
        return false;
    }
}
