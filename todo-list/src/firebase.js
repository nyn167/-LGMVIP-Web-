import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWr2AQUfcg87CbU49aNOFPrbCzlYNMC0E",
  authDomain: "todo-app-16.firebaseapp.com",
  projectId: "todo-app-16",
  storageBucket: "todo-app-16.appspot.com",
  messagingSenderId: "184492436840",
  appId: "1:184492436840:web:0a7d039593bd20d37ffadd",
  measurementId: "G-M3GYKLQ0ER",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
