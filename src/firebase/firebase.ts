import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyANAfiKnYrEC249LL60yUfIq5baSUC9Sqo",
  authDomain: "netflix-clone-eec94.firebaseapp.com",
  projectId: "netflix-clone-eec94",
  storageBucket: "netflix-clone-eec94.appspot.com",
  messagingSenderId: "318652141202",
  appId: "1:318652141202:web:694a1ccd9400b873d9604b"
}

export const firebase = initializeApp(firebaseConfig)

export const db = getFirestore()


