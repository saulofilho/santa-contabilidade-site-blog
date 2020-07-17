import React from "react"
import { Link } from 'gatsby'
import './Destaques.css'

const Destaques = ({ post }) => (
  <div className="destaque-item">
    <Link to={post.slug}>
      <p>{post.categories.map(cat => cat.category)}</p>
      <div className="destaque-image">
          <div
            className="image"
            style={{
              backgroundImage: `url(${post.featuredImage})`
            }}
            alt={post.title}
          />
      </div>
      <p>{post.title}</p>
      <p>{post.date}</p>
      <p>{post.leitura}</p>
    </Link>
  </div>
)

export default Destaques
