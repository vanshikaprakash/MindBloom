import { useState } from 'react'
import { getGeminiSuggestions } from '../lib/gemini.js'
import { Send } from 'lucide-react'
import GlassCard from '../components/ui/GlassCard.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import BreathingWidget from '../components/widgets/BreathingWidget.jsx'
import TypingDots from '../components/widgets/TypingDots.jsx'

const starterMessages = [
  { from: 'bot', text: 'Hey, I am here. Want to share what is heavy?' },
  { from: 'user', text: 'I feel anxious about exams and everything piling up.' },
  { from: 'bot', text: 'That sounds exhausting. Let us try one tiny reset together.' },
]

const quickPrompts = [
  'Plan a gentle study sprint',
  'Give me a grounding exercise',
  'Help me calm racing thoughts',
]

export default function ChatCompanion() {
  const [messages, setMessages] = useState(starterMessages)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

const sendMessage = async (text) => {
  const messageText = text || input
  if (!messageText.trim()) return

  setMessages((prev) => [...prev, { from: 'user', text: messageText }])
  setInput('')
  setIsTyping(true)

  try {
    const response = await getGeminiSuggestions({
      mood: 'general',
      intensity: 50,
      notes: messageText,
    })

    setMessages((prev) => [
      ...prev,
      {
        from: 'bot',
        text: response
          ? response.split('\n').find((l) => l.trim().length > 20)?.replace(/[*#`]/g, '').trim()
            ?? response.slice(0, 300)
          : 'I hear you. Take a breath — you are not alone in this.',
      },
    ])
  } catch {
    setMessages((prev) => [
      ...prev,
      { from: 'bot', text: 'Something went quiet on my end. But I am still here.' },
    ])
  } finally {
    setIsTyping(false)
  }
}

  return (
    <section className="section-pad space-y-12">
      <SectionHeader
        eyebrow="AI companion"
        title="An emotionally safe chat space"
        description="Mood-aware replies, calming prompts, and practical support when it is late and heavy."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <GlassCard className="flex h-[520px] flex-col justify-between">
          <div className="space-y-4 overflow-y-auto pr-2">
            {messages.map((message, index) => (
              <div
                key={`${message.text}-${index}`}
                className={`max-w-[80%] rounded-3xl px-4 py-3 text-sm ${
                  message.from === 'user'
                    ? 'ml-auto bg-bloom-lavender/60 text-slate-900'
                    : 'bg-white/80 text-slate-700 dark:bg-white/10 dark:text-slate-200'
                }`}
              >
                {message.text}
              </div>
            ))}
            {isTyping ? (
              <div className="max-w-[50%] rounded-3xl bg-white/80 px-4 py-3 dark:bg-white/10">
                <TypingDots />
              </div>
            ) : null}
          </div>
          <div className="mt-4 flex items-center gap-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type your thoughts"
              className="w-full rounded-2xl border border-white/40 bg-white/70 px-4 py-3 text-sm text-slate-700 outline-none dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
            />
            <button type="button" className="glow-button px-4" onClick={sendMessage}>
              <Send size={16} />
            </button>
          </div>
        </GlassCard>

        <div className="space-y-4">
          <GlassCard className="space-y-3">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Quick prompts</p>
            <div className="flex flex-col gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  className="rounded-2xl bg-white/70 px-4 py-2 text-left text-xs text-slate-600 shadow-soft transition hover:scale-[1.02] dark:bg-white/10 dark:text-slate-200"
                  onClick={() => sendMessage(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </GlassCard>
          <BreathingWidget />
          <GlassCard className="space-y-2">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Emergency support</p>
            <p className="text-xs text-slate-500 dark:text-slate-300">
              If you feel unsafe, use the emergency page for helplines and grounding support.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
