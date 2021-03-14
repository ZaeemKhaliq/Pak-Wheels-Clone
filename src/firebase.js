import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCVsIUiQPJfBNq-ntCObEFKw6wuc8LjNuo",
  authDomain: "pak-wheels-clone.firebaseapp.com",
  projectId: "pak-wheels-clone",
  storageBucket: "pak-wheels-clone.appspot.com",
  messagingSenderId: "181728492162",
  appId: "1:181728492162:web:9576df7a43a039bbcdd29b",
  measurementId: "G-3XS0JSHDHN"
});

const db = firebaseApp.firestore();
export {db};