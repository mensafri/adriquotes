// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  setDoc,
  collection,
  addDoc,
  doc,
} from "firebase/firestore";
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
  measurementId: "G-001CMM8BFZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export const inputQuotes = async (quotesInput) => {
  try {
    await addDoc(collection(db, "quotes"), {
      quotes: quotesInput,
      date: new Date(),
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
