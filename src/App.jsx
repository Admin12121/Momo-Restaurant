import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navebar from "./Components/Navbar/Navebar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Services from "./Pages/Services/Services";
import "./App.scss";

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
