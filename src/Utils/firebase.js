import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB7l6Yq9y1S2KqZqrXcuxPtmF9OZlV2g6Y",
    authDomain: "fir-auth-f468a.firebaseapp.com",
    projectId: "fir-auth-f468a",
    storageBucket: "fir-auth-f468a.appspot.com",
    messagingSenderId: "1022694533820",
    appId: "1:1022694533820:web:78a6feb2559dec69607eb9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth }