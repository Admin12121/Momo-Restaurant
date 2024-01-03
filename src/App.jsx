import React from "react";
import "./App.scss";
import Navebar from "./Navbar/Navebar";
import Dashboard from "./Dashboard/Dashboard";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About/About";

const App = () => {
  return (
    <>
      <Router>
        <Navebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
