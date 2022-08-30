import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBDbprfexahA6XrU0frscE7cmnve9QMR6E",
  authDomain: "video-a8cbf.firebaseapp.com",
  projectId: "video-a8cbf",
  storageBucket: "video-a8cbf.appspot.com",
  messagingSenderId: "997255063165",
  appId: "1:997255063165:web:a321dfe0ec126dbe147314",
  measurementId: "G-KKHQXP2VE7"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider()
export default app;