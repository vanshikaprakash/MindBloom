const endpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent'

export async function getGeminiSuggestions({ mood, intensity, notes }) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY
  if (!apiKey) {
    return null
  }

  const prompt = `You are a supportive, emotionally intelligent companion for college students.\n\nMood: ${mood}\nIntensity: ${intensity}/100\nNotes: ${notes}\n\nGive 5 micro-actions students can do immediately, 2 grounding exercises, and 2 productivity tips. Avoid generic advice like "drink water". Keep it warm and realistic.`

  const response = await fetch(`${endpoint}?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  })

  if (!response.ok) {
    throw new Error('Gemini request failed')
  }

  const data = await response.json()
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text
  return text || null
}
