import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCsretsdv3baxGULZYtjDvOY05sN2vLxlU",
  authDomain: "tp1-m3-react.firebaseapp.com",
  databaseURL: "https://tp1-m3-react.firebaseio.com",
  projectId: "tp1-m3-react",
  storageBucket: "tp1-m3-react.appspot.com",
  messagingSenderId: "928336976773",
  appId: "1:928336976773:web:86533d8c4b21ef85ac02ec",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
