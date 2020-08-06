import React from "react"
import { Link } from 'gatsby'
import './BlogDestaques.css'

const BlogDestaques = ({ 
  posts, 
  destaquesSize = 3, 
}) => {
  return (
    <section className="home-destaques-blog">
      <h1 className="container">DESTAQUES DO BLOG</h1>
      <div className="container destaques-blog">
        {posts.slice(0, destaquesSize).map((post, index) => (
          <div className="destaques-blog-wrapper" key={post + index} >
            <Link to={post.slug}>
              <div className="destaques-blog-image">
                <div className="relacionados-img">
                  <img src={post.featuredImage} alt={post.title}/>
                </div>
              </div>
              <div className="destaques-blog-infos-wrapper">
                <div className="blog-destaques-tag">
                  <p>{post.categories.map(cat => cat.category)}</p>
                </div>
                <p className="destaques-blog-titulo">{post.title}</p>
                <p className="destaques-blog-subtitulo">{post.subtitle}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BlogDestaques
