import React from "react"
import { Accordion, AccordionItem } from 'react-sanfona';
import './AccordionComponent.css'

const AccordionComponent = () => {
  return (
    <section className="accordion-wrapper">
      <div className="container">
        <h1>
          Ficou com alguma dúvida?
          <br/>
          Confira abaixo as dúvidas mais frequentes
        </h1>
        {/* <p>
          Planos que realmente têm a cara da sua empresa.
          <br/>
          Com a gente você sabe exatamente quanto vai pagar sem aquelas surpresinhas na fatura
        </p> */}
        <Accordion>
          <AccordionItem title={"Vocês atendem todas as cidades?"} >
            <div>
              Não atendemos ainda, solicite uma proposta e avaliamos a disponibilidade de atendimento.
            </div>
          </AccordionItem>
          <AccordionItem title={"Como é o atendimento ao cliente?"}>
            <div>
            Você será atendido por profissionais qualificados, via WhatsApp, 
            e-mail, chat e ferramentas próprias de comunicação. Em casos específicos, 
            poderão acontecer reuniões por videoconferência ou telefone. Na Santa 
            Contabilidade você não fala com um robô.
            </div>
          </AccordionItem>
          <AccordionItem title={"Como ocorre a abertura da empresa?"}>
            <div>
              Após a assinatura do contrato de prestação de serviços você receberá 
              instruções para instalar um aplicativo de envio e recebimento de documentos, 
              de forma totalmente segura e confidencial. Na sequência, será encaminhado 
              um checklist dos documentos necessários.
            </div>
          </AccordionItem>
          <AccordionItem title={"Meu faturamento é superior a 30 mil, vocês atendem?"}>
            <div>
              Sim, atendemos. Solicite um orçamento.
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default AccordionComponent
