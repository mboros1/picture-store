import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/analytics';


const firebaseConfig = {
    apiKey: "AIzaSyAxWCxrhoO5NHx7x16Lme1B8_MU8syH_FI",
    authDomain: "picture-store-d293a.firebaseapp.com",
    projectId: "picture-store-d293a",
    storageBucket: "picture-store-d293a.appspot.com",
    messagingSenderId: "822149981753",
    appId: "1:822149981753:web:92c31bbc33bb1b5a698fe8",
    measurementId: "G-WGPB1NE864"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore};