import { useState } from 'react'
import GlassCard from '../components/ui/GlassCard.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import PomodoroTimer from '../components/widgets/PomodoroTimer.jsx'
import ProgressRing from '../components/widgets/ProgressRing.jsx'
import { focusThemes } from '../data/mockData.js'

export default function FocusMode() {
  const [theme, setTheme] = useState(focusThemes[0])

  return (
    <section className="section-pad space-y-12">
      <SectionHeader
        eyebrow="Focus mode"
        title="Distraction-free, soft productivity"
        description="Ambient visuals, a gentle timer, and your next calm task."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <GlassCard className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Ambient theme</p>
            <span className="rounded-full bg-bloom-sky/60 px-3 py-1 text-xs text-slate-700">
              {theme}
            </span>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {focusThemes.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setTheme(item)}
                className={`rounded-2xl border px-3 py-2 text-xs font-semibold transition ${
                  theme === item
                    ? 'border-white/60 bg-white/80 text-slate-900'
                    : 'border-white/30 bg-white/60 text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-200'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="h-44 rounded-3xl bg-gradient-to-br from-bloom-navy via-bloom-lavender to-bloom-sky shadow-glow" />
          <button type="button" className="glow-button w-full">
            Enter fullscreen study mode
          </button>
        </GlassCard>

        <div className="space-y-6">
          <PomodoroTimer />
          <GlassCard className="space-y-3">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Today’s focus list</p>
            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-bloom-lavender" />
                Revise Data Structures notes
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-bloom-lavender" />
                Placement prep: 2 mock questions
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-bloom-lavender" />
                Submit lab report
              </label>
            </div>
          </GlassCard>
          <ProgressRing label="Focus energy" value={66} />
        </div>
      </div>
    </section>
  )
}
