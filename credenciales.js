// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJUlcp9Mrp8oMYk9E5Kq8ps_Gp5_7pg7k",
  authDomain: "proyectomobil-f4a13.firebaseapp.com",
  projectId: "proyectomobil-f4a13",
  storageBucket: "proyectomobil-f4a13.firebasestorage.app",
  messagingSenderId: "91093950549",
  appId: "1:91093950549:web:ba14f8610915072855f4dc",
  measurementId: "G-5KDH018HN0"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);

export default appFirebase