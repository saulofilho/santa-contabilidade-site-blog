import React from "react"
import { Link } from 'gatsby'
import Calendario from '../../static/assets/calendario-branco.png'
import Relogio from '../../static/assets/relogio-branco.png'
import './Destaques.css'

const Destaques = ({ post }) => (
  <div className="destaque-item">
    <Link to={post.slug}>
      <div className="destaque-image">
        <div
          className="image"
          style={{
            backgroundImage: `url(${post.featuredImage})`
          }}
          alt={post.title}
        />
      </div>
      <div className="destaque-infos-wrapper">
        <div className="categoria-tag">
          <p>{post.categories.map(cat => cat.category)}</p>
        </div>
        <p className="destaque-titulo">{post.title}</p>
        <div className="data-leitura-wrapper">
          <img src={Calendario} alt="calendario icon"/>
          <p>{post.date}</p>
          <img src={Relogio} alt="relogio icon"/>
          <p>{post.leitura}</p>
        </div>
      </div>
    </Link>
  </div>
)

export default Destaques
