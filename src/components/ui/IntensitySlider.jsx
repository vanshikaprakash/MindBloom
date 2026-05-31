import { useMemo } from 'react'

const emojis = ['🙂', '😌', '😐', '😟', '😭']

export default function IntensitySlider({ value, onChange }) {
  const gradient = useMemo(() => {
    const percent = (value / 100) * 100
    return `linear-gradient(90deg, #bff0df ${percent}%, rgba(255,255,255,0.4) ${percent}%)`
  }, [value])

  const emojiIndex = Math.min(emojis.length - 1, Math.floor(value / 25))

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm">
        <p className="text-slate-500 dark:text-slate-300">Emotion intensity</p>
        <span className="text-2xl">{emojis[emojiIndex]}</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-3 w-full cursor-pointer appearance-none rounded-full bg-white/40"
        style={{ background: gradient }}
      />
    </div>
  )
}
