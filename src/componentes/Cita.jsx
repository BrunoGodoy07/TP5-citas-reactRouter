import React from 'react';

export default function Cita({ cita, eliminar }) {
  return (
    <div className='cita'>
      <p># {cita.id}</p>
      <p>Mascota: <span>{cita.mascota}</span></p>
      <p>Dueño: <span>{cita.Dueño}</span></p>
      <p>Fecha: <span>{cita.fecha}</span></p>
      <p>Hora: <span>{cita.hora}</span></p>
      <p>Síntomas: <span>{cita.sintomas}</span></p>

      <button
        className="button eliminar u-full-width"
        onClick={() => eliminar(cita.id)}
      >
        Eliminar ×
      </button>
    </div>
  );
}
