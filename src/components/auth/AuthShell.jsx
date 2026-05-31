import GlassCard from '../ui/GlassCard.jsx'

export default function AuthShell({ title, subtitle, quote, children }) {
  return (
    <section className="section-pad">
      <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <span className="pill">MindBloom</span>
          <h1 className="text-4xl font-semibold md:text-5xl">{title}</h1>
          <p className="text-sm text-slate-600 dark:text-slate-300">{subtitle}</p>
          <GlassCard className="space-y-2">
            <p className="text-sm text-slate-700 dark:text-slate-200">“{quote}”</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Daily reminder</p>
          </GlassCard>
        </div>
        <GlassCard className="space-y-6">
          {children}
        </GlassCard>
      </div>
    </section>
  )
}
