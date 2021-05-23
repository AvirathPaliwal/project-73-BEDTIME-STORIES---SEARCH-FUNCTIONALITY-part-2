import firebase from 'firebase' 
//require('@firebase/firestore')
require('firebase/app')

var firebaseConfig = {
    apiKey: "AIzaSyBrdv3WBj_OrSvmLmcIbua_qJChKa6uol8",
    authDomain: "project-71-story-hub---2.firebaseapp.com",
    projectId: "project-71-story-hub---2",
    storageBucket: "project-71-story-hub---2.appspot.com",
    messagingSenderId: "130314570118",
    appId: "1:130314570118:web:e8df0e0aa1d4ac190e4407"
};


firebase.initializeApp(firebaseConfig);
export default firebase.firestore();