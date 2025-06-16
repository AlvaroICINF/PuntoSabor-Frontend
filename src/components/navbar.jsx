import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/assets/logo.png" alt="puntosabor" className="logo"/>
          <span className="logo-text">PuntoSabor</span>
        </Link>
        <div className="navbar-menu">
          <Link to="/" className="navbar-item active">Inicio</Link>
          <Link to="/restaurantes" className="navbar-item">Restaurantes</Link>
          <Link to="/categorias" className="navbar-item">Categorías</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;