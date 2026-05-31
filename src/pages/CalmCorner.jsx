import GlassCard from '../components/ui/GlassCard.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import { books } from '../data/mockData.js'

export default function CalmCorner() {
  return (
    <section className="section-pad space-y-12">
      <SectionHeader
        eyebrow="Calm corner"
        title="Soft resources to help you exhale"
        description="Books, ambient sound, focus tools, and cozy wellness reads."
      />

      <div className="space-y-6">
        <SectionHeader eyebrow="Self-help books" title="Gentle growth reads" />
        <div className="grid gap-6 md:grid-cols-3">
          {books.map((book) => (
            <GlassCard key={book.title} className="space-y-3">
              <div className="h-36 rounded-2xl bg-gradient-to-br from-bloom-peach via-bloom-pink to-bloom-lavender" />
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{book.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-300">{book.author}</p>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-300">{book.summary}</p>
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-300">
                <span>⭐ {book.rating}</span>
                <button type="button" className="rounded-full bg-white/70 px-3 py-1">
                  Save
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <GlassCard className="space-y-4">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Meditation & ambient music
          </p>
          <iframe
            title="Spotify playlist"
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3Ogo9pFvBkY"
            width="100%"
            height="160"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-2xl border-0"
          />
          <iframe
            title="YouTube ambient"
            src="https://www.youtube.com/embed/5qap5aO4i9A"
            width="100%"
            height="200"
            allow="autoplay; encrypted-media"
            loading="lazy"
            className="rounded-2xl border-0"
          />
        </GlassCard>

        <GlassCard className="space-y-4">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Productivity + focus</p>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li>25/5 Pomodoro with cozy soundscapes</li>
            <li>Study-with-me sessions curated for calm</li>
            <li>Deep work checklist: phone down, desk clear, one tab</li>
          </ul>
        </GlassCard>
      </div>

      <div className="space-y-6">
        <SectionHeader eyebrow="Wellness blogs" title="Pinterest-style glow reads" />
        <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
          {[
            'Burnout recovery rituals',
            'Anxiety reset for exam weeks',
            'Study-life balance blueprint',
            'Emotional regulation for overachievers',
            'Healthy routines that stick',
          ].map((post) => (
            <GlassCard key={post} className="mb-6 space-y-3 break-inside-avoid">
              <div className="h-32 rounded-2xl bg-gradient-to-br from-bloom-sky via-bloom-lavender to-bloom-mint" />
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{post}</p>
              <p className="text-xs text-slate-500 dark:text-slate-300">
                Tiny steps, gentle guidance, and calm energy.
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
