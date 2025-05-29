import React from 'react'
import { useState, useEffect } from 'react';
import Formulario from '../componentes/Formulario'
import { NavLink } from 'react-router';

export default function Citas() {

    const [citas, setCitas] = useState(() => {
        const citasGuardadas = localStorage.getItem("citas");
        return citasGuardadas ? JSON.parse(citasGuardadas) : [];
      });
      useEffect(() => {
        localStorage.setItem("citas", JSON.stringify(citas));
      }, [citas]);
    
      const obtenerSiguienteId = () => {
        if (citas.length === 0) return 1;
        const idMasAlto = Math.max(...citas.map(c => c.id));
        return idMasAlto + 1;
      };
    
      const agregarCita = (nueva) => {
        const citaConId = {
          ...nueva,
          id: obtenerSiguienteId()
        };
        setCitas([...citas, citaConId]);
      };
    
      

  return (
    <div className="container mt-4">
      <h1 className="text-start mb-4">Crear mi cita</h1>
      <div className="row">
        <div className="one-half column">
          <h5 className="text-start">Formulario</h5>
          <Formulario agregarCita={agregarCita} />
        </div>
      </div>
      <div className="one-half column">
            <NavLink to="/AdministrarCitas">Administra tus citas</NavLink>
      </div>
    </div>
  )
}
