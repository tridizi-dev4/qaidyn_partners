import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import AboutPage from "./pages/AboutUs/Aboutus.jsx";
import Industries from "./pages/Industries/Industries.jsx";
import Promotions from "./pages/Promotions/Promotions.jsx";

import ServicePage from "./pages/Services/ServicePage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/promotions" element={<Promotions />} />

        {/* single dynamic route for ALL services */}
        <Route path="/services/:category/:slug" element={<ServicePage />} />
      </Routes>
    </Router>
  );
}

export default App;
