import { motion } from 'framer-motion'

const blobs = [
  'absolute -top-20 left-10 h-64 w-64 rounded-full bg-bloom-lavender/40 blur-3xl',
  'absolute top-10 right-16 h-72 w-72 rounded-full bg-bloom-peach/50 blur-3xl',
  'absolute bottom-10 left-1/3 h-80 w-80 rounded-full bg-bloom-sky/40 blur-3xl',
  'absolute bottom-20 right-1/4 h-64 w-64 rounded-full bg-bloom-mint/40 blur-3xl',
]

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {blobs.map((className, index) => (
        <motion.div
          key={className}
          className={`${className} animate-float`}
          animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      <div className="absolute inset-0 bg-white/20 dark:bg-black/10" />
    </div>
  )
}
