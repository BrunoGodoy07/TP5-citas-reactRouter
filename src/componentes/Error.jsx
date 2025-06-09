import React from 'react';

function Error({ mensaje, tipo }) {
  const clase = tipo === 'exito' ? 'alerta-exito' : 'alerta-error';
  return <div className={clase}>{mensaje}</div>;
}

export default Error;