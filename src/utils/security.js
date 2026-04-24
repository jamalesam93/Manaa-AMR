/**
 * Security utilities
 */

/**
 * Validates if a URL is safe to use in href or src attributes,
 * preventing DOM-based XSS attacks.
 *
 * @param {string} url - The URL to validate
 * @returns {boolean} - True if the URL is safe, false otherwise
 */
export function isSafeUrl(url) {
    if (typeof url !== 'string') {
        return false;
    }

    const normalized = url.trim().toLowerCase();

    // Block executable schemes
    if (normalized.startsWith('javascript:') || normalized.startsWith('vbscript:')) {
        return false;
    }

    return true;
}

/**
 * Sanitizes a URL, returning it if safe, or undefined if unsafe.
 * Returns undefined instead of empty string to prevent React from rendering empty attributes (e.g. src="")
 *
 * @param {string} url - The URL to sanitize
 * @returns {string|undefined} - The safe URL or undefined
 */
export function getSafeUrl(url) {
    if (url === undefined || url === null) {
        return undefined;
    }

    if (isSafeUrl(url)) {
        return url;
    }

    return undefined;
}
