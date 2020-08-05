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
              No painel Camadas, clique no ícone de cadeado perto da sua camada 
              original para prevenir qualquer mudança acidental. E seguida, 
              selecione a ferramenta Retângulo e arraste sobre a área que você 
              gostaria de inverter. Selecione o seu novo retângulo e a camada 
              duplicada, e então vá para "Janela"
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
