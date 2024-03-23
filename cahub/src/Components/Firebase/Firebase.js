import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { collection, onSnapshot, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyApaO5VzsZ2LyTHIgSvmrXl1wHF22t6onA",
    authDomain: "accounting-570c1.firebaseapp.com",
    projectId: "accounting-570c1",
    storageBucket: "accounting-570c1.appspot.com",
    messagingSenderId: "1019039784746",
    appId: "1:1019039784746:web:dc348ed1cdc4efd32e0853"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export default db ;
