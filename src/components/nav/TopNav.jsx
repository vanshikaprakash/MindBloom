import { Link, NavLink } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme.js'

const navLinks = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/check-in', label: 'Check-In' },
  { to: '/calm', label: 'Calm Corner' },
  { to: '/community', label: 'Community' },
  { to: '/companion', label: 'AI Companion' },
]

export default function TopNav() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed top-0 z-40 w-full px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/40 bg-white/70 px-6 py-3 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-bloom-peach via-bloom-lavender to-bloom-sky" />
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">MindBloom</p>
            <p className="text-xs text-slate-500 dark:text-slate-300">Your cozy safe space</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 lg:flex dark:text-slate-200">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition hover:text-slate-900 dark:hover:text-white ${
                  isActive ? 'text-slate-900 dark:text-white' : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/login" className="hidden text-sm font-semibold text-slate-600 hover:text-slate-900 lg:inline dark:text-slate-200">
            Log in
          </Link>
          <button
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/70 text-slate-700 shadow-soft transition hover:scale-105 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link to="/signup" className="glow-button hidden lg:inline-flex">
            Start your check-in
          </Link>
        </div>
      </div>
    </header>
  )
}
