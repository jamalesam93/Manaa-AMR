/**
 * Security utilities
 */

/**
 * Validates a URL to prevent DOM-based XSS (e.g., from `javascript:` URIs)
 * @param {string} url - The URL to validate
 * @returns {boolean} - True if the URL is safe, false otherwise
 */
export function isSafeUrl(url) {
    if (!url) return false;

    // Convert to string and trim
    const strUrl = String(url).trim();

    // Check against dangerous schemes using regex
    // This blocks javascript:, vbscript:, data:text/html, etc.
    const dangerousSchemes = /^(javascript|vbscript|data(?!\/(png|jpe?g|gif|webp|svg\+xml))):/i;

    return !dangerousSchemes.test(strUrl);
}
