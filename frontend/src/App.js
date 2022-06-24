import Navbar from "./Navbar";
import AddReminder from "./AddReminder";
import TableOfInfo from "./TableOfInfo";
import { useState, useEffect } from "react"
import axios from "axios";

function App() {
  const [count, setCount] = useState(0); //whenever a user click "Add Reminder", "send" and "delete" buton , count will increment
  const [allInfo, setallInfo] = useState(undefined);

  useEffect(() => {
    const f = () => {
      axios.get('/getdetails')
      .then((res)=>{
        setallInfo(res.data);
      })
      return  0;
    }
    f();
  }, [count]);

  return (
    <div className="App">
      <Navbar />
      <AddReminder setclickCount={setCount} clickCount={count} />
      <hr />
      <TableOfInfo allInfo={allInfo} setclickCount={setCount} clickCount={count}/>
    </div>
  );
}

export default App;
