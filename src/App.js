import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import OffPlanPropertyPage from "./pages/offPlanPropertyPage/OffPlanPropertyPage.jsx";
import PropertyPage from "./pages/PropertyPage/PropertyPage.jsx";



const App = () => {
  return (
    <>
    {/* <OffPlanPropertyPage/> */}
    {/* <PropertyPage/> */}
    <Navbar />
    <Outlet />
    <Footer /> 
    
    </>
  );
};

export default App;
