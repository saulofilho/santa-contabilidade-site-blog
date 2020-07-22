import React from 'react'

import './AdCard.css'

const AdCard = ({
  title,
  slug,
  subtitle,
  ...props
}) => (
  <div className={`ad-card-content ${subtitle}`}>
      {title && 
        <p>
          {title}
        </p>
      }
      <div className="">
        <button>
          <a href={slug}>EU QUERO</a>
        </button>
      </div>
  </div>
)

export default AdCard
