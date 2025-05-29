import { useState } from 'react';
import Error from './Error';

export default function Formulario({ agregarCita }) {
  const [formulario, setFormulario] = useState({
    mascota: '',
    Dueño: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const validarForm = (e) => {
    e.preventDefault();

    if (
      !formulario.mascota ||
      !formulario.Dueño ||
      !formulario.fecha ||
      !formulario.hora ||
      !formulario.sintomas
    ) {
      setError("Todos los campos son obligatorios");
      return;
    }

    agregarCita(formulario);
    setError(null);

    setFormulario({
      mascota: '',
      Dueño: '',
      fecha: '',
      hora: '',
      sintomas: ''
    });
  };

  return (
    <>
      <form onSubmit={validarForm}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          value={formulario.mascota}
          onChange={handleChange}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="Dueño"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
          value={formulario.Dueño}
          onChange={handleChange}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          value={formulario.fecha}
          onChange={handleChange}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          value={formulario.hora}
          onChange={handleChange}
        />

        <label>Síntomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          value={formulario.sintomas}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
      
        {error && <Error mensaje={error} />}
    </>
  );
}
