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
        <h2>Hello</h2>
        <button onClick={handleCloseModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
        </form>
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
