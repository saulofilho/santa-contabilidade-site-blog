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
        <div className="form-abrir-empresa">
          <form action="https://paginas.rocks/Pages/Index/460790" method="post" target='_blank'>  
            <input id="id" name="id" type="hidden" value="460790" />  
            <input id="pid" name="pid" type="hidden" value="16430089" />  
            <input id="list_id" name="list_id" type="hidden" value="460790" />  
            <input id="provider" name="provider" type="hidden" value="leadlovers" />   
            <input className="form-control form-ll" id="name" name="name" placeholder="Nome" type="text"  />   
            <input className="form-control form-ll" id="phone" name="phone" placeholder="Telefone" type="text" />   
            <input className="form-control form-ll" id="email" name="email" placeholder="E-mail" type="text" />   
            <input className="form-control form-ll" id="company" name="company" placeholder="Empresa" type="text" /> 
            <div className="buttons">
              <button className="btn btn-danger" type="submit">Enviar</button>  
              <button className="btn-close" onClick={handleCloseModal}>Fechar</button>
            </div> 
            <input type="hidden" id="source" name="source" value="" />  
          </form>
        </div>
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
              <p className="steps-sub">
                Você contrata o plano anual que se encaixa no seu negócio.
              </p>
            </div>
            <img src={GreenLine} alt="linha verde"/>
            <div className="steps">
              <p>Segundo passo</p>
              <p className="steps-sub">
                Nós elaboramos os processos de abertura da sua empresa.
              </p>
            </div>
            <img src={GreenLine} alt="linha verde"/>
            <div className="steps">
              <p>Terceiro passo</p>
              <p className="steps-sub">
                Você gasta apenas com as taxas dos órgãos 
                <br/>
                públicos necessários para abertura da empresa.
              </p>
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
