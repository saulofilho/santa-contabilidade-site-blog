import React, { useState } from "react"
import { Link } from 'gatsby'
import { ToggleLayer, Arrow, Transition } from "react-laag"
import Headroom from 'react-headroom'
import { Menu, X } from 'react-feather'
import LogoHero from '../../static/assets/logo-branco.png'
import './HeaderSite.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuClassNames = isOpen ? 'header-wrapper-active container' : 'header-wrapper header-site container';

  const scrollToServicos = () => {
    document.querySelector('#servicos').scrollIntoView({ behavior: 'smooth' });
  }
  
  const scrollToPlanos = () => {
    document.querySelector('#planos').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="header-bg">
      <Headroom
        parent={() => document }
        style={{
          position: "fixed",
          background: "transparent",
          zIndex: 90
        }}
      >
      <header
        className="header-site"
      >
        <div className={menuClassNames}>
          <div className="header-left">
            <div className="logo-header">
              <Link to={"/"}>
                <img src={LogoHero} alt="logo site" />
              </Link>
            </div>
          </div>
          <div className="header-right-desk">
            <div className="btns-wrapper">
                {/* <a 
                  href="#servicos" 
                  className="btn-blog"
                  onClick={() => {
                    scrollToServicos()
                  }}
                >
                  Serviços
                </a> */}
              <ToggleLayer
                renderLayer={({ isOpen, layerProps, arrowStyle, layerSide }) => (
                  <Transition isOpen={isOpen}>
                    {(isOpen, onTransitionEnd) => (
                      <div
                        ref={layerProps.ref}
                        onTransitionEnd={onTransitionEnd}
                        className="layer"
                        style={{
                          ...layerProps.style,
                          transition: "opacity 340ms, transform 340ms",
                          opacity: isOpen ? 1 : 0,
                          transform: "scale(" + isOpen ? 1 : 0.5 + ")",
                        }}
                      >
                        <a href="http://localhost:8000/">
                        Abertura de empresa Grátis
                        </a>
                        <a
                          href="#planos"
                          onClick={() => {
                            scrollToPlanos()
                          }}
                        >
                          Planos
                        </a>
                        <a href="http://santacontabilidade.com.br/bpo-financeiro">
                          BPO Financeiro
                        </a>
                        <a href="http://santacontabilidade.com.br/trocar-de-contador">
                          Trocar de Contador
                        </a>
                        <Arrow
                          style={arrowStyle}
                          layerSide={layerSide}
                          backgroundColor="#fff"
                          borderWidth={1}
                          borderColor="#06606B"
                          roundness={0.5}
                        />
                      </div>
                    )}
                  </Transition>
                )}
                placement={{
                  anchor: "BOTTOM_CENTER",

                  autoAdjust: true,

                  triggerOffset: 10
                }}
                closeOnOutsideClick
              >
                {({ triggerRef, toggle }) => (
                  <a className="btn-blog" ref={triggerRef} onClick={toggle}>
                    Serviços
                  </a>
                )}
              </ToggleLayer>
                <Link to={"/blog"} className="btn-blog">
                    Blog
                </Link>
                <a href="http://localhost:8000/">
                  <button className="btn-fale">
                    Fale com um especialista
                  </button>
                </a>
            </div>
          </div>
          <div className="header-right-mob">
            <div className="btns-wrapper">
                {/* <a 
                  href="#servicos" 
                  className="btn-blog"
                  onClick={() => {
                    scrollToServicos()
                  }}
                >
                  Serviços
                </a> */}
              <ToggleLayer
                renderLayer={({ isOpen, layerProps, arrowStyle, layerSide }) => (
                  <Transition isOpen={isOpen}>
                    {(isOpen, onTransitionEnd) => (
                      <div
                        ref={layerProps.ref}
                        onTransitionEnd={onTransitionEnd}
                        className="layer"
                        style={{
                          ...layerProps.style,
                          transition: "opacity 340ms, transform 340ms",
                          opacity: isOpen ? 1 : 0,
                          transform: "scale(" + isOpen ? 1 : 0.5 + ")",
                        }}
                      >
                        <a href="http://localhost:8000/">
                        Abertura de empresa Grátis
                        </a>
                        <a
                          href="#planos"
                          onClick={() => {
                            scrollToPlanos()
                          }}
                        >
                          Planos
                        </a>
                        <a href="http://santacontabilidade.com.br/bpo-financeiro">
                          BPO Financeiro
                        </a>
                        <a href="http://santacontabilidade.com.br/trocar-de-contador">
                          Trocar de Contador
                        </a>
                        <Arrow
                          style={arrowStyle}
                          layerSide={layerSide}
                          backgroundColor="#fff"
                          borderWidth={1}
                          borderColor="#06606B"
                          roundness={0.5}
                        />
                      </div>
                    )}
                  </Transition>
                )}
                placement={{
                  anchor: "BOTTOM_CENTER",

                  autoAdjust: true,

                  triggerOffset: 10
                }}
                closeOnOutsideClick
              >
                {({ triggerRef, toggle }) => (
                  <a className="btn-blog" ref={triggerRef} onClick={toggle}>
                    Serviços
                  </a>
                )}
              </ToggleLayer>
                <Link to={"/blog"} className="btn-blog">
                  Blog
                </Link>
                <a href="http://localhost:8000/">
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
      </Headroom>
    </div>
  )
}

export default Header
