import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBNJRcLItRBWjtXyOxjCc-uGLS7PLvOkgo",
    authDomain: "mensajes-627cf.firebaseapp.com",
    projectId: "mensajes-627cf",
    storageBucket: "mensajes-627cf.appspot.com",
    messagingSenderId: "194916926232",
    appId: "1:194916926232:web:cb0078af01e7f3274b146d"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export function getFirebase() {
      return app;
  }
  export const database = firebase.firestore();