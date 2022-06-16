import Navbar from "./Navbar";
import AddReminder from "./AddReminder";
import TableOfInfo from "./TableOfInfo";
import { useState, useEffect } from "react"
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
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
      <TableOfInfo allInfo={allInfo} />
    </div>
  );
}

export default App;
