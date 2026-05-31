import { NavLink } from 'react-router-dom'
import { Home, Smile, Sparkles, Users, MessageCircle } from 'lucide-react'

const dockLinks = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/check-in', label: 'Check-In', icon: Smile },
  { to: '/calm', label: 'Calm', icon: Sparkles },
  { to: '/community', label: 'Community', icon: Users },
  { to: '/companion', label: 'Chat', icon: MessageCircle },
]

export default function DockNav() {
  return (
    <div className="fixed bottom-20 left-1/2 z-30 -translate-x-1/2">
      <div className="flex items-center gap-4 rounded-full border border-white/40 bg-white/70 px-6 py-3 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
        {dockLinks.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 text-[11px] font-semibold transition ${
                isActive
                  ? 'text-slate-900 dark:text-white'
                  : 'text-slate-500 dark:text-slate-300'
              }`
            }
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-soft dark:bg-white/10">
              <Icon size={18} />
            </span>
            {label}
          </NavLink>
        ))}
      </div>
    </div>
  )
}
