import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyDCQy99n7FJgztlidd9muQVh26EiP9cyl8",
    authDomain: "hamburguesas-leo-ddfe0.firebaseapp.com",
    projectId: "hamburguesas-leo-ddfe0",
    storageBucket: "hamburguesas-leo-ddfe0.appspot.com",
    messagingSenderId: "737073059491",
    appId: "1:737073059491:web:2d19419338a3ae24a2d116",
    measurementId: "G-7QV2F9FTP6"
  };
  
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default db;


