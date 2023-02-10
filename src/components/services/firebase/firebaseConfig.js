import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDjx7t_VD-2A4IulPpOPfvf6iCrXUBPp0s",
  authDomain: "backend-app-n1.firebaseapp.com",
  projectId: "backend-app-n1",
  storageBucket: "backend-app-n1.appspot.com",
  messagingSenderId: "815655063207",
  appId: "1:815655063207:web:16836eec4ab209afa15582"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)