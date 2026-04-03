export function isSafeUrl(url) {
    if (!url || typeof url !== 'string') return false;
    const sanitizedUrl = url.trim().toLowerCase();
    if (sanitizedUrl.startsWith('javascript:') || sanitizedUrl.startsWith('vbscript:')) {
        return false;
    }
    return true;
}
