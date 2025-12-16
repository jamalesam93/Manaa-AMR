import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider, useApp } from './contexts/AppContext'
import BottomNav from './components/shared/BottomNav'
import EmergencyScreen from './components/shared/EmergencyScreen'

// Page imports
import WelcomePage from './pages/WelcomePage'
import HomePage from './pages/HomePage'
import SymptomsPage from './pages/SymptomsPage'
import AwarenessPage from './pages/AwarenessPage'
import MediaGalleryPage from './pages/MediaGalleryPage'
import SettingsPage from './pages/SettingsPage'

function AppContent() {
  const { welcomeShown, showEmergency } = useApp()

  // Show welcome page if not yet shown
  if (!welcomeShown) {
    return <WelcomePage />
  }

  // Show emergency screen if triggered
  if (showEmergency) {
    return <EmergencyScreen />
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<SymptomsPage />} />
        <Route path="/awareness" element={<AwarenessPage />} />
        <Route path="/media" element={<MediaGalleryPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>

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
