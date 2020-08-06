import React, { useState } from "react"
import Modal from 'react-modal';
import './Planos.css'
import Bussola from '../../static/assets/bussola.png'
import Binoculos from '../../static/assets/binoculos.png'
import Montanha from '../../static/assets/montanha.png'

const Planos = () => {
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
      <section className="planos-wrapper" id="planos">
        <div className="container">
          <h1>
            Você pediu e nós atendemos
          </h1>
          <p className="planos-title">
            Planos que realmente têm a cara da sua empresa.
            <br/>
            Com a gente você sabe exatamente quanto vai pagar sem aquelas surpresinhas na fatura
          </p>
          <h2>
            PLANOS QUE CABEM NO SEU BOLSO
          </h2>
          <p className="planos-subtitle">
            SIMPLIFICAMOS TUDO PARA VOCÊ
          </p>
          <div className="three-cards-wrapper">
            <div className="card-wrapper">
              <p className="title">
                MEI
              </p>
              <img src={Bussola} alt="ilustracao pessoa com fone"/>
              <p className="apartir">
                a partir de
              </p>
              <div className="preco">
                <p>
                  R$ 39
                </p>
                <span>
                  /mês
                </span>
              </div>
              <p className="subtitle">
                Indicado para empresas com faturamento x e funcionários Y
              </p>
              <p className="cnpj">
                Registro de CNPJ
                <br/>
                Cadastro do Alvará
                <br/>
                Autorização para emitir nota fiscal
              </p>
              <button onClick={handleOpenModal}>
                quero abrir empresa
              </button>
            </div>
            <div className="card-wrapper">
              <p className="title">
                SIMPLES
              </p>
              <img src={Binoculos} alt="ilustracao pessoa com fone"/>
              <p className="apartir">
                a partir de
              </p>
              <div className="preco">
                <p>
                  R$ 39
                </p>
                <span>
                  /mês
                </span>
              </div>
              <p className="subtitle">
                Indicado para empresas com faturamento x e funcionários Y
              </p>
              <p className="cnpj">
                Registro de CNPJ
                <br/>
                Cadastro do Alvará
                <br/>
                Autorização para emitir nota fiscal
              </p>
              <button onClick={handleOpenModal}>
                quero abrir empresa
              </button>
            </div>
            <div className="card-wrapper">
              <p className="title">
                MEI
              </p>
              <img src={Montanha} alt="ilustracao pessoa com fone"/>
              <p className="apartir">
                a partir de
              </p>
              <div className="preco">
                <p>
                  R$ 39
                </p>
                <span>
                  /mês
                </span>
              </div>
              <p className="subtitle">
                Indicado para empresas com faturamento x e funcionários Y
              </p>
              <p className="cnpj">
                Registro de CNPJ
                <br/>
                Cadastro do Alvará
                <br/>
                Autorização para emitir nota fiscal
              </p>
              <button onClick={handleOpenModal}>
                quero abrir empresa
              </button>
            </div>
          </div>
          <a
            target='_blank'
            rel="noopener" 
            href="https://wa.me/5548984289990?text=SantaContabilidade"
          >
            <button className="planos-btn">
              Tire dúvidas no WhatsApp
            </button>
          </a>
        </div>
      </section>
    </>
  )
}

export default Planos
