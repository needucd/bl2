import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdkVNWpVkbEy4NJ7MIGTtD_j6r-wslI_8",
  authDomain: "bloodlyf-a.firebaseapp.com",
  projectId: "bloodlyf-a",
  storageBucket: "bloodlyf-a.firebasestorage.app",
  messagingSenderId: "408255558167",
  appId: "1:408255558167:web:1abf279965b42578df6252",
  measurementId: "G-ZPDRLVC1XG" // optional, not needed for auth
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
