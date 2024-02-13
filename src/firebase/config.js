import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCd7DWAw8RY6r9JUPWPdCPur0_tL0b6L3c",
  authDomain: "mymoney-adf97.firebaseapp.com",
  projectId: "mymoney-adf97",
  storageBucket: "mymoney-adf97.appspot.com",
  messagingSenderId: "703515285266",
  appId: "1:703515285266:web:4c085e4a8619507f6e45cb",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp };
