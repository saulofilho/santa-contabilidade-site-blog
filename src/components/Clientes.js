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
          <a href="https://www.amareco.com.br/">
            <img src={AMar} className="AMar" alt="logos dos clientes"/>
          </a>
          <a href="https://agencia2w.com/">
            <img src={DoisW} className="DoisW" alt="logos dos clientes"/>
          </a>
          <a href="https://www.growthsales.com.br/">
            <img src={Growth} className="Growth" alt="logos dos clientes"/>
          </a>
          <a href="https://www.promoprev.com.br/">
            <img src={PromoPrev} className="PromoPrev" alt="logos dos clientes"/>
          </a>
          <a href="http://www.reiko.top/">
            <img src={Reiko} className="Reiko" alt="logos dos clientes"/>
          </a>
          <a href="http://wdi.digital/">
            <img src={Wdi} className="Wdi" alt="logos dos clientes"/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Clientes
