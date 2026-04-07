/**
 * Security utilities for the application
 */

/**
 * Validates a URL to prevent DOM-based XSS (e.g., javascript: URIs)
 * @param {string} url - The URL to validate
 * @returns {boolean} True if the URL is safe, false otherwise
 */
export function isSafeUrl(url) {
    if (!url || typeof url !== 'string') return false;

    // Strip leading whitespace and control characters which could bypass checks
    // eslint-disable-next-line no-control-regex
    const sanitizedUrl = url.replace(/^[\s\x00-\x1f]+/, '');

    // Check for malicious protocols
    if (/^(javascript|vbscript):/i.test(sanitizedUrl)) {
        return false;
    }

    // For data URIs, only allow images, audio, or video (deny text/html etc.)
    if (/^data:/i.test(sanitizedUrl)) {
        if (!/^data:(image|audio|video)\//i.test(sanitizedUrl)) {
            return false;
        }
    }

    return true;
}
