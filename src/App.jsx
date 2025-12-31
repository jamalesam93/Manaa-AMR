import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { AppProvider, useApp } from './contexts/AppContext'
import BottomNav from './components/layout/BottomNav'
import EmergencyScreen from './components/feedback/EmergencyScreen'

// Lazy load pages for code splitting
const WelcomePage = lazy(() => import('./pages/WelcomePage'))
const HomePage = lazy(() => import('./pages/HomePage'))
const SymptomsPage = lazy(() => import('./pages/SymptomsPage'))
const AwarenessPage = lazy(() => import('./pages/AwarenessPage'))
const MediaGalleryPage = lazy(() => import('./pages/MediaGalleryPage'))
const SettingsPage = lazy(() => import('./pages/SettingsPage'))

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
  const { welcomeShown, showEmergency } = useApp()

  // Show welcome page if not yet shown
  if (!welcomeShown) {
    return (
      <Suspense fallback={<PageLoader />}>
        <WelcomePage />
      </Suspense>
    )
  }

  // Show emergency screen if triggered
  if (showEmergency) {
    return <EmergencyScreen />
  }

  return (
    <div className="app">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<SymptomsPage />} />
          <Route path="/awareness" element={<AwarenessPage />} />
          <Route path="/media" element={<MediaGalleryPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Suspense>

      <BottomNav />
    </div>
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

