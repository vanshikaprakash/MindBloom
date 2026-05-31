import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const apiKey     = import.meta.env.VITE_FIREBASE_API_KEY
const authDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN
const projectId  = import.meta.env.VITE_FIREBASE_PROJECT_ID
const appId      = import.meta.env.VITE_FIREBASE_APP_ID

const isConfigured = apiKey && authDomain && projectId && appId

let auth = null
let db   = null

if (isConfigured) {
  const app = initializeApp({
    apiKey,
    authDomain,
    projectId,
    storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId,
  })
  auth = getAuth(app)
  db   = getFirestore(app)
}

export { auth, db }