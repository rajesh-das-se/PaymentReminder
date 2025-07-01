import Sidebar from "./layouts/Sidebar";
import MainContainer from "./layouts/MainContainer";
import "./index.css"

function App() {
  return (
    <div className="App">
      <div className="flex h-screen">
        <Sidebar className=""/>
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
