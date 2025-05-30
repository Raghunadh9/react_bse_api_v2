import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Volume from "./component/Volume.jsx";
import Fiftyto500 from "./component/Fiftyto500.jsx";
import Home from "./component/Home.jsx";
import Header from "./component/Header.jsx";
import ConvertToNumer from "./component/convertToNumer.jsx";
import Merit from "./component/Merit.jsx";
import ProductPage from "./component/ProductPage.jsx";
import SuperHighVolume from "./component/superHighVolume.jsx";
import Winner20 from "./component/winner20percent.jsx";
const App = () => {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/50-500" element={<Fiftyto500 />} />
          <Route path="/volume" element={<Volume />} />
          <Route path="/convertToNumer" element={<ConvertToNumer />} />
          <Route path="/winners" element={<Winner20 />} />
          <Route path="/merit" element={<Merit />} />
          <Route path="/superhighvolumestocks" element={<SuperHighVolume />} />
          <Route
            path="/stock-share-price/:compName/:name/:id"
            element={<ProductPage />}
          />

          {/* ConvertToNumer */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
