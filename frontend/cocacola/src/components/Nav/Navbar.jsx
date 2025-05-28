import React from 'react';
import { FaHome, FaUsers, FaUserTie, FaBoxOpen, FaTaxi } from 'react-icons/fa';
import CocaCola from "../../img/logoblack.svg";
import './Navbar.css';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => handleNavigation("/")}>
        <img src={CocaCola} alt="Coca-Cola Logo" className="logo-icon" />
      </div>

      <ul className="nav-links">
        <li onClick={() => handleNavigation("/")}>
          <span className="nav-link">
            <FaHome /> Inicio
          </span>
        </li>
        <li onClick={() => handleNavigation("/productos")}>
          <span className="nav-link">
            <FaBoxOpen /> Productos
          </span>
        </li>
        <li onClick={() => handleNavigation("/empleados")}>
          <span className="nav-link">
            <FaUserTie /> Empleados
          </span>
        </li>
        <li onClick={() => handleNavigation("/sucursales")}>
          <span className="nav-link">
            <FaTaxi/> Sucursales
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;