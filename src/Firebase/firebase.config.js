import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Initialize Firebase
const app = firebase.initializeApp({
    apiKey: "AIzaSyCFM3_GKieNuKi_AeYMtzgIVKChlzpKoGY",
  authDomain: "dental-clinic-314da.firebaseapp.com",
  projectId: "dental-clinic-314da",
  storageBucket: "dental-clinic-314da.firebasestorage.app",
  messagingSenderId: "506303774965",
  appId: "1:506303774965:web:88e96f8c0344162a56c5bc",
  measurementId: "G-SXK8TL95SE"
 });




export const auth = app.auth();
export const db = app.firestore();
export default app;