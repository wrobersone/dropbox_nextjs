import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDdcxiHMP_2I1FyOmq28tkRqgH3dnxiZ30",
    authDomain: "dropbox-clone-e946b.firebaseapp.com",
    projectId: "dropbox-clone-e946b",
    storageBucket: "dropbox-clone-e946b.appspot.com",
    messagingSenderId: "633812277685",
    appId: "1:633812277685:web:37e4107baaef92a2e861fc"
  };
  
  // Initialize Firebase
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export { db, storage };