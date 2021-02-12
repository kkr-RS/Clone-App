import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAqRu2Pm74dAyNvYt593QKStcSufjIxrNU",
  authDomain: "e-website-1e5d8.firebaseapp.com",
  projectId: "e-website-1e5d8",
  storageBucket: "e-website-1e5d8.appspot.com",
  messagingSenderId: "438515571011",
  appId: "1:438515571011:web:e39ff36ae2e3fd407237f6",
  measurementId: "G-328P2TRB69",
});

const auth = firebase.auth();

export { auth };
