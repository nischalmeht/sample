import firebase from "firebase";


var firebaseApp = firebase.initializeApp({
    // Your firebase credentials
    
        apiKey: "AIzaSyAnJDJaIBAnESLl1wvnopMN-BZ_kbzSCdo",
        authDomain: "fform-b05d5.firebaseapp.com",
        projectId: "fform-b05d5",
        storageBucket: "fform-b05d5.appspot.com",
        messagingSenderId: "419013642974",
        appId: "1:419013642974:web:3ea3256e3301abc10f904f"
      
  });

  var db = firebaseApp.firestore();

export { db };
