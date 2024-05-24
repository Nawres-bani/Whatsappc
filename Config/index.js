// Import the functions you need from the SDKs you need
import app from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
import "firebase/compat/auth";
import "firebase/compat/database"; 
import "firebase/compat/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe9GLQmZYOKGdrx8PUEgp5SKevk7TPYb8",
  authDomain: "WHATQAPPC-1e538.firebaseapp.com",
  databaseURL: "https://WHATSAPPC-1e538-default-.firebaseio.com",
  projectId: "WHATSAPPC-1e538",
  storageBucket: "WHATSAPPC-1e538.appspot.com",
  messagingSenderId: "487538528470",
  appId: "1:487538528470:web:03233933c6785a88ab3977"
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
export default firebase ; 