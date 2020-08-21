import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBNTJ7U_YfI3H1mWFVPEn1gqk5C-8038WM",
    authDomain: "e-com-shop-a399e.firebaseapp.com",
    databaseURL: "https://e-com-shop-a399e.firebaseio.com",
    projectId: "e-com-shop-a399e",
    storageBucket: "e-com-shop-a399e.appspot.com",
    messagingSenderId: "705953978516",
    appId: "1:705953978516:web:5d976232a2c17bbec8bc81",
    measurementId: "G-Z72WLSYQVG"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;