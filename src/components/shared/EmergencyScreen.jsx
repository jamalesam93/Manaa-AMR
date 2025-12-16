import { useApp } from '../../contexts/AppContext'

export default function EmergencyScreen() {
    const { emergencyCondition, dismissEmergency, t } = useApp()

    const handleDismiss = () => {
        if (window.confirm(t('emergency.dismiss') + '?')) {
            dismissEmergency()
        }
    }

    return (
        <div className="emergency-overlay" role="alert" aria-live="assertive">
            <svg className="emergency-icon" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <h1 className="emergency-title">
                {t('emergency.title')}
            </h1>

            <p className="emergency-message">
                {emergencyCondition || t('emergency.message')}
            </p>

            <a
                href="tel:191"
                className="emergency-call-btn"
                aria-label={t('emergency.callAmbulance')}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                {t('emergency.callAmbulance')}
            </a>

            <button
                onClick={handleDismiss}
                style={{
                    marginTop: '2rem',
                    background: 'transparent',
                    border: '2px solid rgba(255,255,255,0.5)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    fontSize: '0.875rem'
                }}
            >
                {t('emergency.dismiss')}
            </button>
        </div>
    )
}
