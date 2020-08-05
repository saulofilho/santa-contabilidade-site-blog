import React from "react"
import './AberturaEmpresa.css'
import PessoaCelular from '../../static/assets/vetor-homem-mesa.png'

const Ilustra = () => {
  return (
    <section className="abertura-wrapper">
      <div className="container">
        <h1>
          Como abrir uma empresa grátis
            <br />
            com a Santa Contabilidade
          </h1>
        <p className="subtitle">
          Venha para a Contabilidade Online preferida
            <br />
            por mais de 3.000 empresas em todo o Brasil
          </p>
      </div>
      <div className="container card-ilustra-wrapper">
        <div className="texts-wrapper">
          <div className="steps">
            <p>Primeiro passo</p>
            <span>Indicado para empresas com faturamento x e funcionários Y</span>
          </div>
          <div className="steps">
            <p>Segundo passo</p>
            <span>Indicado para empresas com faturamento x e funcionários Y</span>
          </div>
          <div className="steps">
            <p>Terceiro passo</p>
            <span>Indicado para empresas com faturamento x e funcionários Y</span>
          </div>
          <a href="">
            <button>
              quero abrir minha empresa grátis
            </button>
          </a>
        </div>
        <img src={PessoaCelular} alt="pessoa segurando celular" className="pessoa-cel" />
      </div>
    </section>
  )
}

export default Ilustra
