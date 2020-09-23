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
      <section className="planos-wrapper" id="planos">
        <div className="container">
          <h1>
            Você pediu e nós atendemos
          </h1>
          <p className="planos-title">
            Planos que realmente têm a cara da sua empresa.
            <br/>
            Com a gente você sabe exatamente quanto vai pagar sem aquelas surpresinhas na fatura!
          </p>
          <h2>
            PLANOS ACESSÍVEIS A PARTIR DE R$ 97,00
          </h2>
          <p className="planos-subtitle">
            SIMPLIFICAMOS TUDO PARA VOCÊ
          </p>
          <div className="three-cards-wrapper">
            <div className="card-wrapper">
              <p className="title">
                EMPRESA MEI
              </p>
              <img src={Bussola} alt="ilustracao pessoa com fone"/>
              <p className="apartir">
                a partir de
              </p>
              <div className="preco">
                <p>
                  R$ 97
                </p>
                <span>
                  /mês
                </span>
              </div>
              <p className="subtitle">
                Indicado para empresas com faturamento até R$ 81.000,00/ano
              </p>
              <p className="cnpj">
                Abertura de empresa
                <br/>
                Assessoria contábil digital
                <br/>
                Suporte humanizado
              </p>
              {/* <button onClick={handleOpenModal}>
                quero abrir empresa
              </button> */}
              <a href="https://contabilidade.santacontabilidade.com.br/abertura-de-empresa">
                <button>
                  quero abrir empresa
                </button>
              </a>
            </div>
            <div className="card-wrapper">
              <p className="title">
                EMPRESA DE SERVIÇOS
              </p>
              <img src={Binoculos} alt="ilustracao pessoa com fone"/>
              <p className="apartir">
                a partir de
              </p>
              <div className="preco">
                <p>
                  R$ 157
                </p>
                <span>
                  /mês
                </span>
              </div>
              <p className="subtitle">
                Indicado para empresas com faturamento até R$ 180.000,00/ano
              </p>
              <p className="cnpj">
                Abertura de empresa
                <br/>
                Assessoria contábil digital
                <br/>
                Suporte humanizado
              </p>
              <a href="https://contabilidade.santacontabilidade.com.br/abertura-de-empresa">
                <button>
                  quero abrir empresa
                </button>
              </a>
            </div>
            <div className="card-wrapper">
              <p className="title">
                EMPRESA DE COMÉRCIO
              </p>
              <img src={Montanha} alt="ilustracao pessoa com fone"/>
              <p className="apartir">
                a partir de
              </p>
              <div className="preco">
                <p>
                  R$ 217
                </p>
                <span>
                  /mês
                </span>
              </div>
              <p className="subtitle">
                Indicado para empresas com faturamento até R$ 180.000,00/ano
              </p>
              <p className="cnpj">
                Abertura de empresa
                <br/>
                Assessoria contábil digital
                <br/>
                Suporte humanizado
              </p>
              <a href="https://contabilidade.santacontabilidade.com.br/abertura-de-empresa">
                <button>
                  quero abrir empresa
                </button>
              </a>
            </div>
          </div>
          <div className="container">
            <p className="duvidas">
              Está com dúvidas para definir o plano ideal? 
              <br/>
              Converse com o nosso especialista que vai te ajudar e apresentar a melhor porposta para o seu negócio!
            </p>
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
