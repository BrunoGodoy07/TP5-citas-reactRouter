import React from 'react';
import Cita from './Cita';
import '../../styles/Listado.css';

function Listado({ citas, eliminar }) {
  if (!citas || citas.length === 0) {
    return (
      <div className="no-citas">
        <p>No hay citas para mostrar.</p>
      </div>
    );
  }

  return (
    <div className="lista-citas">
      {citas.map((c) => (
        <Cita key={c.id} cita={c} eliminar={eliminar} />
      ))}
    </div>
  );
}

export default Listado;