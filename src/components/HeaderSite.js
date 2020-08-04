import React, { useState } from "react"
import { Link } from 'gatsby'
import { Menu, X } from 'react-feather'
import LogoHero from '../../static/assets/logo-branco.png'
import './HeaderSite.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuClassNames = isOpen ? 'header-wrapper-active container' : 'header-wrapper header-site container';

  return (
    <header
      className="header-site"
    >
      <div className={menuClassNames}>
        <div className="header-left">
          <div className="logo-header">
            <Link to={"/"}>
              <img src={LogoHero} alt="" />
            </Link>
          </div>
        </div>
        <div className="header-right-desk">
          <div className="btns-wrapper">
            <button className="btn-blog">
              <Link to={"/blog"}>
                Blog
              </Link>
            </button>
            <button className="btn-fale">
              <a href="http://localhost:8000/">
                Fale com um especialista
                </a>
            </button>
          </div>
        </div>
        <div className="header-right-mob">
          <div className="btns-wrapper">
            <button className="btn-blog">
              <Link to={"/blog"}>
                Blog
              </Link>
            </button>
            <button className="btn-fale">
              <a href="http://localhost:8000/">
                Fale com um especialista
                </a>
            </button>
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
