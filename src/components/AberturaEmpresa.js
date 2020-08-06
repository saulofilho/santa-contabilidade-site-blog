import React, { useState } from "react"
import Modal from 'react-modal';
import './AberturaEmpresa.css'
import PessoaCelular from '../../static/assets/vetor-homem-mesa.png'
import GreenLine from '../../static/assets/green-line.png'

const Ilustra = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  }
  
  const handleCloseModal = () => {
    setIsOpen(false);
  }

  return (
    <>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Example Modal"
    >
      <h2>Hello</h2>
      <button onClick={handleCloseModal}>close</button>
      <div>I am a modal</div>
      <form>
        <input />
      </form>
    </Modal>
      <section className="abertura-wrapper">
        <div className="container">
          <div className="abertura-title">
            <h1>
              Como abrir uma <strong>empresa grátis</strong>
                <br />
                com a Santa Contabilidade
              </h1>
            <p className="subtitle">
              Contrate nosso plano anual de contabilidade e a abertura da empresa é grátis
            </p>
          </div>
        </div>
        <div className="container card-ilustra-wrapper">
          <div className="texts-wrapper">
            <div className="steps">
              <p>Primeiro passo</p>
              <span>Indicado para empresas com <br /> faturamento x e funcionários Y</span>
            </div>
            <img src={GreenLine} alt="linha verde"/>
            <div className="steps">
              <p>Segundo passo</p>
              <span>Indicado para empresas com <br /> faturamento x e funcionários Y</span>
            </div>
            <img src={GreenLine} alt="linha verde"/>
            <div className="steps">
              <p>Terceiro passo</p>
              <span>Indicado para empresas com <br /> faturamento x e funcionários Y</span>
            </div>
            <button onClick={handleOpenModal}>
              Quero abrir minha empresa grátis
            </button>
          </div>
          <img src={PessoaCelular} alt="pessoa segurando celular" className="pessoa-cel" />
        </div>
      </section>
    </>
  )
}

export default Ilustra
