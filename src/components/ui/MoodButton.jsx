import { motion } from 'framer-motion'

export default function MoodButton({ label, color, selected, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`flex items-center justify-center rounded-3xl border px-4 py-3 text-sm font-semibold transition ${
        selected
          ? 'border-white/60 bg-white/80 text-slate-900 shadow-glow dark:bg-white/10 dark:text-white'
          : 'border-white/40 bg-white/60 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200'
      }`}
      style={{ boxShadow: selected ? `0 0 30px -10px ${color}` : 'none' }}
    >
      <span className="mr-2 inline-flex h-3 w-3 rounded-full" style={{ background: color }} />
      {label}
    </motion.button>
  )
}
