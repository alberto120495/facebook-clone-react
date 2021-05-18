import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCxQsxnF3DyXDlrIgi_yVox4zsHX9w8ZVA",
  authDomain: "facebook-clone-d4ea6.firebaseapp.com",
  databaseURL: "https://facebook-clone-d4ea6.firebaseio.com",
  projectId: "facebook-clone-d4ea6",
  storageBucket: "facebook-clone-d4ea6.appspot.com",
  messagingSenderId: "78879683410",
  appId: "1:78879683410:web:220fd4550493b19bea008b",
  measurementId: "G-0MC0ZNLP35",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
