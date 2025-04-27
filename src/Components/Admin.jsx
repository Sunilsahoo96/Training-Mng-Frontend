import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
// import "../styles/navbar.css";


const Admin = () => {

  return (
    <>
    {/* Fixed Navbar at the top */}
    <Navbar />

    {/* Main Content */}
    <div className="container mt-4">
      <Outlet />
    </div>
  </>
    
  
  );
};



export default Admin;
