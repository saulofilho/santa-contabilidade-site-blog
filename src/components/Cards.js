import React from "react"
import './Cards.css'
import PessoaFone from '../../static/assets/pessoa-fone.png'

const Cards = () => {
  return (
    <section className="cards-wrapper">
      <div className="container">
        <h1>
          O que nos faz <strong>diferentes</strong> e garante que 
          <br/>
          você pode confiar na <strong>Santa Contabilidade</strong>?
        </h1>
        <p>
          Planos que realmente têm a cara da sua empresa.
          Com a gente você sabe exatamente quanto vai pagar sem aquelas surpresinhas na fatura
        </p>
        <div className="four-cards-wrapper">
          <div className="card-wrapper">
            <img src={PessoaFone} alt="ilustracao pessoa com fone"/>
            <p className="title">
              Preços Justos e Transparentes
              online
            </p>
            <p className="text">
              Nós usamos a tecnologia a favor da contabilidade para a sua empresa. 
              Com isso conseguimos entregar mais praticidade, agilidade e transparência
            </p>
          </div>
          <div className="card-wrapper">
            <img src={PessoaFone} alt="ilustracao pessoa com fone"/>
            <p className="title">
              Preços Justos e Transparentes
              online
            </p>
            <p className="text">
              Nós usamos a tecnologia a favor da contabilidade para a sua empresa. 
              Com isso conseguimos entregar mais praticidade, agilidade e transparência
            </p>
          </div>
          <div className="card-wrapper">
            <img src={PessoaFone} alt="ilustracao pessoa com fone"/>
            <p className="title">
              Preços Justos e Transparentes
              online
            </p>
            <p className="text">
              Nós usamos a tecnologia a favor da contabilidade para a sua empresa. 
              Com isso conseguimos entregar mais praticidade, agilidade e transparência
            </p>
          </div>
          <div className="card-wrapper">
            <img src={PessoaFone} alt="ilustracao pessoa com fone"/>
            <p className="title">
              Preços Justos e Transparentes
              online
            </p>
            <p className="text">
              Nós usamos a tecnologia a favor da contabilidade para a sua empresa. 
              Com isso conseguimos entregar mais praticidade, agilidade e transparência
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards
