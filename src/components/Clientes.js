import React from "react"
import './Clientes.css'
import ClientesLogo from '../../static/assets/clientes.png'

const Clientes = () => {
  return (
    <section className="clientes-wrapper">
      <div className="container">
        <h1>Quem <strong>confia</strong> na gente? Confere aí :)</h1>
        <img src={ClientesLogo} alt="logos dos clientes"/>
      </div>
    </section>
  )
}

export default Clientes
