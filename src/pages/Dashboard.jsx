import GlassCard from '../components/ui/GlassCard.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import QuoteCard from '../components/ui/QuoteCard.jsx'
import ProgressRing from '../components/widgets/ProgressRing.jsx'
import PomodoroTimer from '../components/widgets/PomodoroTimer.jsx'
import BreathingWidget from '../components/widgets/BreathingWidget.jsx'
import { weeklyMood } from '../data/mockData.js'

export default function Dashboard() {
  return (
    <section className="section-pad space-y-12">
      <SectionHeader
        eyebrow="Your dashboard"
        title="Hi, Vanshika. Your gentle snapshot."
        description="Mood streaks, focus energy, and tiny wins in one calming space."
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <GlassCard className="space-y-4" draggable>
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Weekly mood flow</p>
            <span className="text-xs text-slate-500 dark:text-slate-300">Drag to reorder</span>
          </div>
          <div className="grid grid-cols-7 gap-3">
            {weeklyMood.map((day) => (
              <div key={day.day} className="flex flex-col items-center gap-2">
                <div className="flex h-24 w-5 items-end rounded-full bg-white/60 dark:bg-white/10">
                  <div
                    className="w-full rounded-full bg-gradient-to-t from-bloom-lavender to-bloom-sky"
                    style={{ height: `${day.value}%` }}
                  />
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-300">{day.day}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        <div className="space-y-6">
          <GlassCard className="space-y-3" draggable>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Daily mood summary</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              You are feeling tender and motivated. A little rest will go a long way.
            </p>
          </GlassCard>
          <QuoteCard
            quote="Small progress is still progress. You are not behind."
            author="MindBloom"
          />
          <ProgressRing label="Productivity score" value={72} />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <GlassCard className="space-y-2" draggable>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Streak tracker</p>
          <p className="text-2xl font-semibold text-slate-900 dark:text-white">12 days</p>
          <p className="text-xs text-slate-500 dark:text-slate-300">You have checked in daily.</p>
        </GlassCard>
        <GlassCard className="space-y-2" draggable>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Sleep tracker</p>
          <p className="text-2xl font-semibold text-slate-900 dark:text-white">6h 40m</p>
          <p className="text-xs text-slate-500 dark:text-slate-300">Aim for a 20-min wind down.</p>
        </GlassCard>
        <GlassCard className="space-y-2" draggable>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Upcoming tasks</p>
          <ul className="space-y-2 text-xs text-slate-500 dark:text-slate-300">
            <li>Finish DSA assignment</li>
            <li>Placement prep: 2 problems</li>
            <li>Call home</li>
          </ul>
        </GlassCard>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <GlassCard className="space-y-3" draggable>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">AI recommendations</p>
          <ul className="space-y-2 text-xs text-slate-500 dark:text-slate-300">
            <li>Try a 15-minute focus sprint with rain audio.</li>
            <li>Write a 2-line brain dump before bed.</li>
            <li>Message a friend after finishing your top task.</li>
          </ul>
        </GlassCard>
        <GlassCard className="space-y-3" draggable>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Streak rewards</p>
          <p className="text-xs text-slate-500 dark:text-slate-300">
            Unlock the “Soft Bloom” badge at 14 days.
          </p>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-bloom-pink to-bloom-lavender" />
            <div className="text-xs text-slate-500 dark:text-slate-300">2 days to go</div>
          </div>
        </GlassCard>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <PomodoroTimer />
        <BreathingWidget />
      </div>
    </section>
  )
}
