import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import { AppProvider, useApp } from './contexts/AppContext'
import BottomNav from './components/layout/BottomNav'
import EmergencyScreen from './components/feedback/EmergencyScreen'
import ErrorBoundary from './components/feedback/ErrorBoundary'
import { setupKeyboardShortcuts } from './utils/keyboardShortcuts'

// Lazy load pages for code splitting
const WelcomePage = lazy(() => import('./pages/WelcomePage'))
const HomePage = lazy(() => import('./pages/HomePage'))
const SymptomsPage = lazy(() => import('./pages/SymptomsPage'))
const AwarenessPage = lazy(() => import('./pages/AwarenessPage'))
const MediaGalleryPage = lazy(() => import('./pages/MediaGalleryPage'))
const SettingsPage = lazy(() => import('./pages/SettingsPage'))
const AchievementGalleryPage = lazy(() => import('./pages/AchievementGalleryPage'))
const ProgressPage = lazy(() => import('./pages/ProgressPage'))

// Loading fallback component
function PageLoader() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '60vh',
      color: 'var(--color-primary)'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⏳</div>
        <div>Loading...</div>
      </div>
    </div>
  )
}

function AppContent() {
  const { welcomeShown, showEmergency, language } = useApp()
  const navigate = useNavigate()

  // Setup keyboard shortcuts
  useEffect(() => {
    return setupKeyboardShortcuts(navigate)
  }, [navigate])

  // Show welcome page if not yet shown
  if (!welcomeShown) {
    return (
      <ErrorBoundary language={language}>
        <Suspense fallback={<PageLoader />}>
          <WelcomePage />
        </Suspense>
      </ErrorBoundary>
    )
  }

  // Show emergency screen if triggered
  if (showEmergency) {
    return <EmergencyScreen />
  }

  return (
    <ErrorBoundary language={language}>
      <div className="app">
        <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<SymptomsPage />} />
          <Route path="/awareness" element={<AwarenessPage />} />
          <Route path="/media" element={<MediaGalleryPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/achievements" element={<AchievementGalleryPage />} />
          <Route path="/progress" element={<ProgressPage />} />
        </Routes>
        </Suspense>

        <BottomNav />
      </div>
    </ErrorBoundary>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </BrowserRouter>
  )
}

