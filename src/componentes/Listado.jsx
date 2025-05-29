import React from 'react';
import Cita from './Cita';

function Listado({ cita, eliminar }) {
  
  if (!cita || cita.length === 0) {
    return <div className="cita"> <p>No hay citas para mostrar.</p> </div>;
  }

  return (
    <div className="cita">
      {
        cita.map((c) => (
          <Cita key={c.id} cita={c} eliminar={eliminar} />
        ))
      }
    </div>
  );
}

export default Listado;
