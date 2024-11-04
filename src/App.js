import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sivak from "./components/Sivak";




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/Sivak" element={<Sivak />} />
       
      </Routes>
    </Router>
  );
}

export default App;
