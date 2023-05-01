import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
    /*
	colocar aqui seus dados de configuração
    */
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;


