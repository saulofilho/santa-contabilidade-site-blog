import React from 'react'
import { Link } from 'gatsby'

import Image from './Image'
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
      <div className="post-card-image relative">
        <Image background src={featuredImage} alt={title} />
      </div>
    )}
    <div className="post-card-content">
      <div className="post-card-category">
        {categories && categories.map(cat => cat.category).join(', ')}
      </div>
      {title && 
        <p>
          {title}
        </p>
      }
      {subtitle && 
        <p>
          {subtitle}
        </p>
      }
      <div className="date-leitura-wrapper">
        {date && 
          <p>
            {date}
          </p>
        }
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
