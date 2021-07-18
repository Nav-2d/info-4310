import * as firebase from 'firebase';
// import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA7j43lZ2ug95YU1Oli_Aq8bDjTJvFWcEs",
  authDomain: "reactnativefirebase-2c422.firebaseapp.com",
  projectId: "reactnativefirebase-2c422",
  storageBucket: "reactnativefirebase-2c422.appspot.com",
  messagingSenderId: "718295440324",
  appId: "1:718295440324:web:e95427c8ee3bde564aa291",
  measurementId: "G-M8SDY98XPD"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
