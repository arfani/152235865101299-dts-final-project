// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

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

const loginUser = (email, password) => {
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

export {
    auth,
    registerUser,
    loginUser,
    logOut
}


