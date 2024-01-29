import React from "react";
import "./App.scss";
import Navebar from "./Navbar/Navebar";
import Dashboard from "./Dashboard/Dashboard";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";

const App = () => {
  return (
    <>
      <Router>
        <Navebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/service" element={<Services/>}/>
          <Route path="*" element={<section style={{display:"flex", alignItems:"center" ,justifyContent:"center"}}><h1>404 PAge not found</h1></section>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
