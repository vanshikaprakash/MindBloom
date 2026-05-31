import { useEffect, useState } from 'react'

const storageKey = 'mindbloom-theme'

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'light'
  }
  const stored = window.localStorage.getItem(storageKey)
  if (stored === 'light' || stored === 'dark') {
    return stored
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.classList.toggle('light', theme === 'light')
    window.localStorage.setItem(storageKey, theme)
  }, [theme])

  return { theme, setTheme }
}
