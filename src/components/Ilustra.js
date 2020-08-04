import React from "react"
import './Ilustra.css'
import PessoaCelular from '../../static/assets/pessoa-celular.png'
import BarraVerde from '../../static/assets/barra-verde.png'

const Ilustra = () => {
  return (
    <section className="ilustra-wrapper">
      <div className="container">
        <img src={PessoaCelular} alt="pessoa segurando celular" />
        <div className="texts-wrapper">
          <h1>
            Atendemos Empresas
            em mais de 30 municípios 
            em toda Santa Catarina
          </h1>
          <p className="subtitle">
            Venha para a Contabilidade Online preferida
            por mais de 3.000 empresas em todo o Brasil
          </p>
          <img src={BarraVerde} className="barra-verde" alt="barra verde em vetor"/>
          <p className="subtitle">
            No painel Camadas, clique no ícone de cadeado perto da sua camada 
            original para prevenir qualquer mudança acidental. E seguida, 
            selecione a ferramenta Retângulo e arraste sobre a área que você 
            gostaria de inverter. Selecione o seu novo retângulo e a camada 
            duplicada, e então vá para "Janela"
            No painel Camadas, clique no ícone de cadeado perto da sua camada 
            original para prevenir qualquer mudança acidental. E seguida, 
            selecione a ferramenta Retângulo e arraste sobre a área que você 
            gostaria de inverter. Selecione o seu novo retângulo e a camada 
            duplicada, e então vá para "Janela"
          </p>
        </div>
      </div>
    </section>
  )
}

export default Ilustra