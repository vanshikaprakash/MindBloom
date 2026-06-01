import { useState } from 'react'
import { Mic, Sparkles } from 'lucide-react'
import GlassCard from '../components/ui/GlassCard.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import MoodButton from '../components/ui/MoodButton.jsx'
import IntensitySlider from '../components/ui/IntensitySlider.jsx'
import { aiSuggestions, moods } from '../data/mockData.js'
import { getGeminiSuggestions } from '../lib/gemini.js'

export default function MoodCheckIn() {
  const [selectedMood, setSelectedMood] = useState(moods[1])
  const [intensity, setIntensity] = useState(65)
  const [notes, setNotes] = useState('')
  const [suggestions, setSuggestions] = useState(aiSuggestions)
  const [loading, setLoading] = useState(false)

const handleAISuggestions = async () => {
  setLoading(true)
  try {
    const response = await getGeminiSuggestions({
      mood: selectedMood.label,
      intensity,
      notes,
    })
    if (response) {
      // Strip markdown symbols and empty lines, keep meaningful lines only
      const cleaned = response
        .split('\n')
        .map((line) => line.replace(/[*#`]/g, '').replace(/^\d+\.\s*/, '').trim())
        .filter((line) => line.length > 10)
        .slice(0, 6)
      setSuggestions(cleaned)
    }
  } catch (error) {
    console.error('Gemini error:', error)
    setSuggestions(aiSuggestions)
  } finally {
    setLoading(false)
  }
}

  return (
    <section className="section-pad space-y-12">
      <SectionHeader
        eyebrow="Mood check-in"
        title="How are you really feeling?"
        description="Name the emotion, tune the intensity, and let MindBloom shape a soft plan."
      />

      <GlassCard className="space-y-6">
        <div className="grid gap-3 md:grid-cols-5">
          {moods.map((mood) => (
            <MoodButton
              key={mood.label}
              label={mood.label}
              color={mood.color}
              selected={selectedMood.label === mood.label}
              onClick={() => setSelectedMood(mood)}
            />
          ))}
        </div>
        <IntensitySlider value={intensity} onChange={setIntensity} />
        <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Journal prompt</p>
            <textarea
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              placeholder="What is sitting heavy today?"
              rows={5}
              className="w-full resize-none rounded-3xl border border-white/40 bg-white/70 p-4 text-sm text-slate-700 shadow-soft outline-none transition focus:border-bloom-lavender/70 focus:ring-2 focus:ring-bloom-lavender/20 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
            />
            <div className="flex flex-wrap items-center gap-3">
              <button type="button" className="input-shell gap-2">
                <Mic size={16} />
                Record voice note
              </button>
              <div className="flex flex-wrap gap-2">
                {['Study', 'Relationships', 'Sleep', 'Exams'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">AI support</p>
            <button
              type="button"
              onClick={handleAISuggestions}
              className="glow-button w-full"
            >
              {loading ? 'Generating...' : 'Get Gemini Suggestions'}
              <Sparkles size={16} />
            </button>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              {suggestions.map((item) => (
                <GlassCard key={item} className="text-sm">
                  {item}
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </GlassCard>
    </section>
  )
}
