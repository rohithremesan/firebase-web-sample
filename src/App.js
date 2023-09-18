import { collection, getDocs,setDoc ,doc} from "firebase/firestore";
import { db } from "./firebase/config";





function App() {
  return (
    <div className="App">
     <button onClick={()=>{

const querySnapshotPromise = getDocs(collection(db, "users"));
const docRef = doc(db, "users", "udi111");

querySnapshotPromise.then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log( doc.data());
  })
})

const data = {
  name: "sasi"
};

setDoc(docRef, data)
  .then(() => {
    console.log("Document successfully written!");
  })


     }}>click me</button>
      
    </div>
  );
}

export default App;
