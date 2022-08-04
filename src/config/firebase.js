// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { createUserWithEmailAndPassword, getAuth, getRedirectResult, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwLkGjveGTGwj0i_GvBKJkkpCoMG2IMcc",
    authDomain: "dts-final-project2022.firebaseapp.com",
    projectId: "dts-final-project2022",
    storageBucket: "dts-final-project2022.appspot.com",
    messagingSenderId: "987103093295",
    appId: "1:987103093295:web:92ee30e004532e86aadcda",
    measurementId: "G-SPFJXKHVDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);

const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('user : ', user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('Error Code :', errorCode);
            console.log('Error Message:', errorMessage);
        });
}

const logInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('user : ', user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('Error Code :', errorCode);
            console.log('Error Message:', errorMessage);
        });
}

const logOut = () => {
    signOut(auth)
        .then((res) => {
            // Signed in
            console.log(res);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('Error Code :', errorCode);
            console.log('Error Message:', errorMessage);
        });
}

const provider = new GoogleAuthProvider();

const signInGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(token);
            console.log(user);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);

            console.log(error);
        });
}

const getCredential = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          return user;
        } else {
          console.log('User is signed out');
        }
      });
}

export {
    auth,
    registerUser,
    logInUser,
    logOut,
    signInGoogle,
    getCredential
}


