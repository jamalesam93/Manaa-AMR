import { useApp, THEMES } from '../contexts/AppContext'

// Sun icon for light mode
const SunIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
)

// Moon icon for dark mode
const MoonIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
)

export default function SettingsPage() {
    const {
        t,
        language,
        setLanguage,
        theme,
        setTheme,
        isDark
    } = useApp()

    return (
        <div className="page container animate-fadeIn">
            <header style={{ marginBottom: 'var(--space-6)' }}>
                <h1 style={{ color: 'var(--color-primary)' }}>{t('settings.title')}</h1>
            </header>

            {/* Language Selection */}
            <section className="card" style={{ marginBottom: 'var(--space-4)' }}>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>{t('settings.language')}</h3>
                <div className="mode-switcher" style={{ transition: 'none' }}>
                    <button
                        className={`mode-btn ${language === 'ar' ? 'active' : ''}`}
                        onClick={() => setLanguage('ar')}
                        style={{ transition: 'background-color 0.1s, color 0.1s' }}
                    >
                        العربية
                    </button>
                    <button
                        className={`mode-btn ${language === 'en' ? 'active' : ''}`}
                        onClick={() => setLanguage('en')}
                        style={{ transition: 'background-color 0.1s, color 0.1s' }}
                    >
                        English
                    </button>
                </div>
            </section>

            {/* Theme Selection */}
            <section className="card" style={{ marginBottom: 'var(--space-4)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h3 style={{ marginBottom: 'var(--space-1)' }}>
                            {isDark ? <MoonIcon /> : <SunIcon />} {t('settings.theme')}
                        </h3>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}>
                    <button
                        className={`btn btn-sm ${theme === THEMES.LIGHT ? 'btn-primary' : 'btn-outline'}`}
                        onClick={() => setTheme(THEMES.LIGHT)}
                    >
                        ☀️ {t('settings.lightMode')}
                    </button>
                    <button
                        className={`btn btn-sm ${theme === THEMES.DARK ? 'btn-primary' : 'btn-outline'}`}
                        onClick={() => setTheme(THEMES.DARK)}
                    >
                        🌙 {t('settings.darkMode')}
                    </button>
                    <button
                        className={`btn btn-sm ${theme === THEMES.SYSTEM ? 'btn-primary' : 'btn-outline'}`}
                        onClick={() => setTheme(THEMES.SYSTEM)}
                    >
                        💻 {t('settings.systemTheme')}
                    </button>
                </div>
            </section>

            {/* About */}
            <section className="card">
                <h3 style={{ marginBottom: 'var(--space-4)' }}>{t('settings.about')}</h3>
                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        fontSize: 'var(--font-size-4xl)',
                        color: 'var(--color-primary)',
                        fontWeight: 'bold',
                        marginBottom: 'var(--space-2)'
                    }}>
                        {t('appName')}
                    </div>
                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>
                        {t('appTagline')}
                    </p>
                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-tertiary)' }}>
                        {t('settings.version')} 1.0.0
                    </p>
                </div>
            </section>
        </div>
    )
}
