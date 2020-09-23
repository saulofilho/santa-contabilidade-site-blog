import React, { useState } from "react"
import { Link } from 'gatsby'
import { Menu, X } from 'react-feather'
import LogoHero from '../../static/assets/logo-branco.png'
import './HeaderPost.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuClassNames = isOpen ? 'header-wrapper-active bg-header-green container' : 'header-wrapper container';

  return (
    <header
      className="header-post"
      id="Header-Post"
    >
      <div className={menuClassNames}>
        <div className="header-left">
          <div className="logo-header">
            <Link to={"/blog"}>
              <img src={LogoHero} alt="logo post page" />
            </Link>
          </div>
        </div>
        <div className="header-right-desk">
          <div className="btns-wrapper">
            <Link
              to={"/materiais"}
              className="btn-materiais"
            >
              Materiais Gratuitos
            </Link>
            <a href="https://contabilidade.santacontabilidade.com.br/especialista">
              <button className="btn-fale">
                Fale com um especialista
              </button>
            </a>
          </div>
        </div>
        <div className="header-right-mob">
          <div className="btns-wrapper">
            <Link
              to={"/materiais"}
              className="btn-materiais"
            >
              Materiais Gratuitos
            </Link>
              <a href="https://contabilidade.santacontabilidade.com.br/especialista">
                <button className="btn-fale">
                  Fale com um especialista
                </button>
              </a>
          </div>
        </div>
        <button
          className="button-blank menu-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ?
            <X
              color={"#fff"}
              className="x"
            />
              :
            <Menu
              color={"#fff"}
              className="menu"
            />}
        </button>
      </div>
    </header>
  )
}

export default Header
