import React, { useState } from 'react'
import loadable from '@loadable/component'
// import LupaGrande from '../../static/assets/lupa-grande.png'
import './PostCategoriesNav.css'

const SearchField = loadable(() => import('react-search-field'))
const onClickOutside = loadable(() => import('react-onclickoutside'))

const PostCategoriesNav = ({
  onSearchClick,
  showContabilidade,
  showEmpreendedorismo,
  showFinancas,
  showGestao,
  showAll,
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  PostCategoriesNav.handleClickOutside = () => setIsOpen(false);

  return (
    <div className="post-categories-nav">
      <div className="box">
        <button onClick={() => showAll()}>Todos os posts</button>
      </div>
      <div className="box">
        <button onClick={() => showContabilidade()}>Contabilidade</button>
      </div>
      <div className="box">
        <button onClick={() => showEmpreendedorismo()}>Empreendedorismo</button>
      </div>
      <div className="box">
        <button onClick={() => showFinancas()}>Finanças/Gestão</button>
      </div>
      <div className="box">
        <button onClick={() => showGestao()}>Tributos</button>
      </div>
      <div className="box box-full search-blog" id="search">
        <button onClick={toggle}>
          {/* <img src={LupaGrande} alt="lupa branca busca" /> */}
          Buscar
        </button>
      </div>
      <div className={isOpen ? 'search-toggle active' : 'search-toggle'} >
        <SearchField
          placeholder="Qual assunto você está procurando?"
          onChange={onSearchClick}
        />
      </div>
    </div>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => PostCategoriesNav.handleClickOutside
};

export default onClickOutside(PostCategoriesNav, clickOutsideConfig);
