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
        <p>
          Planos que realmente têm a cara da sua empresa.
          <br/>
          Com a gente você sabe exatamente quanto vai pagar sem aquelas surpresinhas na fatura
        </p>
        <Accordion>
          <AccordionItem title={"Quanto custa para abrir uma empresa MEI"} >
            <div>
              teste
            </div>
          </AccordionItem>
          <AccordionItem title={"Quanto custa para abrir uma empresa MEI"}>
            <div>
              teste ss
            </div>
          </AccordionItem>
          <AccordionItem title={"Preços Justos e Transparentes online?"}>
            <div>
              teste ss
            </div>
          </AccordionItem>
          <AccordionItem title={"Preços Justos e Transparentes online?"}>
            <div>
              teste ss
            </div>
          </AccordionItem>
          <AccordionItem title={"Preços Justos e Transparentes online?"}>
            <div>
              teste ss
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default AccordionComponent
