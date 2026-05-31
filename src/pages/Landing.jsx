import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import GlassCard from '../components/ui/GlassCard.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import StatCard from '../components/ui/StatCard.jsx'
import TestimonialCard from '../components/ui/TestimonialCard.jsx'
import QuoteCard from '../components/ui/QuoteCard.jsx'
import { features, stats, testimonials } from '../data/mockData.js'

const floatingWidgets = [
  'Night reset ritual',
  '2-minute grounding',
  'Focus playlist: soft rain',
]

export default function Landing() {
  return (
    <div className="space-y-20">
      <section className="section-pad">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <span className="pill">MindBloom</span>
            <h1 className="text-4xl font-semibold md:text-6xl">
              Your safe space on the internet.
            </h1>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Check in with your feelings, get AI-powered support, explore calming resources, and
              connect with students who get it.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/check-in" className="glow-button">
                Start Your Check-In
              </Link>
              <Link
                to="/calm"
                className="rounded-full border border-white/40 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 shadow-soft transition hover:scale-105 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
              >
                Explore Calm Corner
              </Link>
            </div>
            <div className="flex flex-wrap gap-3">
              {floatingWidgets.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/70 px-4 py-2 text-xs font-semibold text-slate-600 shadow-soft dark:bg-white/10 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <motion.div
              className="glass-card space-y-5 p-6"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Late-night comfort check
                </p>
                <span className="rounded-full bg-bloom-mint/70 px-3 py-1 text-xs font-semibold text-slate-700">
                  Live
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500">Mood</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Overwhelmed</p>
                </div>
                <div className="h-2 rounded-full bg-white/50">
                  <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-bloom-pink to-bloom-lavender" />
                </div>
              </div>
              <div className="rounded-2xl bg-white/70 p-4 text-xs text-slate-600 dark:bg-white/10 dark:text-slate-200">
                “Try the 3-tab reset. Close extras, silence your phone, and do one tiny task.”
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-bloom-sky/70" />
                <div>
                  <p className="text-xs font-semibold text-slate-900 dark:text-white">BloomBot</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-300">Always here</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -left-6 hidden rounded-3xl border border-white/40 bg-white/60 px-5 py-4 text-xs text-slate-600 shadow-soft backdrop-blur-xl lg:block dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              Mood emojis gently pulse
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <SectionHeader
          eyebrow="Features"
          title="A cozy mix of clarity, support, and focus"
          description="MindBloom blends emotional care with practical study support so you can breathe, plan, and keep going."/>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <GlassCard key={feature.title} className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <SectionHeader
          eyebrow="Why students love MindBloom"
          title="A late-night comfort app that gets it"
          description="A supportive best friend vibe with a Notion-meets-Pinterest aesthetic."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>

      <section className="section-pad">
        <SectionHeader
          eyebrow="Mental wellness stats"
          title="Small shifts, measurable relief"
          description="MindBloom tracks emotional wins and tiny actions that build momentum."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <SectionHeader
              eyebrow="AI support"
              title="Emotionally intelligent, never robotic"
              description="MindBloom uses Gemini-powered suggestions that sound human and feel doable."
            />
            <div className="grid gap-4 md:grid-cols-2">
              <QuoteCard
                quote="Your brain feels crowded. Let’s do a 10-minute reset and choose one task to finish."
                author="BloomBot"
              />
              <QuoteCard
                quote="We can make this lighter: list three must-do tasks, then pause for 3 deep breaths."
                author="MindBloom"
              />
            </div>
          </div>
          <GlassCard className="space-y-4">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">AI mood map</p>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-300">
                <span>Calm</span>
                <span>Overwhelmed</span>
              </div>
              <div className="h-3 rounded-full bg-gradient-to-r from-bloom-mint via-bloom-sky to-bloom-pink" />
              <p className="text-xs text-slate-500 dark:text-slate-300">
                Softly maps your emotions into a focused plan.
              </p>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="section-pad">
        <SectionHeader
          eyebrow="Community"
          title="Anonymous, supportive, and safe"
          description="Cozy chat bubbles, helpful replies, and gentle moderation keep things kind."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard className="space-y-3">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Placement stress check-in
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              “I feel like I’m not doing enough. Anyone else?”
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-300">
              12 comforting replies • 3 reactions
            </p>
          </GlassCard>
          <GlassCard className="space-y-3">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Late-night study buddy thread
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              “Let’s do a 25-min sprint together?”
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-300">
              28 replies • 11 reactions
            </p>
          </GlassCard>
        </div>
      </section>
    </div>
  )
}
