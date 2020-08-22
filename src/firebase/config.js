import firebase from "firebase"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4OMD8AetcVDNibYGDs_Zl_yqDljINtFg",
  authDomain: "personal-website-f8fa4.firebaseapp.com",
  databaseURL: "https://personal-website-f8fa4.firebaseio.com",
  projectId: "personal-website-f8fa4",
  storageBucket: "personal-website-f8fa4.appspot.com",
  messagingSenderId: "935330075647",
  appId: "1:935330075647:web:e7cc2abcbd28e0fa878dca",
  measurementId: "G-ZRQ7RWX6JQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// const projectStorage = firebase.storage();
// const projectFirestore = firebase.firestore()

export default firebase