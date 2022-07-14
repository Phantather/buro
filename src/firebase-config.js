import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAVmr8Bvi4DGDYw0kQV1gF5VFEFjparWDE",
    authDomain: "buro-b079d.firebaseapp.com",
    projectId: "buro-b079d",
    storageBucket: "buro-b079d.appspot.com",
    messagingSenderId: "830922552529",
    appId: "1:830922552529:web:16a5891100059db8ba81f0",
    measurementId: "G-5NGNBVF0V5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);