import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import Griditem from "./components/Grid/Grid";
import BasicsPage from "./Basic/Basic";

function App() {
  return (
    <BrowserRouter>
      <Link to={"/"} style={{textDecoration:"none", color:"white"}}><h1>GSAP LEARNING</h1></Link>
      <Routes>
        <Route path='/' element={<Griditem />} />
        <Route path='/basic' element={<BasicsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
