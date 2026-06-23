export function isSafeUrl(url) {
    if (typeof url !== 'string') return false;
    try {
        const parsed = new URL(url, 'https://example.com');
        const protocol = parsed.protocol.toLowerCase();
        if (
            protocol === 'javascript:' ||
            protocol === 'vbscript:' ||
            protocol === 'data:' ||
            protocol === 'file:'
        ) {
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
