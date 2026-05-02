import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { translations, LANGUAGES, getNestedValue } from '../i18n'

const AppContext = createContext(null)

// Themes
export const THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
    SYSTEM: 'system'
}

export function AppProvider({ children }) {
    // Language (EN or AR)
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('manaa_language') || 'ar'
    })

    // Theme
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('manaa_theme') || THEMES.SYSTEM
    })

    // Actual theme (resolved from system preference if needed)
    const [resolvedTheme, setResolvedTheme] = useState('light')

    // Ramadan mode
    const [ramadanMode, setRamadanMode] = useState(() => {
        return localStorage.getItem('manaa_ramadanMode') === 'true'
    })

    // Welcome page shown (shows on each new session)
    const [welcomeShown, setWelcomeShown] = useState(() => {
        return sessionStorage.getItem('manaa_welcomeShown') === 'true'
    })

    // Disclaimer accepted (keeping for backwards compatibility)
    const [disclaimerAccepted, setDisclaimerAccepted] = useState(() => {
        return localStorage.getItem('manaa_disclaimerAccepted') === 'true'
    })

    // Family profiles
    const [familyProfiles, setFamilyProfiles] = useState(() => {
        const saved = localStorage.getItem('manaa_familyProfiles')
        if (saved) {
            try {
                const parsed = JSON.parse(saved)
                return Array.isArray(parsed) ? parsed : []
            } catch (error) {
                if (import.meta.env.DEV) console.error('Error parsing family profiles:', error)
                return []
            }
        }
        return []
    })

    // Active family profile
    const [activeProfileId, setActiveProfileId] = useState(() => {
        return localStorage.getItem('manaa_activeProfileId') || null
    })

    // Emergency screen state
    const [showEmergency, setShowEmergency] = useState(false)
    const [emergencyCondition, setEmergencyCondition] = useState(null)

    // Resolve system theme
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

        const updateResolvedTheme = () => {
            if (theme === THEMES.SYSTEM) {
                setResolvedTheme(mediaQuery.matches ? 'dark' : 'light')
            } else {
                setResolvedTheme(theme)
            }
        }

        updateResolvedTheme()
        mediaQuery.addEventListener('change', updateResolvedTheme)

        return () => mediaQuery.removeEventListener('change', updateResolvedTheme)
    }, [theme])

    // Apply theme to document
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', resolvedTheme)
        document.documentElement.style.colorScheme = resolvedTheme
    }, [resolvedTheme])

    // Apply language direction
    useEffect(() => {
        const lang = LANGUAGES[language.toUpperCase()]
        document.documentElement.dir = lang?.dir || 'rtl'
        document.documentElement.lang = language
    }, [language])

    // Persist settings
    useEffect(() => {
        localStorage.setItem('manaa_language', language)
    }, [language])

    useEffect(() => {
        localStorage.setItem('manaa_theme', theme)
    }, [theme])

    useEffect(() => {
        localStorage.setItem('manaa_ramadanMode', ramadanMode.toString())
    }, [ramadanMode])

    useEffect(() => {
        localStorage.setItem('manaa_disclaimerAccepted', disclaimerAccepted.toString())
    }, [disclaimerAccepted])

    useEffect(() => {
        sessionStorage.setItem('manaa_welcomeShown', welcomeShown.toString())
    }, [welcomeShown])

    useEffect(() => {
        localStorage.setItem('manaa_familyProfiles', JSON.stringify(familyProfiles))
    }, [familyProfiles])

    useEffect(() => {
        if (activeProfileId) {
            localStorage.setItem('manaa_activeProfileId', activeProfileId)
        }
    }, [activeProfileId])

    // Translation helper
    const t = useCallback((key) => {
        const value = getNestedValue(translations[language], key)
        return value !== undefined ? value : key
    }, [language])

    // Family profile helpers
    const addFamilyProfile = (profile) => {
        const newProfile = {
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            ...profile
        }
        setFamilyProfiles(prev => [...prev, newProfile])
        return newProfile
    }

    const updateFamilyProfile = (id, updates) => {
        setFamilyProfiles(prev =>
            prev.map(p => p.id === id ? { ...p, ...updates } : p)
        )
    }

    const deleteFamilyProfile = (id) => {
        setFamilyProfiles(prev => prev.filter(p => p.id !== id))
        if (activeProfileId === id) {
            setActiveProfileId(null)
        }
    }

    // Emergency helpers
    const triggerEmergency = (condition) => {
        setEmergencyCondition(condition)
        setShowEmergency(true)
    }

    const dismissEmergency = () => {
        setShowEmergency(false)
        setEmergencyCondition(null)
    }

    const acceptDisclaimer = () => {
        setDisclaimerAccepted(true)
    }

    const markWelcomeShown = () => {
        setWelcomeShown(true)
    }

    const value = {
        // Language & Translation
        language,
        setLanguage,
        t,
        isRTL: language === 'ar',

        // Theme
        theme,
        setTheme,
        resolvedTheme,
        isDark: resolvedTheme === 'dark',

        // Settings
        ramadanMode,
        setRamadanMode,

        // Disclaimer
        disclaimerAccepted,
        acceptDisclaimer,

        // Welcome
        welcomeShown,
        markWelcomeShown,

        // Family
        familyProfiles,
        activeProfileId,
        setActiveProfileId,
        addFamilyProfile,
        updateFamilyProfile,
        deleteFamilyProfile,
        getActiveProfile: () => familyProfiles.find(p => p.id === activeProfileId),

        // Emergency
        showEmergency,
        emergencyCondition,
        triggerEmergency,
        dismissEmergency
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error('useApp must be used within an AppProvider')
    }
    return context
}

