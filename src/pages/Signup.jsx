import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthShell from '../components/auth/AuthShell.jsx'

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <AuthShell
      title="Create your cozy space"
      subtitle="Build a profile that tracks your moods, routines, and soft wins."
      quote="You are allowed to grow at your own pace."
    >
      <div className="space-y-4">
        <div className="input-shell">
          <input
            type="text"
            placeholder="Full name"
            className="w-full bg-transparent text-sm text-slate-700 outline-none dark:text-slate-200"
          />
        </div>
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
        <button type="button" className="glow-button w-full">
          Create account
        </button>
      </div>
      <div className="space-y-3 text-center text-xs text-slate-500">
        <p>or sign up with</p>
        <div className="flex gap-3">
          <button type="button" className="input-shell flex-1 justify-center">
            Google
          </button>
          <button type="button" className="input-shell flex-1 justify-center">
            Apple
          </button>
        </div>
        <p>
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-slate-700 dark:text-slate-200">
            Log in
          </Link>
        </p>
      </div>
    </AuthShell>
  )
}
