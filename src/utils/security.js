/**
 * Security utilities for URL validation
 */

export function isSafeUrl(url) {
    if (typeof url !== 'string') {
        return false;
    }

    const trimmedUrl = url.trim().toLowerCase();
    if (trimmedUrl.startsWith('javascript:') || trimmedUrl.startsWith('vbscript:')) {
        return false;
    }

    try {
        const parsedUrl = new URL(url, 'https://example.com');
        const protocol = parsedUrl.protocol;

        if (['javascript:', 'vbscript:'].includes(protocol)) {
            return false;
        }

        return true;
    } catch {
        return false;
    }
}

export function getSafeUrl(url) {
    if (url === undefined || url === null) {
        return undefined;
    }

    return isSafeUrl(url) ? url : undefined;
}
