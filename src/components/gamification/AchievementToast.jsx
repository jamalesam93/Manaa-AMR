// Achievement unlock notification component

import { useEffect, useState } from 'react'

export default function AchievementToast({ achievement, onClose, language }) {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
            setTimeout(onClose, 300) // Wait for fade out
        }, 4000)

        return () => clearTimeout(timer)
    }, [onClose])

    if (!achievement) return null

    return (
        <div
            style={{
                position: 'fixed',
                top: 'var(--space-4)',
                left: '50%',
                transform: isVisible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-100px)',
                zIndex: 1000,
                background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
                color: 'white',
                padding: 'var(--space-4) var(--space-6)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-xl)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-4)',
                maxWidth: '90%',
                transition: 'transform 0.3s ease',
                animation: 'slideDown 0.3s ease'
            }}
        >
            <div style={{ fontSize: '3rem' }}>{achievement.icon}</div>
            <div style={{ flex: 1 }}>
                <div style={{
                    fontSize: 'var(--font-size-sm)',
                    opacity: 0.9,
                    marginBottom: 'var(--space-1)'
                }}>
                    {language === 'ar' ? 'إنجاز جديد!' : 'New Achievement!'}
                </div>
                <div style={{
                    fontSize: 'var(--font-size-lg)',
                    fontWeight: 'bold',
                    marginBottom: 'var(--space-1)'
                }}>
                    {achievement.name}
                </div>
                <div style={{
                    fontSize: 'var(--font-size-sm)',
                    opacity: 0.9
                }}>
                    {achievement.description}
                </div>
            </div>
            <button
                onClick={() => {
                    setIsVisible(false)
                    setTimeout(onClose, 300)
                }}
                style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: 'none',
                    color: 'white',
                    fontSize: 'var(--font-size-xl)',
                    cursor: 'pointer',
                    padding: 'var(--space-2)',
                    borderRadius: 'var(--radius-md)',
                    lineHeight: 1
                }}
            >
                ×
            </button>
        </div>
    )
}

// Add animation to CSS
const style = document.createElement('style')
style.textContent = `
    @keyframes slideDown {
        from {
            transform: translateX(-50%) translateY(-100px);
        }
        to {
            transform: translateX(-50%) translateY(0);
        }
    }
`
if (!document.querySelector('style[data-achievement-toast]')) {
    style.setAttribute('data-achievement-toast', 'true')
    document.head.appendChild(style)
}

