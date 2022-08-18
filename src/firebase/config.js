// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB42Hijbtz4ZsiNjVGjYsdE3k1KvMq2yDs",
  authDomain: "wedding-a2056.firebaseapp.com",
  projectId: "wedding-a2056",
  storageBucket: "wedding-a2056.appspot.com",
  messagingSenderId: "1006617582181",
  appId: "1:1006617582181:web:165e73d574ad3f2127c48c",
  measurementId: "G-B3SWYEYFTY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const projectStorage = getStorage();
const projectFirestore = getFirestore();

export { projectStorage, projectFirestore };