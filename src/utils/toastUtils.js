/**
 * Toast notification utility
 * Dispatches a custom event that the Toast component listens for
 */
export function showToast(message, type = 'success', duration = 3000) {
    const event = new CustomEvent('show-toast', {
        detail: { message, type, duration }
    });
    window.dispatchEvent(event);
}
