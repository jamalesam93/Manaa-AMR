// Keyboard shortcuts for navigation and actions

export function setupKeyboardShortcuts(navigate) {
    const handleKeyPress = (e) => {
        // Don't trigger if user is typing in an input/textarea
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) {
            return
        }

        // Alt/Cmd + Number for navigation
        if ((e.altKey || e.metaKey) && !e.shiftKey && !e.ctrlKey) {
            const key = e.key
            switch (key) {
                case '1':
                    e.preventDefault()
                    navigate('/')
                    break
                case '2':
                    e.preventDefault()
                    navigate('/quiz')
                    break
                case '3':
                    e.preventDefault()
                    navigate('/awareness')
                    break
                case '4':
                    e.preventDefault()
                    navigate('/media')
                    break
                case '5':
                    e.preventDefault()
                    navigate('/settings')
                    break
            }
        }

        // Escape to go back
        if (e.key === 'Escape' && window.history.length > 1) {
            // Only go back if not on home page
            if (window.location.pathname !== '/') {
                window.history.back()
            }
        }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
        window.removeEventListener('keydown', handleKeyPress)
    }
}

