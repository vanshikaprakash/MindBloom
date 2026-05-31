import Background from './Background.jsx'
import TopNav from '../nav/TopNav.jsx'
import DockNav from '../nav/DockNav.jsx'
import Footer from '../shared/Footer.jsx'

export default function AppLayout({ children }) {
  return (
    <div className="relative min-h-screen pb-24">
      <Background />
      <TopNav />
      <main className="pt-28">{children}</main>
      <DockNav />
      <Footer />
    </div>
  )
}
