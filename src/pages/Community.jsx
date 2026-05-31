import GlassCard from '../components/ui/GlassCard.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import Tag from '../components/ui/Tag.jsx'
import { communityPosts } from '../data/mockData.js'

const tags = [
  'Exams',
  'Burnout',
  'Relationships',
  'Placement Stress',
  'Loneliness',
  'Motivation',
]

export default function Community() {
  return (
    <section className="section-pad space-y-12">
      <SectionHeader
        eyebrow="Anonymous community"
        title="Soft, safe, and supportive threads"
        description="A cozy space inspired by Reddit + Discord + Tumblr energy, but kinder."
      />

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {communityPosts.map((post) => (
            <GlassCard key={post.title} className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {post.title}
                </p>
                <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-slate-600 dark:bg-white/10 dark:text-slate-200">
                  {post.replies} replies
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Tag key={tag} label={tag} color="bg-bloom-sky/40 text-slate-700" />
                ))}
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-300">
                <button type="button" className="rounded-full bg-white/70 px-3 py-1">
                  Comfort
                </button>
                <button type="button" className="rounded-full bg-white/70 px-3 py-1">
                  Relate
                </button>
                <button type="button" className="rounded-full bg-white/70 px-3 py-1">
                  Report
                </button>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="space-y-4">
          <GlassCard className="space-y-3">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Moderation vibe check
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-300">
              Gentle filters, human review, and a kindness-first rulebook.
            </p>
            <div className="space-y-2 text-xs text-slate-500 dark:text-slate-300">
              <p>• Auto-hide harsh language</p>
              <p>• Reward supportive replies</p>
              <p>• Report button on every post</p>
            </div>
          </GlassCard>
          <GlassCard className="space-y-2">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Positive reminder</p>
            <p className="text-xs text-slate-500 dark:text-slate-300">
              You are never too much. You deserve soft spaces.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
