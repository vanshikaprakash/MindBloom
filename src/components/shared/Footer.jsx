export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-40 w-full border-t border-white/30 bg-white/60 px-6 py-3 text-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <p className="text-slate-600 dark:text-slate-300">
          Made with ❤️ by Vanshika
        </p>
        <a
          href="https://www.linkedin.com/in/vanshikaprakash/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-white/40 bg-white/80 px-3 py-1 text-slate-700 shadow-soft transition hover:scale-105 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 8.98h3.96V21H3zM9.75 8.98h3.8v1.64h.06c.53-.99 1.82-2.03 3.74-2.03 4 0 4.74 2.63 4.74 6.06V21h-3.96v-5.39c0-1.29-.02-2.94-1.8-2.94-1.81 0-2.08 1.4-2.08 2.85V21H9.75z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
