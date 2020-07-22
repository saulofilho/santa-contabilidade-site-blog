import React from "react"
import { Link } from 'gatsby'
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
          <p>{post.date}</p>
          <p>{post.leitura}</p>
        </div>
      </div>
    </Link>
  </div>
)

export default Destaques
