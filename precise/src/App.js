import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Contactus from "./components/Contactus";
import Aboutus from "./components/Aboutus";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/about" element={<Aboutus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
