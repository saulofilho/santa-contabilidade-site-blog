import React from 'react'
import { Link } from 'gatsby'
import Calendario from '../../static/assets/calendario-verde.png'
import Relogio from '../../static/assets/relogio-verde.png'

import './PostCard.css'

const PostCard = ({
  featuredImage,
  title,
  subtitle,
  date,
  leitura,
  slug,
  categories = [],
  className = '',
  ...props
}) => (
  <Link to={slug} className={`post-card ${className}`}>
    {featuredImage && (
      <div className="post-card-image">
        <img src={featuredImage} alt={title} />
      </div>
    )}
    <div className="post-card-content">
      <div className="post-card-category">
        <p>
          {categories && categories.map(cat => cat.category)}
        </p>
      </div>
      {title && 
        <p className="blog-post-titulo">
          {title}
        </p>
      }
      {subtitle && 
        <p className="blog-post-subtitulo">
          {subtitle}
        </p>
      }
      <div className="date-leitura-wrapper">
        <img src={Calendario} alt="calendario icon"/>
        {date && 
          <p>
            {date}
          </p>
        }
        <img src={Relogio} alt="relogio icon"/>
        {leitura && 
          <p>
            {leitura}
          </p>
        }
      </div>
    </div>
  </Link>
)

export default PostCard
