
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDQxuXLnM8vn3bJCFoLyPjmIdXuE76eoVY",
    authDomain: "productfinder-43714.firebaseapp.com",
    projectId: "productfinder-43714",
    storageBucket: "productfinder-43714.appspot.com",
    messagingSenderId: "912735659976",
    appId: "1:912735659976:web:849246a959e4b1a36742fd",
    measurementId: "G-7YH4579D1X"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);