// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyApZK1uKspkk_yu8mCKDH44rDnmJzjvv00",
  authDomain: "myshop-f7a03.firebaseapp.com",
  projectId: "myshop-f7a03",
  storageBucket: "myshop-f7a03.appspot.com",
  messagingSenderId: "793564064034",
  appId: "1:793564064034:web:fcc5230ff28a5ee8005d7b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);