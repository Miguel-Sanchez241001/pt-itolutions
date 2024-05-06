import React from "react";
import "./Navbar.css";


const Navbar: React.FC = () =>{
    return ( 
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Lista de comentarios</span>
  </div>
</nav>
    </> 
    );
}

export default Navbar;