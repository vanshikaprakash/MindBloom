import { motion } from 'framer-motion'
import GlassCard from '../ui/GlassCard.jsx'

export default function BreathingWidget() {
  return (
    <GlassCard className="flex items-center justify-between">
      <div>
        <p className="text-sm font-semibold text-slate-900 dark:text-white">Calm breathing</p>
        <p className="text-xs text-slate-500 dark:text-slate-300">
          Inhale 4 • Hold 4 • Exhale 6
        </p>
      </div>
      <motion.div
        className="h-12 w-12 rounded-full bg-bloom-lavender/60"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </GlassCard>
  )
}
