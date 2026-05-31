import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthShell from '../components/auth/AuthShell.jsx'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Pick up your check-in, your streak, and your calm corner in one place."
      quote="You do not have to do it all today. Just one kind step is enough."
    >
      <div className="space-y-4">
        <div className="input-shell">
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent text-sm text-slate-700 outline-none dark:text-slate-200"
          />
        </div>
        <div className="input-shell">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full bg-transparent text-sm text-slate-700 outline-none dark:text-slate-200"
          />
          <button
            type="button"
            onClick={() => setShowPassword((value) => !value)}
            className="text-xs font-semibold text-slate-500"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <div className="flex items-center justify-between text-xs text-slate-500">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-bloom-lavender" />
            Remember me
          </label>
          <Link to="/forgot" className="font-semibold text-slate-700 dark:text-slate-200">
            Forgot password
          </Link>
        </div>
        <button type="button" className="glow-button w-full">
          Log in
        </button>
      </div>
      <div className="space-y-3 text-center text-xs text-slate-500">
        <p>or continue with</p>
        <div className="flex gap-3">
          <button type="button" className="input-shell flex-1 justify-center">
            Google
          </button>
          <button type="button" className="input-shell flex-1 justify-center">
            Apple
          </button>
        </div>
        <p>
          New here?{' '}
          <Link to="/signup" className="font-semibold text-slate-700 dark:text-slate-200">
            Create an account
          </Link>
        </p>
      </div>
    </AuthShell>
  )
}
