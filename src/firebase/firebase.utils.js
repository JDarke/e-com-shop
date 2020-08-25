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
    appId: "1:705953978516:web:514086a983931c33c8bc81",
    measurementId: "G-L2TQ5EBM4V"
  }

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const collectionRef = firestore.collection(`users`);
    const snapShot = await userRef.get();
    const collectionSnapShot = await collectionRef.get();
    console.log(collectionSnapShot);

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData  
            })
        } catch (e) {
            console.log('error creating user', e.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    })

    return await batch.commit();
    //console.log(collectionRef);
}

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.doc.map(doc => {
        const {title, items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

  return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
  }, {})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;