import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import Griditem from "./components/Grid/Grid";
import BasicsPage from "./Basic/Basic";

import GsapTimeline from "./Basic/GsapTimeline";
import GsapStagger from "./Basic/GsapStagger";
import ScrollTriggerr from "./Basic/ScrollTriggerr";
import GsapText from "./Basic/GsapText";

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
        <Route path='/stagger' element={<GsapStagger />} />
        <Route path='/scroll-trigger' element={<ScrollTriggerr />} />
        <Route path='/text' element={<GsapText />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
