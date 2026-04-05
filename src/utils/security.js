export function isSafeUrl(url) {
    if (!url || typeof url !== 'string') return false;
    const sanitizedUrl = url.trim().toLowerCase();

    // Quick check for dangerous protocols
    if (sanitizedUrl.startsWith('javascript:') || sanitizedUrl.startsWith('vbscript:')) {
        return false;
    }

    try {
        // Use a dummy base for relative URLs to avoid errors
        const parsedUrl = new URL(url, 'http://dummy.base');
        return !['javascript:', 'vbscript:'].includes(parsedUrl.protocol);
    } catch {
        // If URL parsing fails, fail secure
        return false;
    }
}
