export default function ProgressRing({ label, value }) {
  return (
    <div className="flex items-center gap-4">
      <div className="relative h-16 w-16">
        <svg viewBox="0 0 36 36" className="h-16 w-16">
          <path
            className="stroke-white/40"
            strokeWidth="4"
            fill="none"
            d="M18 2 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32"
          />
          <path
            className="stroke-bloom-lavender"
            strokeWidth="4"
            strokeDasharray={`${value}, 100`}
            strokeLinecap="round"
            fill="none"
            d="M18 2 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-slate-700 dark:text-slate-200">
          {value}%
        </span>
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-900 dark:text-white">{label}</p>
        <p className="text-xs text-slate-500 dark:text-slate-300">Daily progress</p>
      </div>
    </div>
  )
}
