// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { v4 as uuidv4 } from 'uuid';
// import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  getDocs,
  collection,
  addDoc,
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

const collection_name = 'testing';

export const inputQuotes = async (quotesInput) => {
  try {
    await addDoc(collection(db, collection_name), {
      uuid: uuidv4(),
      quotes: quotesInput,
      date: new Date(),
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const findQuotes = async () => {
    const quotes_ref = await getDocs(collection(db, collection_name))

    const res = []

    quotes_ref.forEach(quote => {
        res.push({
            id: quote.id, 
            ...quote.data()
        })
    })
    return res
}
