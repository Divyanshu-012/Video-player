import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAYzd70CGLAbNCH6bSMFjBQ7FVqj8LJ7Vg",
    authDomain: "netflix-clone-6f432.firebaseapp.com",
    projectId: "netflix-clone-6f432",
    storageBucket: "netflix-clone-6f432.appspot.com",
    messagingSenderId: "378120623337",
    appId: "1:378120623337:web:b3baae515ead0378e3cc78"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
