import React from "react"
import './Hero.css'
import ImgHero from '../../static/assets/hero-img.png'

const Hero = () => {
  return (
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
            <a href="">
              <button className="btn-transparent">Abertura de empresa grátis</button>
            </a>
          </div>
        </div>
        <div className="img-hero">
          <img src={ImgHero} alt="hero-ilustration"/>
        </div>
      </div>
    </section>
  )
}

export default Hero
