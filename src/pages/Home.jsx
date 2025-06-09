import React from 'react';
import { NavLink } from 'react-router-dom';
import miImagen from '../img/descarga.png';

export default function Home() {
  return (
    <div className="main-container" style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1 style={{ fontSize: "2.8rem", marginBottom: "1rem" }}>
        ¡Bienvenido a tu gestor de citas veterinarias!
      </h1>
      <p style={{ fontSize: "1.3rem", color: "#fff", marginBottom: "2rem" }}>
        Organiza fácilmente las consultas de tus mascotas.<br/>
        Registra, gestiona y elimina citas de forma simple y rápida.
      </p>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
        <img 
          src={miImagen} 
          alt="Foto veterinaria" 
          style={{ 
            borderRadius: "1rem", 
            boxShadow: "0 2px 24px rgba(0,0,0,0.13)", 
            maxWidth: "330px",
            width: "100%",
            height: "auto",
            background: "#fff"
          }} 
        />
      </div>
      <NavLink 
        to="/citas"
        style={{
          display: "inline-block",
          background: "linear-gradient(90deg, #A445B2 0%, #D41872 52%, #FF0066 100%)",
          color: "#fff",
          padding: "1rem 2.5rem",
          borderRadius: "2rem",
          fontWeight: "bold",
          letterSpacing: "2px",
          fontSize: "1.1rem",
          textTransform: "uppercase",
          textDecoration: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
          transition: "background 0.2s, transform 0.2s",
        }}
        activeStyle={{
          background: "#fff",
          color: "#D41872",
        }}
      >
        Ir a citas
      </NavLink>
    </div>
  );
}