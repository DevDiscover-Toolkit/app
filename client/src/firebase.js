// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1e5nDpbh_6bWHXsxgCLys33xRGQSYhnQ",
    authDomain: "dev-discover.firebaseapp.com",
    projectId: "dev-discover",
    storageBucket: "dev-discover.appspot.com",
    messagingSenderId: "444203343206",
    appId: "1:444203343206:web:e90033836084b856b2fca7",
    measurementId: "G-DMNE72C8V6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);