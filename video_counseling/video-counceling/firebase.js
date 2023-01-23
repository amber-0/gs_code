import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCNBt7UBKFEEuhuVeyWjhuYBb225kL8iS8",
  authDomain: "fir-rtc-79a9e.firebaseapp.com",
  projectId: "fir-rtc-79a9e",
  storageBucket: "fir-rtc-79a9e.appspot.com",
  messagingSenderId: "43971938670",
  appId: "1:43971938670:web:fc1610031ef33c8a7a997f",
  measurementId: "G-QG66807TJC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth,provider };
