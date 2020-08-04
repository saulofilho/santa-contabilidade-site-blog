import React from "react"
import './ComoFunciona.css'

const ComoFunciona = () => {
  return (
    <section className="como-funciona-wrapper">
      <div className="container">
        <p>
          Como funciona a
          <br />
          Contabilidade Digital na prática
        </p>
        <p>
          Planos que realmente têm a cara da sua empresa.
          <br />
          Com a gente você sabe exatamente quanto vai pagar sem aquelas 
          surpresinhas na fatura
        </p>
        <div className="texts-wrapper">
          <section className="voce">
            <p>o que você vai fazer</p>
            <ul>
              <li>Emitir as notas fiscais e importar seu extrato mensal na nossa platorforma.</li>
              <li>Resolve as suas dúvidas com nosso atendimento.</li>
              <li>Emitir as notas fiscais e importar seu extrato mensal na nossa platorforma.</li>
              <li>Resolve as suas dúvidas com nosso atendimento.</li>
            </ul>
          </section>
          <section className="NOS">
            <p>o que você nós vamos fazer</p>
            <ul>
              <li>Calculamos as guias de impostos, folha de pagamento e pró-labore.</li>
              <li>Mantemos a sua empresa em dia com todas as obrigações do governo - IRPJ incluso.</li>
              <li>Fazemos e assinamos relatórios contábeis como balanço, DRE e outros para você ficar sempre tranquilo.</li>
              <li>Atendimento rápido por diversos canais (telefone, whatsapp, chat e email).</li>
              <li>Emissão de nota fiscal e boleto gratuito.</li>
              <li>E a sua contabilidade, completa.</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}

export default ComoFunciona
