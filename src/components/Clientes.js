import React from "react"
import './Clientes.css'
import AMar from '../../static/assets/amar.png'
import PromoPrev from '../../static/assets/promoprev-color.png'
import DoisW from '../../static/assets/2w.png'
import Reiko from '../../static/assets/reiko.png'
import Growth from '../../static/assets/growth.png'
import Wdi from '../../static/assets/wdi.png'

const Clientes = () => {
  return (
    <section className="clientes-wrapper">
      <div className="container">
        <h1>Quem <strong>confia</strong> na gente? Confere aí :)</h1>
        <div className="logos-grid">
          <img src={AMar} className="AMar" alt="logos dos clientes"/>
          <img src={PromoPrev} className="PromoPrev" alt="logos dos clientes"/>
          <img src={DoisW} className="DoisW" alt="logos dos clientes"/>
          <img src={Reiko} className="Reiko" alt="logos dos clientes"/>
          <img src={Growth} className="Growth" alt="logos dos clientes"/>
          <img src={Wdi} className="Wdi" alt="logos dos clientes"/>
        </div>
      </div>
    </section>
  )
}

export default Clientes
