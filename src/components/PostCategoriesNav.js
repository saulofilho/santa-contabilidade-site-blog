import React, { useState } from 'react'
import loadable from '@loadable/component'
import LupaGrande from '../../static/assets/lupa-grande.png'
import './PostCategoriesNav.css'

const SearchField = loadable(() => import('react-search-field'))

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

  // const clickOutsideConfig = {
  //   handleClickOutside: () => PostCategoriesNav.handleClickOutside
  // };

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
        <button onClick={() => showFinancas()}>Finanças</button>
      </div>
      <div className="box">
        <button onClick={() => showGestao()}>Gestão</button>
      </div>
      <div className="box box-full search-blog" id="search">
        <button onClick={toggle}>
          <img src={LupaGrande} alt="lupa branca busca" />
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

export default PostCategoriesNav
