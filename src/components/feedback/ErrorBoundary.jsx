import React from 'react'

class ErrorBoundaryClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error }
    }

    componentDidCatch(error, errorInfo) {
        if (import.meta.env.DEV) {
            console.error('Error caught by boundary:', error, errorInfo)
        }
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null })
    }

    render() {
        if (this.state.hasError) {
            return <ErrorFallback error={this.state.error} onReset={this.handleReset} language={this.props.language} />
        }

        return this.props.children
    }
}

function ErrorFallback({ error, onReset, language }) {
    const isAr = language === 'ar'

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--space-6)',
            textAlign: 'center'
        }}>
            <div style={{ fontSize: '4rem', marginBottom: 'var(--space-4)' }}>⚠️</div>
            <h1 style={{ color: 'var(--color-danger)', marginBottom: 'var(--space-2)' }}>
                {isAr ? 'حدث خطأ' : 'Something went wrong'}
            </h1>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)', maxWidth: '400px' }}>
                {isAr 
                    ? 'نعتذر، حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.'
                    : 'We apologize, an unexpected error occurred. Please try again.'}
            </p>
            {process.env.NODE_ENV === 'development' && error && (
                <details style={{
                    marginBottom: 'var(--space-4)',
                    padding: 'var(--space-4)',
                    background: 'var(--color-surface-elevated)',
                    borderRadius: 'var(--radius-lg)',
                    maxWidth: '500px',
                    textAlign: 'left',
                    fontSize: 'var(--font-size-sm)'
                }}>
                    <summary style={{ cursor: 'pointer', marginBottom: 'var(--space-2)' }}>
                        {isAr ? 'تفاصيل الخطأ (للمطورين)' : 'Error Details (for developers)'}
                    </summary>
                    <pre style={{
                        overflow: 'auto',
                        color: 'var(--color-danger)',
                        fontSize: 'var(--font-size-xs)'
                    }}>
                        {error.toString()}
                    </pre>
                </details>
            )}
            <button
                className="btn btn-primary"
                onClick={onReset}
            >
                {isAr ? 'إعادة المحاولة' : 'Try Again'}
            </button>
        </div>
    )
}

export default function ErrorBoundary({ children, language = 'ar' }) {
    return (
        <ErrorBoundaryClass language={language}>
            {children}
        </ErrorBoundaryClass>
    )
}

