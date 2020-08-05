import React from "react"
import './Planos.css'
import Bussola from '../../static/assets/bussola.png'
import Binoculos from '../../static/assets/binoculos.png'
import Montanha from '../../static/assets/montanha.png'

const Planos = () => {
  return (
    <section className="planos-wrapper" id="planos">
      <div className="container">
        <h1>
          Você pediu e nós atendemos
        </h1>
        <p className="title">
          Planos que realmente têm a cara da sua empresa.
          <br/>
          Com a gente você sabe exatamente quanto vai pagar sem aquelas surpresinhas na fatura
        </p>
        <h2>
          PLANOS QUE CABEM NO SEU BOLSO
        </h2>
        <p className="subtitle">
          SIMPLIFICAMOS TUDO PARA VOCÊ
        </p>
        <div className="three-cards-wrapper">
          <div className="card-wrapper">
            <p className="title">
              MEI
            </p>
            <img src={Bussola} alt="ilustracao pessoa com fone"/>
            <p className="apartir">
              a partir de
            </p>
            <div className="preco">
              <p>
                R$ 39
              </p>
              <span>
                /mês
              </span>
            </div>
            <p className="subtitle">
              Indicado para empresas com faturamento x e funcionários Y
            </p>
            <p className="cnpj">
              Registro de CNPJ
              <br/>
              Cadastro do Alvará
              <br/>
              Autorização para emitir nota fiscal
            </p>
            <a href="">
              <button>
                quero abrir empresa
              </button>
            </a>
          </div>
          <div className="card-wrapper">
            <p className="title">
              SIMPLES
            </p>
            <img src={Binoculos} alt="ilustracao pessoa com fone"/>
            <p className="apartir">
              a partir de
            </p>
            <div className="preco">
              <p>
                R$ 39
              </p>
              <span>
                /mês
              </span>
            </div>
            <p className="subtitle">
              Indicado para empresas com faturamento x e funcionários Y
            </p>
            <p className="cnpj">
              Registro de CNPJ
              <br/>
              Cadastro do Alvará
              <br/>
              Autorização para emitir nota fiscal
            </p>
            <a href="">
              <button>
                quero abrir empresa
              </button>
            </a>
          </div>
          <div className="card-wrapper">
            <p className="title">
              MEI
            </p>
            <img src={Montanha} alt="ilustracao pessoa com fone"/>
            <p className="apartir">
              a partir de
            </p>
            <div className="preco">
              <p>
                R$ 39
              </p>
              <span>
                /mês
              </span>
            </div>
            <p className="subtitle">
              Indicado para empresas com faturamento x e funcionários Y
            </p>
            <p className="cnpj">
              Registro de CNPJ
              <br/>
              Cadastro do Alvará
              <br/>
              Autorização para emitir nota fiscal
            </p>
            <a href="">
              <button>
                quero abrir empresa
              </button>
            </a>
          </div>
        </div>
        <a href="">
          <button>
            tire dúvidas no zap
          </button>
        </a>
      </div>
    </section>
  )
}

export default Planos
