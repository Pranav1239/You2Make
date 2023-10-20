import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: `${process.env.FIREBASE_API_KEY}`,
  authDomain: "blog-d882d.firebaseapp.com",
  projectId: "blog-d882d",
  storageBucket: "blog-d882d.appspot.com",
  messagingSenderId: "388630250794",
  appId: "1:388630250794:web:3e2dc9e828a9e0b3a34a53"
};

export const app = initializeApp(firebaseConfig);