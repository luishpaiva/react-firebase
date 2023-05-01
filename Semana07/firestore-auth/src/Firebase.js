import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAUL24DzDW2MvdMJxnK0mDPdjp-uHGMLx4",
    authDomain: "formativa-firestore.firebaseapp.com",
    projectId: "formativa-firestore",
    storageBucket: "formativa-firestore.appspot.com",
    messagingSenderId: "223887828888",
    appId: "1:223887828888:web:ff9c43cfcc04b560f6aded"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
