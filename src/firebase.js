import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCMUnXNgw1dTG5Kq12oxniIIw4Xg8RDU2c",
    authDomain: "slack-clone-7a7bb.firebaseapp.com",
    databaseURL: "https://slack-clone-7a7bb.firebaseio.com",
    projectId: "slack-clone-7a7bb",
    storageBucket: "slack-clone-7a7bb.appspot.com",
    messagingSenderId: "727808990715",
    appId: "1:727808990715:web:8f9c587f4cb4229da67f5e",
    measurementId: "G-MC5PC4M29K"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {  auth, provider}; 
  export default db ;
  