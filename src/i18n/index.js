import { en } from './en'
import { ar } from './ar'

export const translations = { en, ar }

export const LANGUAGES = {
    EN: { code: 'en', name: 'English', dir: 'ltr' },
    AR: { code: 'ar', name: 'العربية', dir: 'rtl' }
}

// Helper to get nested translation value
export function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj)
}
