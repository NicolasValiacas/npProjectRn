import { initializeApp, getApps } from 'firebase/app'
import { getFirestore, collection, addDoc, onSnapshot, serverTimestamp, query, orderBy } from 'firebase/firestore'
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth'
// import { getDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAM0c1myfvduJMHw8BzOG4KVur1QbpwpVw",
    authDomain: "swartzchat-7537e.firebaseapp.com",
    projectId: "swartzchat-7537e",
    storageBucket: "swartzchat-7537e.appspot.com",
    messagingSenderId: "231987503574",
    appId: "1:231987503574:web:f2c84e2cd2c0829b404477"
  };


  if (!getApps().length) initializeApp(firebaseConfig)

  export {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
    collection,
    addDoc,
    getFirestore,
    onSnapshot,
    serverTimestamp,
    query,
    orderBy,
  }