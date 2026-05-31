import GlassCard from './GlassCard.jsx'

export default function TestimonialCard({ quote, name, major }) {
  return (
    <GlassCard className="space-y-4">
      <p className="text-sm text-slate-600 dark:text-slate-300">“{quote}”</p>
      <div>
        <p className="text-sm font-semibold text-slate-900 dark:text-white">{name}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">{major}</p>
      </div>
    </GlassCard>
  )
}
