// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCutjl2FUqJScpjScdWiUPJVutlr0haMXI",
  authDomain: "adri-quotes.firebaseapp.com",
  projectId: "adri-quotes",
  storageBucket: "adri-quotes.appspot.com",
  messagingSenderId: "627253837284",
  appId: "1:627253837284:web:d314650c30d70adcbcdbf1",
  measurementId: "G-001CMM8BFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);