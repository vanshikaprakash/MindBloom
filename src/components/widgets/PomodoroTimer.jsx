import { useEffect, useState } from 'react'
import GlassCard from '../ui/GlassCard.jsx'

export default function PomodoroTimer() {
  const [seconds, setSeconds] = useState(1500)
  const minutes = Math.floor(seconds / 60)
  const remaining = String(seconds % 60).padStart(2, '0')

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : prev))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <GlassCard className="space-y-3">
      <p className="text-sm font-semibold text-slate-900 dark:text-white">Pomodoro Focus</p>
      <div className="flex items-center justify-between">
        <p className="text-3xl font-semibold text-slate-900 dark:text-white">
          {minutes}:{remaining}
        </p>
        <button
          type="button"
          onClick={() => setSeconds(1500)}
          className="rounded-full border border-white/40 bg-white/80 px-4 py-1 text-xs font-semibold text-slate-700 shadow-soft transition hover:scale-105 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
        >
          Reset
        </button>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-300">
        Soft focus mode with ambient sound suggestions.
      </p>
    </GlassCard>
  )
}
