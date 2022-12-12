// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFntdGwDdOd8LusflzgOcAL60Pb6pDhTs",
    authDomain: "all-out-ecommerce.firebaseapp.com",
    projectId: "all-out-ecommerce",
    storageBucket: "all-out-ecommerce.appspot.com",
    messagingSenderId: "1069694455854",
    appId: "1:1069694455854:web:b63d91a632b2d997b10fbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;