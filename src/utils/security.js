export function isSafeUrl(url) {
    if (typeof url !== 'string') return false;
    // Allow relative URLs, anchor links, and mailto/tel but specifically block dangerous schemes.
    try {
        const parsed = new URL(url, 'https://example.com');
        const protocol = parsed.protocol.toLowerCase();
        if (['javascript:', 'vbscript:', 'data:', 'file:'].includes(protocol)) {
            return false;
        }
        return true;
    } catch {
        return false;
    }
}

export function getSafeUrl(url) {
    if (url === undefined || url === null) return undefined;
    return isSafeUrl(url) ? url : undefined;
}
