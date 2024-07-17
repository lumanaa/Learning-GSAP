import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import Griditem from "./components/Grid/Grid";
import BasicsPage from "./Basic/Basic";

import GsapTimeline from "./Basic/GsapTimeline";

function App() {
  return (
    <BrowserRouter>
      <div className="header-container">
        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          <h1 className="header-title">GSAP LEARNING</h1>
        </Link>
      </div>
      <Routes>
        <Route path='/' element={<Griditem />} />
        <Route path='/basics' element={<BasicsPage />} />
        <Route path='/timeline' element={<GsapTimeline />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
