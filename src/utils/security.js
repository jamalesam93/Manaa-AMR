/**
 * Security utilities
 */

/**
 * Validates a URL to prevent DOM-based XSS attacks (e.g. javascript: URIs)
 * @param {string} url - The URL to validate
 * @returns {boolean} - True if the URL is safe, false otherwise
 */
export function isSafeUrl(url) {
    if (!url || typeof url !== 'string') return false;

    // Remove all whitespace and non-printable characters for checking
    // eslint-disable-next-line no-control-regex
    const sanitizedUrl = url.replace(/[\s\x00-\x1F\x7F]/g, '').toLowerCase();

    // Check for dangerous protocols, including encoded variants
    if (sanitizedUrl.startsWith('javascript:') ||
        sanitizedUrl.startsWith('vbscript:') ||
        sanitizedUrl.startsWith('data:text/html')) {
        return false;
    }

    // Block URL encodings of dangerous protocols (%6A is j, %76 is v)
    if (sanitizedUrl.includes('%6a%61%76%61%73%63%72%69%70%74') ||
        sanitizedUrl.includes('%76%62%73%63%72%69%70%74')) {
        return false;
    }

    try {
        // If it can be parsed as a full URL, ensure its protocol is in the allowlist
        const parsed = new URL(url);
        return ['http:', 'https:', 'blob:', 'data:'].includes(parsed.protocol);
    } catch {
        // If it's a relative URL and passed the dangerous protocol checks, it's considered safe
        return true;
    }
}
