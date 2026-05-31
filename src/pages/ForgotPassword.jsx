import { Link } from 'react-router-dom'
import AuthShell from '../components/auth/AuthShell.jsx'

export default function ForgotPassword() {
  return (
    <AuthShell
      title="Reset gently"
      subtitle="We will send a quiet reset link so you can come back safely."
      quote="Pauses are productive when your mind needs room."
    >
      <div className="space-y-4">
        <div className="input-shell">
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent text-sm text-slate-700 outline-none dark:text-slate-200"
          />
        </div>
        <button type="button" className="glow-button w-full">
          Send reset link
        </button>
        <Link to="/login" className="text-xs font-semibold text-slate-600 dark:text-slate-200">
          Back to login
        </Link>
      </div>
    </AuthShell>
  )
}
