import GlassCard from '../components/ui/GlassCard.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import BreathingWidget from '../components/widgets/BreathingWidget.jsx'

const helplines = [
  { name: 'India Mental Health Helpline', contact: '1800-599-0019' },
  { name: 'US 988 Lifeline', contact: '988' },
  { name: 'UK Samaritans', contact: '116 123' },
]

export default function Emergency() {
  return (
    <section className="section-pad space-y-12">
      <SectionHeader
        eyebrow="Emergency support"
        title="You are not alone"
        description="If things feel urgent, reach out. These resources are here to help right now."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          {helplines.map((line) => (
            <GlassCard key={line.name} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{line.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-300">{line.contact}</p>
              </div>
              <button type="button" className="glow-button px-4 text-xs">
                Call now
              </button>
            </GlassCard>
          ))}
        </div>

        <div className="space-y-4">
          <BreathingWidget />
          <GlassCard className="space-y-3">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Grounding steps</p>
            <ol className="space-y-2 text-xs text-slate-500 dark:text-slate-300">
              <li>1. Name 5 things you can see.</li>
              <li>2. Touch 4 things around you.</li>
              <li>3. Hear 3 distinct sounds.</li>
              <li>4. Smell 2 things nearby.</li>
              <li>5. Take 1 slow sip of water.</li>
            </ol>
          </GlassCard>
          <GlassCard className="space-y-2">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              If you feel unsafe
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-300">
              Please reach out to someone you trust or local emergency services.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
