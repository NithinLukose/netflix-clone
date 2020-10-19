import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDbosTGUc5pR_aJ4JsJcFxADrdFP6po7Vg",
    authDomain: "netflix-clone-nithin.firebaseapp.com",
    databaseURL: "https://netflix-clone-nithin.firebaseio.com",
    projectId: "netflix-clone-nithin",
    storageBucket: "netflix-clone-nithin.appspot.com",
    messagingSenderId: "1026950197239",
    appId: "1:1026950197239:web:fd6fabd7c6cb66577d48f2",
    measurementId: "G-3D8TJ2BHKH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db,auth}