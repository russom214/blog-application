import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import About from "./components/About";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
      </div>
      <div id="page-body">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
