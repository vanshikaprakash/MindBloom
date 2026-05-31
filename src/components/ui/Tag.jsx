export default function Tag({ label, color = 'bg-bloom-lavender/40 text-slate-700' }) {
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${color}`}>
      {label}
    </span>
  )
}
