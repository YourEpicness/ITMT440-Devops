import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA2TgrI4lU7B3FAaETM1PtCh2-0xt3-slE",
    authDomain: "item-swapping-site.firebaseapp.com",
    projectId: "item-swapping-site",
    storageBucket: "item-swapping-site.appspot.com",
    messagingSenderId: "798511228892",
    appId: "1:798511228892:web:c1392085778ea6c05cd119",
    measurementId: "G-6Z89H5VVWB"
  };

  export const createUserProfileDocument = async (userAuth, additionalData ) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // checking if theres data in the snapshot and if there isnt create a new one
  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default signInWithGoogle;
