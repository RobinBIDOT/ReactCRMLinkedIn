import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD0zQvw146iOie4OFUB22r4pGQJzi3zF1w",
    authDomain: "crm-linkedin-7194f.firebaseapp.com",
    projectId: "crm-linkedin-7194f",
    storageBucket: "crm-linkedin-7194f.appspot.com",
    messagingSenderId: "963744577751",
    appId: "1:963744577751:web:8283c09c0b608d5e1e9892",
    measurementId: "G-CXX483B464"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;