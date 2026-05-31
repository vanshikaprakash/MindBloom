import GlassCard from '../components/ui/GlassCard.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'

const themes = [
  'Lavender Night',
  'Matcha Calm',
  'Sunset Therapy',
  'Midnight Focus',
  'Soft Sky',
]

export default function Profile() {
  return (
    <section className="section-pad space-y-12">
      <SectionHeader
        eyebrow="Profile"
        title="Personalize your safe space"
        description="Themes, avatars, bookmarks, and emotional history in one place."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <GlassCard className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-bloom-lavender to-bloom-sky" />
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Vanshika</p>
              <p className="text-xs text-slate-500 dark:text-slate-300">23SCSE • Wellness streak 12</p>
            </div>
          </div>
          <button type="button" className="glow-button w-full">
            Update avatar
          </button>
          <div className="space-y-2 text-xs text-slate-500 dark:text-slate-300">
            <p>Emotional history: 42 check-ins</p>
            <p>Bookmarks saved: 18 resources</p>
          </div>
        </GlassCard>

        <GlassCard className="space-y-4">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Theme palettes</p>
          <div className="grid gap-3 md:grid-cols-2">
            {themes.map((theme) => (
              <button
                key={theme}
                type="button"
                className="rounded-2xl border border-white/30 bg-white/70 px-3 py-2 text-xs font-semibold text-slate-700 shadow-soft transition hover:scale-[1.02] dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
              >
                {theme}
              </button>
            ))}
          </div>
          <button type="button" className="rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200">
            Export journal entries
          </button>
        </GlassCard>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <GlassCard className="space-y-2">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Late-night comfort mode</p>
          <p className="text-xs text-slate-500 dark:text-slate-300">
            Automatically dim UI and surface grounding prompts after 11 PM.
          </p>
        </GlassCard>
        <GlassCard className="space-y-2">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Calming notifications</p>
          <p className="text-xs text-slate-500 dark:text-slate-300">
            Gentle reminders for hydration, breaks, and self-affirmations.
          </p>
        </GlassCard>
        <GlassCard className="space-y-2">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Emotional analytics</p>
          <p className="text-xs text-slate-500 dark:text-slate-300">
            Track patterns across stress, energy, and focus weekly.
          </p>
        </GlassCard>
      </div>
    </section>
  )
}
