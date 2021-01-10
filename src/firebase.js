import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAxUAbDDzJJsB-QEs7u8RXBfuPiwGndr-Q",
    authDomain: "app-clone-4378e.firebaseapp.com",
    projectId: "app-clone-4378e",
    storageBucket: "app-clone-4378e.appspot.com",
    messagingSenderId: "350168071635",
    appId: "1:350168071635:web:a1397d087cbcb1ea2c0326",
    measurementId: "G-WFKCC7Y2L1"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};

