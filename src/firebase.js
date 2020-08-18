import firebase from "firebase";

const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyA3ula502OPQdK3TCB7zr5JPt43oxKFULs",
    authDomain: "app-8676f.firebaseapp.com",
    databaseURL: "https://app-8676f.firebaseio.com",
    projectId: "app-8676f",
    storageBucket: "app-8676f.appspot.com",
    messagingSenderId: "453081671532",
    appId: "1:453081671532:web:58c776c603a19384037549",
    measurementId: "G-9LDWWNLN24"
  });


  const auth= firebase.auth();
  
  export {auth};