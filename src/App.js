import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer /> 
    
    </>
  );
};

export default App;
