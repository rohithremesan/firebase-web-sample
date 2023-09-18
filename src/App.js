import { collection, getDocs,setDoc ,doc} from "firebase/firestore";
import { db } from "./firebase/config";





function App() {
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
      
    </div>
  );
}

export default App;
