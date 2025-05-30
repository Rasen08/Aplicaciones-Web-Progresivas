import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOm80L747rpt7piHNQO1cx-0n9UvKh1So",
  authDomain: "cadiz-proyecto.firebaseapp.com",
  projectId: "cadiz-proyecto",
  storageBucket: "cadiz-proyecto.firebasestorage.app",
  messagingSenderId: "926928275939",
  appId: "1:926928275939:web:5f49c1ddf8cc1c0ae478d6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);