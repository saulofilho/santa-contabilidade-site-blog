import React from 'react'
import { Link } from 'gatsby'

import BlogSearch from './BlogSearch'
import './PostCategoriesNav.css'

const PostCategoriesNav = ({ categories, enableSearch }) => (
  <div className="post-categories-nav">
    <Link className="nav-link" exact="true" to={`/`}>
      <div className="box">
      Todos
      </div>
    </Link>
    {categories.map((category, index) => (
      <Link
        exact="true"
        className="nav-link"
        key={category.title + index}
        to={category.slug}
      >
        <div className="box">
          {category.title}
        </div>
      </Link>
    ))}
    <div className="box box-full">
      {enableSearch && <BlogSearch />}
    </div>
  </div>
)

export default PostCategoriesNav
