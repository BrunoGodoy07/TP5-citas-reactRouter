import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>ReservApp</h2>
      <ul>
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/citas" className="nav-link">
            Nueva Reserva
          </NavLink>
        </li>
        <li>
          <NavLink to="/administrar" className="nav-link">
            Mis Citas
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}