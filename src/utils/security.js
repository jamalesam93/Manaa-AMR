/**
 * Security utilities for the application.
 */

const BLOCKED_SCHEMES = ['javascript:', 'vbscript:', 'data:text/html'];

/**
 * Validates a URL to prevent DOM-based XSS by blocking executable schemes.
 * Allows safe schemes like http, https, blob, and data (except text/html).
 *
 * @param {string} url - The URL to validate.
 * @returns {boolean} True if the URL is safe, false otherwise.
 */
export function isSafeUrl(url) {
    if (!url || typeof url !== 'string') {
        return false;
    }

    try {
        const urlStr = String(url).trim().toLowerCase();

        // Block known dangerous schemes
        for (const scheme of BLOCKED_SCHEMES) {
            if (urlStr.startsWith(scheme)) {
                return false;
            }
        }

        // Additional check for encoded dangerous schemes
        try {
            const decodedUrl = decodeURIComponent(urlStr);
            for (const scheme of BLOCKED_SCHEMES) {
                if (decodedUrl.startsWith(scheme)) {
                    return false;
                }
            }
        } catch {
            // Ignore decoding errors
        }

        return true;
    } catch {
        // Fail securely
        return false;
    }
}

/**
 * Validates a URL and returns a safe fallback if the URL is dangerous.
 *
 * @param {string} url - The URL to validate.
 * @param {string} fallback - The fallback URL to return if the input is unsafe.
 * @returns {string} The safe URL or the fallback.
 */
export function getSafeUrl(url, fallback = '#') {
    return isSafeUrl(url) ? url : fallback;
}
