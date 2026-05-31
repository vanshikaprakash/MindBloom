import GlassCard from './GlassCard.jsx'

export default function QuoteCard({ quote, author }) {
  return (
    <GlassCard className="space-y-3">
      <p className="text-sm text-slate-700 dark:text-slate-200">“{quote}”</p>
      <p className="text-xs text-slate-500 dark:text-slate-400">{author}</p>
    </GlassCard>
  )
}
