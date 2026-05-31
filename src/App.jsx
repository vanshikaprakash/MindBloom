import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout.jsx'
import Landing from './pages/Landing.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import MoodCheckIn from './pages/MoodCheckIn.jsx'
import Dashboard from './pages/Dashboard.jsx'
import CalmCorner from './pages/CalmCorner.jsx'
import Community from './pages/Community.jsx'
import ChatCompanion from './pages/ChatCompanion.jsx'
import FocusMode from './pages/FocusMode.jsx'
import Profile from './pages/Profile.jsx'
import Emergency from './pages/Emergency.jsx'

const pageTransition = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25 } },
}

function PageWrapper({ children }) {
  return (
    <motion.div {...pageTransition} className="min-h-screen">
      {children}
    </motion.div>
  )
}

function App() {
  const location = useLocation()

  return (
    <AppLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Landing /></PageWrapper>} />
          <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
          <Route path="/signup" element={<PageWrapper><Signup /></PageWrapper>} />
          <Route path="/forgot" element={<PageWrapper><ForgotPassword /></PageWrapper>} />
          <Route path="/check-in" element={<PageWrapper><MoodCheckIn /></PageWrapper>} />
          <Route path="/dashboard" element={<PageWrapper><Dashboard /></PageWrapper>} />
          <Route path="/calm" element={<PageWrapper><CalmCorner /></PageWrapper>} />
          <Route path="/community" element={<PageWrapper><Community /></PageWrapper>} />
          <Route path="/companion" element={<PageWrapper><ChatCompanion /></PageWrapper>} />
          <Route path="/focus" element={<PageWrapper><FocusMode /></PageWrapper>} />
          <Route path="/profile" element={<PageWrapper><Profile /></PageWrapper>} />
          <Route path="/emergency" element={<PageWrapper><Emergency /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </AppLayout>
  )
}

export default App
