import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB4zHxIl3dtnUp4vYuWH9PxBRggl13S8MU",
    authDomain: "denemeler-6d8a1.firebaseapp.com",
    projectId: "denemeler-6d8a1",
    storageBucket: "denemeler-6d8a1.appspot.com",
    messagingSenderId: "559769028412",
    appId: "1:559769028412:web:da24d70ea7db955b70c039"
  };

 const firebaseApp=firebase.initializeApp(firebaseConfig);

 const db=firebaseApp.firestore();

 const auth=firebase.auth();

 const provider=new firebase.auth.GoogleAuthProvider();

 export default db;
 
 export {auth,provider};