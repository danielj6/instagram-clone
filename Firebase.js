import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyDLAsgQVRFGoOY0mHTmr-KecgFn20wJphQ",
    authDomain: "instagram-clone-dr.firebaseapp.com",
    databaseURL: "https://instagram-clone-dr.firebaseio.com",
    projectId: "instagram-clone-dr",
    storageBucket: "instagram-clone-dr.appspot.com",
    messagingSenderId: "858902407806",
    appId: "1:858902407806:web:a463fbae13a099111b862f",
    measurementId: "G-WDY707B8FD"
  });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };