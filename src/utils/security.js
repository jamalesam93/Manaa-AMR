/**
 * Security utilities for the application
 */

/**
 * Validates a URL to prevent DOM-based XSS (e.g., javascript: URIs)
 * @param {string} url - The URL to validate
 * @returns {boolean} - True if the URL is safe, false otherwise
 */
export function isSafeUrl(url) {
    if (!url || typeof url !== 'string') return false;

    // Strip whitespace to prevent bypasses like ' javascript:'
    const trimmedUrl = url.trim();

    // Explicitly reject dangerous URIs using regex as a first pass
    if (/^(?:javascript|vbscript|data):/i.test(trimmedUrl)) {
        return false;
    }

    try {
        const base = typeof window !== 'undefined' ? window.location.origin : 'http://localhost';
        const parsedUrl = new URL(trimmedUrl, base);
        const protocol = parsedUrl.protocol.toLowerCase();

        // Deny dangerous protocols
        if (['javascript:', 'vbscript:', 'data:'].includes(protocol)) {
            return false;
        }

        return true;
    } catch {
        // Fallback to regex if parsing fails
        return !/^(?:javascript|vbscript|data):/i.test(trimmedUrl);
    }
}
