import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HighPercentWithVolume from "./component/HighPercentWithVolume.jsx";
import Volume from "./component/Volume.jsx";
import Fiftyto500 from "./component/Fiftyto500.jsx";
import Home from "./component/Home.jsx";
import Header from "./component/Header.jsx";
import ConvertToNumer from "./component/convertToNumer.jsx";
const App = () => {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/highVolumewp" element={<HighPercentWithVolume />} />
          <Route path="/50-500" element={<Fiftyto500 />} />
          <Route path="/volume" element={<Volume />} />
          <Route path="/ConvertToNumer" element={<ConvertToNumer />} />
          {/* ConvertToNumer */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
