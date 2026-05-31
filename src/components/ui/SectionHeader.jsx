export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-10 space-y-3">
      {eyebrow ? <span className="pill">{eyebrow}</span> : null}
      <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  )
}
