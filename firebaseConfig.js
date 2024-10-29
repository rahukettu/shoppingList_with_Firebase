import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "your_api_key",
    authDomain: "your_api_domain",
    projectId: "your_api_id",
    storageBucket: "your_storageBucket_id",
    messagingSenderId: "your_messagingSender_id",
    appId: "your_app_id"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };