import React, { useState, useEffect } from 'react';
import Listado from '../componentes/Listado'
import '../../styles/admCita.css';

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
    <div className="administra-citas-container">
      <h2>Administra tus citas</h2>
      <Listado citas={citas} eliminar={eliminarCita} />
    </div>
  );
}