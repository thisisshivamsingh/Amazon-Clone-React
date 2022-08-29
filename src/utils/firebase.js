import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBmPXFi1PfgdWiI_3-h5SenJrvgr-NzMLc",
  authDomain: "clone-b10be.firebaseapp.com",
  projectId: "clone-b10be",
  storageBucket: "clone-b10be.appspot.com",
  messagingSenderId: "125043132700",
  appId: "1:125043132700:web:e43835f4e15c0534fbd2d9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
