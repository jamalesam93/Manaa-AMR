import { useState } from 'react'
import { useApp } from '../../contexts/AppContext'

export default function MedicalDisclaimer() {
    const { acceptDisclaimer, t, language, setLanguage } = useApp()
    const [checked, setChecked] = useState(false)

    const handleAccept = () => {
        if (checked) {
            acceptDisclaimer()
        }
    }

    return (
        <div
            className="disclaimer-modal"
            style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem',
                zIndex: 500
            }}
        >
            <div
                className="card animate-slideUp"
                style={{
                    maxWidth: '400px',
                    width: '100%',
                    textAlign: 'center'
                }}
            >
                {/* Language Toggle */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 'var(--space-2)',
                    marginBottom: 'var(--space-4)'
                }}>
                    <button
                        className={`btn btn-sm ${language === 'ar' ? 'btn-primary' : 'btn-outline'}`}
                        onClick={() => setLanguage('ar')}
                    >
                        العربية
                    </button>
                    <button
                        className={`btn btn-sm ${language === 'en' ? 'btn-primary' : 'btn-outline'}`}
                        onClick={() => setLanguage('en')}
                    >
                        English
                    </button>
                </div>

                {/* Icon */}
                <div style={{ marginBottom: '1.5rem' }}>
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-primary)"
                        strokeWidth="1.5"
                        style={{ margin: '0 auto' }}
                    >
                        <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                {/* Title */}
                <h2 style={{
                    fontSize: 'var(--font-size-xl)',
                    marginBottom: 'var(--space-4)',
                    color: 'var(--color-text-primary)'
                }}>
                    {t('disclaimer.title')}
                </h2>

                {/* Content */}
                <div style={{
                    textAlign: language === 'ar' ? 'right' : 'left',
                    marginBottom: 'var(--space-6)',
                    lineHeight: '1.8'
                }}>
                    <p style={{ marginBottom: 'var(--space-4)', color: 'var(--color-text-secondary)' }}>
                        {t('disclaimer.welcome')}
                    </p>

                    <div className="disclaimer-banner" style={{ marginBottom: 'var(--space-4)' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{t('disclaimer.warning')}</span>
                    </div>

                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        color: 'var(--color-text-secondary)',
                        fontSize: 'var(--font-size-sm)'
                    }}>
                        {t('disclaimer.points').map((point, index) => (
                            <li
                                key={index}
                                style={{
                                    marginBottom: 'var(--space-2)',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 'var(--space-2)'
                                }}
                            >
                                <span style={{ color: index === 3 ? 'var(--color-danger)' : 'var(--color-primary)' }}>•</span>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Checkbox */}
                <label
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-3)',
                        marginBottom: 'var(--space-6)',
                        cursor: 'pointer',
                        fontSize: 'var(--font-size-sm)'
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                        style={{
                            width: '20px',
                            height: '20px',
                            accentColor: 'var(--color-primary)'
                        }}
                    />
                    <span>{t('disclaimer.checkbox')}</span>
                </label>

                {/* Accept Button */}
                <button
                    className="btn btn-primary btn-lg"
                    onClick={handleAccept}
                    disabled={!checked}
                    style={{ width: '100%' }}
                >
                    {t('disclaimer.accept')}
                </button>
            </div>
        </div>
    )
}

// Footer disclaimer component
export function DisclaimerFooter() {
    const { t } = useApp()

    return (
        <footer className="disclaimer-footer">
            <p>
                ⚕️ {t('disclaimer.warning')}
            </p>
        </footer>
    )
}
