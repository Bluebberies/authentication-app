import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: 'AIzaSyAtlxTNzKEveTEdb0uFfMtuoAeyV2e1h_w',
//   authDomain: 'my-auth-app-9cf9c.firebaseapp.com',
//   projectId: 'my-auth-app-9cf9c',
//   storageBucket: 'my-auth-app-9cf9c.appspot.com',
//   messagingSenderId: '1032725371420',
//   appId: '1:1032725371420:web:56b86f1780b6131569ddd9',
//   measurementId: 'G-9PDJE6NRS2'
// }

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId
}

const app = initializeApp(firebaseConfig)
export const authentication = getAuth(app)
