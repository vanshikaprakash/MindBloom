import GlassCard from './GlassCard.jsx'

export default function StatCard({ label, value, note }) {
  return (
    <GlassCard className="space-y-2">
      <p className="text-sm text-slate-500 dark:text-slate-300">{label}</p>
      <p className="text-2xl font-semibold text-slate-900 dark:text-white">{value}</p>
      <p className="text-xs text-slate-500 dark:text-slate-400">{note}</p>
    </GlassCard>
  )
}
