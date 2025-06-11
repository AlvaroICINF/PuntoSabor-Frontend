import React from "react";
import { Link } from "react-router-dom";

import reactLogo from "../assets/react.svg";
import "./style/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbarContainer">
      <div className="logoSection">
        <Link to="/" className="logoLink">
          <img src={reactLogo} alt="Punto sabor Logo" className="logoImage" />
          <span className="logoText">Punto Sabor</span>
        </Link>
      </div>
    </nav>
  );
}
