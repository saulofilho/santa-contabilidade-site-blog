import React, { useState } from "react"
import Modal from 'react-modal';
import './Hero.css'
import ImgHero from '../../static/assets/hero-img.png'

const Hero = () => {
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
      <section className="hero">
        <div className="container">
          <div className="text-hero">
            <h1>
              <strong>Contabilidade online</strong> da 
              <br/> sua empresa de forma 
              <br/>
              <strong>prática</strong> e <strong>segura</strong> e <strong>econômica</strong>
            </h1>
            <p>
            Acesse gratuitamente eBooks, Webinars, Templates e outros 
            <br/>
            materiais educativos para ampliar seus conhecimentos em 
            <br/>
            tecnologia, empreendedorismo, marketing digital e outros.
            </p>
            <div className="btns-hero">
              <a href="">
                <button className="btn-green">Conheça mais</button>
              </a>
                <button className="btn-transparent" onClick={handleOpenModal}>Abertura de empresa grátis</button>
            </div>
          </div>
          <div className="img-hero">
            <img src={ImgHero} alt="hero-ilustration"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
