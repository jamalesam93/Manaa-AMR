import { useState, useEffect } from 'react'

export default function Toast() {
    const [toast, setToast] = useState(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleShowToast = (event) => {
            const { message, type, duration } = event.detail
            setToast({ message, type, duration })
            setIsVisible(true)

            // Auto hide
            setTimeout(() => {
                setIsVisible(false)
                setTimeout(() => setToast(null), 300)
            }, duration || 3000)
        }

        window.addEventListener('show-toast', handleShowToast)
        return () => window.removeEventListener('show-toast', handleShowToast)
    }, [])

    if (!toast) return null

    const getBackgroundColor = () => {
        switch (toast.type) {
            case 'success': return 'linear-gradient(135deg, var(--color-success) 0%, var(--color-success-dark) 100%)'
            case 'error': return 'linear-gradient(135deg, var(--color-danger) 0%, #A54040 100%)'
            case 'warning': return 'linear-gradient(135deg, var(--color-warning) 0%, var(--color-secondary-dark) 100%)'
            default: return 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)'
        }
    }

    const getIcon = () => {
        switch (toast.type) {
            case 'success': return '✅'
            case 'error': return '❌'
            case 'warning': return '⚠️'
            default: return 'ℹ️'
        }
    }

    return (
        <div
            style={{
                position: 'fixed',
                bottom: 'var(--space-20, 100px)',
                left: '50%',
                transform: isVisible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(100px)',
                opacity: isVisible ? 1 : 0,
                zIndex: 1000,
                background: getBackgroundColor(),
                color: 'white',
                padding: 'var(--space-3) var(--space-6)',
                borderRadius: 'var(--radius-full)',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                maxWidth: '90%',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                pointerEvents: 'none',
                fontWeight: 'var(--font-weight-medium)',
                fontSize: 'var(--font-size-sm)'
            }}
        >
            <span>{getIcon()}</span>
            <span>{toast.message}</span>
        </div>
    )
}
