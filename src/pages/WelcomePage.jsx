import { useApp } from '../contexts/AppContext'

export default function WelcomePage() {
    const { language, setLanguage, t, markWelcomeShown } = useApp()

    const handleEnter = () => {
        markWelcomeShown()
    }

    const toggleLanguage = () => {
        setLanguage(language === 'ar' ? 'en' : 'ar')
    }

    return (
        <div className="welcome-page">
            {/* Decorative background elements */}
            <div className="welcome-bg-pattern"></div>

            {/* Language Switcher */}
            <div className="welcome-lang-switcher">
                <button
                    className={`lang-btn ${language === 'ar' ? 'active' : ''}`}
                    onClick={() => setLanguage('ar')}
                    aria-label="العربية"
                >
                    العربية
                </button>
                <button
                    className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                    onClick={() => setLanguage('en')}
                    aria-label="English"
                >
                    English
                </button>
            </div>

            {/* Main Content */}
            <div className="welcome-content">
                {/* App Logo/Icon */}
                <div className="welcome-logo">
                    <svg viewBox="0 0 100 100" className="welcome-icon">
                        <defs>
                            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="var(--color-primary)" />
                                <stop offset="100%" stopColor="var(--color-primary-dark)" />
                            </linearGradient>
                        </defs>
                        <circle cx="50" cy="50" r="45" fill="url(#logoGradient)" opacity="0.1" />
                        <circle cx="50" cy="50" r="35" fill="url(#logoGradient)" opacity="0.2" />
                        <circle cx="50" cy="50" r="25" fill="url(#logoGradient)" />
                        {/* Shield/Protection symbol */}
                        <path
                            d="M50 20 L70 30 L70 50 C70 65 50 80 50 80 C50 80 30 65 30 50 L30 30 Z"
                            fill="none"
                            stroke="var(--color-surface)"
                            strokeWidth="2"
                            opacity="0.9"
                        />
                        <path
                            d="M42 50 L48 56 L58 44"
                            fill="none"
                            stroke="var(--color-surface)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                {/* App Name */}
                <h1 className="welcome-title">
                    {language === 'ar' ? 'مناعة' : "Mana'a"}
                </h1>

                {/* Tagline */}
                <p className="welcome-tagline">
                    {t('appTagline')}
                </p>
            </div>

            {/* Enter Button */}
            <button
                className="welcome-enter-btn"
                onClick={handleEnter}
            >
                <span>{t('welcome.enter')}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    )
}
