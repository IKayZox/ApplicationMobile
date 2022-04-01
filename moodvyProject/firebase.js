// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/compat'
import 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRHluF0oe41l-NNn0jThMgvWLAu9yUMo0",
  authDomain: "appmob-d89ec.firebaseapp.com",
  projectId: "appmob-d89ec",
  storageBucket: "appmob-d89ec.appspot.com",
  messagingSenderId: "1014810735025",
  appId: "1:1014810735025:web:885560d4c0ab48aa9d4d90"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth();

// const db = getFirestore(app);

// Initialize Firebase
export {auth, /*db*/};