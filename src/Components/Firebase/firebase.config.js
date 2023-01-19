// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBny1U-aeLTAPLZxDfSeE-HUo8OGPugqj4",
    authDomain: "sweet-restaurants.firebaseapp.com",
    projectId: "sweet-restaurants",
    storageBucket: "sweet-restaurants.appspot.com",
    messagingSenderId: "253923617677",
    appId: "1:253923617677:web:f765ff137ced3ef8b32bc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;