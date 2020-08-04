import React from "react"
import './FaleComAGente.css'
import WhatsApp from '../../static/assets/whats-app-icon.png'

const FaleComAGente = () => {
  return (
    <section className="fale-gente-wrapper">
      <div className="container">
        <h1>Fale com a gente</h1>
        <div className="two-cards-wrapper">
          <div className="card-white">
            <p>
              Ficou com alguma dúvida?
              <br/>
              Solicite uma consultoria gratuita!
            </p>
            <div className="endereco-wrapper">
              <img src={WhatsApp} alt="whats app icon"/>
              <p>Rua Adelino Boschetti Mateus, 144, Picadas do Sul</p>
            </div>
            <div className="endereco-wrapper">
              <img src={WhatsApp} alt="whats app icon"/>
              <p>São José  Santa Catarina</p>
            </div>
            <div className="endereco-wrapper">
              <img src={WhatsApp} alt="whats app icon"/>
              <p>(48) 999616963</p>
            </div>
            <div className="endereco-wrapper">
              <img src={WhatsApp} alt="whats app icon"/>
              <p>francisco@santacontabilidade.com.br</p>
            </div>
            <p>
              Ficou com alguma dúvida?
              <br/>
              Solicite uma consultoria gratuita!
            </p>
            <a href="">
              <button>
                Falar com um especialista
              </button>
            </a>
          </div>
          <div className="card-green">
            <p>Nome</p>
            <p>Telefone</p>
            <p>E-mail</p>
            <p>Como podemos te ajudar</p>
            <a href="">
              <button>
                Enviar
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaleComAGente
