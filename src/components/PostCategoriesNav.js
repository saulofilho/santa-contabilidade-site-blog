import React from 'react'
import './PostCategoriesNav.css'
import loadable from '@loadable/component'

const SearchField = loadable(() => import('react-search-field'))

const PostCategoriesNav = ({
  onSearchClickExample,
  showContabilidade,
  showEmpreendedorismo,
  showFinancas,
  showGestao,
  showAll,
}) => (
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
      <SearchField
        placeholder=""
        onChange={onSearchClickExample}
      />
    </div>
  </div>
)

export default PostCategoriesNav
