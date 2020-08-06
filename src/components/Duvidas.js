import React from "react"
import './Duvidas.css'

const Duvidas = () => {
  return (
    <section className="duvidas-wrapper">
      <div className="container">
        <p className="title">
          Está com dúvidas?
        </p>
        <p className="subtitle">
          Converse com nosso time de especialistas e  e descubra mais 
          sobre a contabilidade digital
        </p>
        <a
          target='_blank'
          rel="noopener" 
          href="https://wa.me/5548984289990?text=SantaContabilidade"
        >
          <button>
            Quero falar com um especialista
          </button>
        </a>
      </div>
    </section>
  )
}

export default Duvidas
