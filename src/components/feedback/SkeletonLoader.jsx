// Skeleton loading components for better UX

export function CardSkeleton() {
    return (
        <div className="card" style={{
            animation: 'pulse 1.5s ease-in-out infinite'
        }}>
            <div style={{
                height: '20px',
                width: '60%',
                background: 'var(--color-border)',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--space-3)'
            }} />
            <div style={{
                height: '16px',
                width: '100%',
                background: 'var(--color-border)',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--space-2)'
            }} />
            <div style={{
                height: '16px',
                width: '80%',
                background: 'var(--color-border)',
                borderRadius: 'var(--radius-md)'
            }} />
        </div>
    )
}

export function QuizQuestionSkeleton() {
    return (
        <div className="animate-fadeIn">
            {/* Progress skeleton */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 'var(--space-4)'
            }}>
                <div style={{
                    width: '60px',
                    height: '24px',
                    background: 'var(--color-border)',
                    borderRadius: 'var(--radius-full)'
                }} />
                <div style={{
                    flex: 1,
                    height: '8px',
                    background: 'var(--color-border)',
                    borderRadius: 'var(--radius-full)',
                    marginInlineStart: 'var(--space-3)'
                }} />
            </div>

            {/* Scenario card skeleton */}
            <div className="card" style={{
                marginBottom: 'var(--space-4)',
                minHeight: '120px'
            }}>
                <div style={{
                    height: '40px',
                    width: '40px',
                    background: 'var(--color-border)',
                    borderRadius: '50%',
                    margin: '0 auto var(--space-3)'
                }} />
                <div style={{
                    height: '20px',
                    width: '90%',
                    background: 'var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    margin: '0 auto var(--space-2)'
                }} />
                <div style={{
                    height: '16px',
                    width: '85%',
                    background: 'var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    margin: '0 auto'
                }} />
            </div>

            {/* Options skeleton */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)',
                marginBottom: 'var(--space-4)'
            }}>
                {[1, 2, 3, 4].map(i => (
                    <div
                        key={i}
                        className="card"
                        style={{
                            height: '60px',
                            background: 'var(--color-surface-elevated)'
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export function StatsSkeleton() {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--space-4)',
            marginBottom: 'var(--space-4)'
        }}>
            {[1, 2, 3, 4].map(i => (
                <div
                    key={i}
                    className="card"
                    style={{
                        textAlign: 'center',
                        minHeight: '100px'
                    }}
                >
                    <div style={{
                        height: '32px',
                        width: '60%',
                        background: 'var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        margin: '0 auto var(--space-2)'
                    }} />
                    <div style={{
                        height: '16px',
                        width: '80%',
                        background: 'var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        margin: '0 auto'
                    }} />
                </div>
            ))}
        </div>
    )
}

// Add pulse animation to CSS if not already present
const style = document.createElement('style')
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }
`
if (!document.querySelector('style[data-skeleton]')) {
    style.setAttribute('data-skeleton', 'true')
    document.head.appendChild(style)
}

