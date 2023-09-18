import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/config";





function App() {
  return (
    <div className="App">
     <button onClick={()=>{

const querySnapshotPromise = getDocs(collection(db, "users"));

querySnapshotPromise.then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  })
})


     }}>click me</button>
      
    </div>
  );
}

export default App;
