// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXXS_2whESnXuA2n2jI-3G_qwYb7wyqhw",
  authDomain: "the-prime-bulletien.firebaseapp.com",
  projectId: "the-prime-bulletien",
  storageBucket: "the-prime-bulletien.firebasestorage.app",
  messagingSenderId: "563873187671",
  appId: "1:563873187671:web:50fa20bae3a06c4723e012",
  measurementId: "G-CXK1YD3DKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app