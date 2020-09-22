import React from "react"
import './FaleComAGente.css'
import WhatsApp from '../../static/assets/whats-app-icon.png'

const FaleComAGente = () => {
  return (
    <section className="fale-gente-wrapper">
      <div className="container">
        <h1>Fale com a Santa Contabilidade</h1>
        <div className="two-cards-wrapper">
          <div className="card-white">
            <p className="ficou-duvida">
              Ficou com alguma dúvida?
              <br/>
              Solicite uma consultoria gratuita!
            </p>
            <div className="enderecos">
              <div className="endereco-wrapper">
                {/* <img src={WhatsApp} alt="whats app icon"/> */}
                <p>
                  Rua Adelino Boschetti Mateus, 49, Picadas do Sul
                </p>
              </div>
              <div className="endereco-wrapper">
                {/* <img src={WhatsApp} alt="whats app icon"/> */}
                <p>
                  São José - Santa Catarina
                </p>
              </div>
              <div className="endereco-wrapper">
                {/* <img src={WhatsApp} alt="whats app icon"/> */}
                <p>
                  (48) 996470220
                </p>
              </div>
              <div className="endereco-wrapper">
                {/* <img src={WhatsApp} alt="whats app icon"/> */}
                <p>francisco@santacontabilidade.com.br</p>
              </div>
            </div>
            <a 
              target='_blank'
              rel="noopener" 
              href="https://wa.me/5548984289990?text=SantaContabilidade"
            >
              <button className="falar-especialista">
                Falar com um especialista
              </button>
            </a>
          </div>
          <div className="card-green">
            <form action="https://paginas.rocks/Pages/Index/460755" method="post" target='_blank'>  
            <input id="id" name="id" type="hidden" value="460755" />  
            <input id="pid" name="pid" type="hidden" value="16428747" />  
            <input id="list_id" name="list_id" type="hidden" value="460755" />  
            <input id="provider" name="provider" type="hidden" value="leadlovers" />   
            <input className="form-control form-ll form-name" id="name" name="name" placeholder="Nome" type="text"  />   
            <input className="form-control form-ll form-phone" id="phone" name="phone" placeholder="Telefone" type="text" />   
            <input className="form-control form-ll form-email" id="email" name="email" placeholder="E-mail" type="text" />   
            <input className="form-control form-ll form-company" id="company" name="company" placeholder="Empresa" type="text" />   
            <label htmlFor="message">Como podemos te ajudar?</label>   
            <textarea className="form-control form-ll form-message" id="message" name="message" ></textarea>  
            <button className="btn btn-danger" type="submit">Enviar</button>  
            <input type="hidden" id="source" name="source" value="" />  
          </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaleComAGente
