import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCuaUR8YpKuIDN6GK_N0s9AW9Z6VSg-vfs",
  authDomain: "e-commerce-9ddd9.firebaseapp.com",
  projectId: "e-commerce-9ddd9",
  storageBucket: "e-commerce-9ddd9.appspot.com",
  messagingSenderId: "879467626840",
  appId: "1:879467626840:web:ba140e4de2a46a64bce52d",
  measurementId: "G-MYGE5N9LY3"
};

export const createUserProfileDocument = async (userAuth, additionalDate) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalDate
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;