import React from 'react'
import {  NavLink } from 'react-router'
import Citas from './citas'

export default function Home() {
  return (
    <div>
      <h1>Bienvenido a mi pagina de citas!</h1>
      <p>Esta es la landing page.</p>
    <NavLink to="/citas">Citas</NavLink>
    </div>
  )
}
