import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4TRU8YhIQ2d6onhvADJSiYj-LgXmVL00",
  authDomain: "proyecto-final-3bcfa.firebaseapp.com",
  projectId: "proyecto-final-3bcfa",
  storageBucket: "proyecto-final-3bcfa.appspot.com",
  messagingSenderId: "27580455388",
  appId: "1:27580455388:web:93c043bd4a8798cdbf5719"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)