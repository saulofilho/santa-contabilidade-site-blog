import React from "react"
import './ComoFunciona.css'

const ComoFunciona = () => {
  return (
    <section className="como-funciona-wrapper" id="contabilidade-digital">
      <div className="container">
        <h1>
          Como é ser cliente da Santa
        </h1>
        <p className="subtitle">
          Contabilidade digital é assim: acessível, prática e confiável. 
          <br/>
          Em poucos minutos no mês você resolve tudo.
        </p>
        <div className="texts-wrapper">
          <section className="voce">
            <p>o que você vai fazer</p>
            <ul>
              <li>Durante o mês, você emite as notas fiscais da sua atividade, e envia o seu extrato bancário mensal.</li>
              <li>Para qualquer dúvida, conte com o nosso atendimento.</li>
            </ul>
          </section>
          <section className="nos">
            <p>O que nós vamos fazer</p>
            <ul>
              <li>Calculamos as guias de impostos, folha de pagmento e pró-labore.</li>
              <li>Mantemos o seu CNPJ regularizado, em dia com as obrigações legais.</li>
              <li>Elaboramos os seus relatórios contábeis, Balanço, DRE, Fluxo de caixa, para você acompanhar o desempenho da sua empresa. </li>
              <li>Prestamos todo o atendimento humanizado e rápido pelo canal de sua preferência (telefone, e-mail, chat, whatsapp)</li>
              <li>A sua contabilidade completa! </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}

export default ComoFunciona
