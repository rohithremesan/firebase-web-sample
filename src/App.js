import { collection, getDocs,setDoc ,doc} from "firebase/firestore";
import { db,auth } from "./firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";





function App() {

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

  return (
    <div className="App">
     <button onClick={()=>{

const querySnapshotPromise = getDocs(collection(db, "users"));
const docRef = doc(collection(db, "users"));

querySnapshotPromise.then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log( doc.data());
  })
})

const data = {
  name: "sasi2"
};

setDoc(docRef, data)
  .then(() => {
    console.log("Document successfully written!");
  })


     }}>click me</button>
     <div>
      
       <h1>name</h1>
         <input type="text" name="" id="" onChange={e => setName(e.target.value)} value={name}/>
         <h1>email</h1>
         <input type="text" name="" id="" onChange={e => setEmail(e.target.value)} value={email} />
         <h1>password</h1>
         <input type="text" name="" id="" onChange={e => setPassword(e.target.value)} value={password} />
         <div>
         <button style={{marginTop:20}} onClick={()=>{

          console.log("name : "+name);
          console.log("email : "+email);
          console.log("password : "+password);

          createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user signed: "+user.email);
    // ...
  })
  .catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ..
  });

         }}>submit</button>
         </div>
         
        
     </div>

    
      
    </div>
  );
}

export default App;
