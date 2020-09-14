import React from "react"
import './Cards.css'
import PessoaFone from '../../static/assets/pessoa-fone.png'
import Computador from '../../static/assets/computador.png'

const Cards = () => {
  return (
    <section className="cards-wrapper" id="servicos">
      <div className="container">
        <h1>
          O que nos faz <strong>diferentes</strong> e garante que 
          <br/>
          você pode confiar na <strong>Santa Contabilidade</strong>?
        </h1>
        <p className="title-header">
          Planos que realmente têm a cara da sua empresa. 
          <br/>
          Com a gente você sabe exatamente quanto vai pagar, sem surpresinhas na fatura.
        </p>
        <div className="four-cards-wrapper">
          <div className="card-wrapper">
            <img src={PessoaFone} alt="ilustracao pessoa com fone"/>
            <p className="title">
              Atendimento humanizado 
              <br/>
              de verdade
            </p>
            <p className="text">
              Você é atendido por pessoas, tira as dúvidas com um profissional 
              especialista na área, que vai te indicar a melhor solução para o 
              seu problema. Nosso atendimento é consultivo e personalizado!
            </p>
          </div>
          <div className="card-wrapper">
            <img src={Computador} alt="ilustracao computador"/>
            <p className="title">
              Redução 
              <br/>
              de custos
            </p>
            <p className="text">
              Nossos preços são justos e transparentes. 
              Com planos de honorários mais flexíveis em relação aos praticados 
              pela contabilidade tradicional, a economia é significativa!
            </p>
          </div>
          <div className="card-wrapper">
            <img src={PessoaFone} alt="ilustracao pessoa com fone"/>
            <p className="title">
              Agilidade 
              <br/>
              e praticidade
            </p>
            <p className="text">
              Com a contabilidade digital, você não precisa mais se preocupar 
              em enviar e receber documentos na forma física. Na plataforma on-line, 
              todos os arquivos podem ser rapidamente compartilhados, editados e visualizados.
            </p>
          </div>
          <div className="card-wrapper">
            <img src={Computador} alt="ilustracao computador"/>
            <p className="title">
              Qualidade 
              <br/>
              e autonomia
            </p>
            <p className="text">
              Uma das maiores vantagens da contabilidade digital é ter acesso às 
              informações financeiras em tempo real, os serviços são completos e 
              em tempo hábil. Isso significa acompanhar de perto as movimentações 
              financeiras, além de monitorar o fluxo de caixa a qualquer hora e lugar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards
