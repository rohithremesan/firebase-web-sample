
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";




const firebaseConfig = {

    apiKey: "AIzaSyBtSNSlZ24AAs4axRpZYeRlLWkW5RdxNAE",
  
    authDomain: "sample-web-51403.firebaseapp.com",
  
    projectId: "sample-web-51403",
  
    storageBucket: "sample-web-51403.appspot.com",
  
    messagingSenderId: "423658128279",
  
    appId: "1:423658128279:web:d6c2834b9d792a3b893ad2",
  
    measurementId: "G-4CV7WJ9JH8"
  
  };
  const Firebase = initializeApp(firebaseConfig);
  

  
 export const db = getFirestore(Firebase);
 export const auth = getAuth(Firebase)



  