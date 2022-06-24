import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDfkM4bfJMeVwzX-KTOPxJIyQoa8tAEqQc",
  authDomain: "tiendadanielareact.firebaseapp.com",
  projectId: "tiendadanielareact",
  storageBucket: "tiendadanielareact.appspot.com",
  messagingSenderId: "322757025473",
  appId: "1:322757025473:web:c9bd577f52472165643e40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)