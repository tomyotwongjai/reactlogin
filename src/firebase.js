import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };
const firebaseConfig = {
  apiKey: 'AIzaSyB059wq9Le4E8pVHHaHjH2nDPoSMP_jYP4',
  authDomain: 'auth-development-e1716.firebaseapp.com',
  projectId: 'auth-development-e1716',
  storageBucket: 'auth-development-e1716.appspot.com',
  messagingSenderId: '642584937624',
  appId: '1:642584937624:web:ca7d17af886e249086fced',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
