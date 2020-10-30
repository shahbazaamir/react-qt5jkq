import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC0HNXw-ORQW37hUkdvGJ_3CRTCdkGUUCo",
  authDomain: "test-15b0a.firebaseapp.com",
  databaseURL: "https://test-15b0a.firebaseio.com",
  projectId: "test-15b0a",
  storageBucket: "test-15b0a.appspot.com",
  messagingSenderId: "846752590782",
  appId: "1:846752590782:web:cdfb301f4daf4448"
};

firebase.initializeApp(firebaseConfig);
export default firebase;

export const fdb = firebase.database();
