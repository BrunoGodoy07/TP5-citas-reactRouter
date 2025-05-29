import React from 'react'
import { useState, useEffect } from 'react';
import Listado from '../componentes/Listado'

export default function AdministrarCitas() {

    const [citas, setCitas] = useState(() => {
        const citasGuardadas = localStorage.getItem("citas");
        return citasGuardadas ? JSON.parse(citasGuardadas) : [];
      });
      useEffect(() => {
        localStorage.setItem("citas", JSON.stringify(citas));
      }, [citas]);

    const eliminarCita = (id) => {
        setCitas(citas.filter(c => c.id !== id));
      };
  return (
    <div className="one-half column">
          <h5 className="text-start">Administra tus citas</h5>
          <Listado cita={citas} eliminar={eliminarCita} />
    </div>
  )
}
