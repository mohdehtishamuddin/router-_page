import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Navigation from "./Component/Navigation";
function App() {
  return (
    <div>
      {" "}
      <Navigation />
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
