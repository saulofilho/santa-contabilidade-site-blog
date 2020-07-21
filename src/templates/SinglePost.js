import React, { Fragment } from 'react'
import HeaderPost from '../components/HeaderPost'
import _get from 'lodash/get'
import { graphql } from 'gatsby'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Facebook from '../../static/assets/facebook.png'
import Whatsapp from '../../static/assets/whatsapp.png'
import Linkedin from '../../static/assets/linkedin.png'
import Twitter from '../../static/assets/twitter.png'
import './SinglePost.css'

/**
 * filter autor
 *
 * @param {posts} object
 * @param {title} string
 * @param {contentType} string
 */
export const byAutor = (posts, title, contentType) => {
  const isCategory = contentType === 'autores'
  const byAutor = post =>
    post.autor &&
    post.autor.filter(name => name.autor === title).length
  return isCategory ? posts.filter(byAutor) : posts
}

export const SinglePostTemplate = ({
  date,
  categories = [],
  title,
  subtitle,
  featuredImage,
  leitura,
  contentbody = [],
  autor = [],
  status,
  autores = [],
}) => {

  const postAutor = autor.filter(aut => aut.autorname)
  const autorInfos = autores.filter(aut => aut.title == postAutor.map(aut => aut.autorname))

  return (
    <>
      <div className="headerpost-wrapper">
        <HeaderPost />
      </div>
      <main>
        <article
          className="singlepost-wrapper"
          itemScope
          itemType="http://schema.org/BlogPosting"
        >
          <div className="singlepost-infos-wrapper">
            {categories && (
              <Fragment>
                {categories.map((cat, index) => (
                  <div
                    key={cat.category + index}
                    className="categoria"
                  >
                    <p>
                      {cat.category}
                    </p>
                  </div>
                ))}
              </Fragment>
            )}
            {title && (
              <div className="post-titulo container">
                <p itemProp="title">
                  {title}
                </p>
              </div>  
            )}
            <div className="autor-data-leitura-wrapper">
              {autor && autor.map((item, index) => (
                <div
                  className="post-info-text"
                  key={item.autorname + index}
                >
                  {item.autorname && <p>{item.autorname}</p>}
                </div>
              ))}
              {date && (
                <div className="post-info-text">
                  <time
                    itemProp="dateCreated pubdate datePublished"
                    date={date}
                  >
                    {date}
                  </time>
                </div>
              )}
              {leitura && (
                <div className="post-info-text">
                  <p itemProp="title">
                    {leitura}
                  </p>
                </div>
              )}
            </div>
          </div>
          {contentbody &&
            contentbody.length > 0 && (
              <div className="singlepost-content-wrapper">
                <section className="btns-share-left">
                  <a href="http://localhost:8000/">
                    <img src={Facebook} alt="facebook buton share"/>
                  </a>
                  <a href="http://localhost:8000/">
                    <img src={Twitter} alt="facebook buton share"/>
                  </a>
                  <a href="http://localhost:8000/">
                    <img src={Whatsapp} alt="facebook buton share"/>
                  </a>
                  <a href="http://localhost:8000/">
                    <img src={Linkedin} alt="facebook buton share"/>
                  </a>
                </section>
                {contentbody.map((item, index) => (
                  <div
                    className="container-content"
                    key={item + index}
                  >
                    {item.bodypost && <Content source={item.bodypost} />}
                    {item.greenboxlink &&
                      <div className="box-green container">
                        {item.greenboxtitle && <p>{item.greenboxtitle}</p>}
                        <button>
                          <a href={item.greenboxlink}>{item.greenboxtitlebutton}</a>
                        </button>
                      </div>
                    }
                    {item.yellowboxtitle &&
                      <a href={item.yellowboxlink}>
                        <div className="box-yellow container">
                          <p>{item.yellowboxtitle}</p>
                        </div>
                      </a>
                    }
                  </div>
                ))}
              </div>
            )
          }
          {autorInfos &&
            autorInfos.length > 0 && (
              <div className="container">
                {autorInfos.map((item, index) => (
                  <div
                    className="autor-wrapper"
                    key={item.title + index}
                  >
                      {item.featuredImage && 
                      <div className="autor-img">
                        <img src={item.featuredImage} alt={item.about} />
                      </div>
                      }
                    <div className="autor-infos-wrapper">
                      <div className="autor-texts">
                        <p className="escrito">Escrito por</p>
                        {item.title && <p className="titulo">{item.title}</p>}
                        {item.about && <p className="about">{item.about}</p>}
                      </div>
                      <div className="autor-share">
                        <p className="escrito">Curtiu? Compartilhe</p>
                        <a href="http://localhost:8000/">
                          <img src={Twitter} alt="facebook buton share" />
                        </a>
                        <a href="http://localhost:8000/">
                          <img src={Linkedin} alt="facebook buton share" />
                        </a>
                        <a href="http://localhost:8000/">
                          <img src={Whatsapp} alt="facebook buton share" />
                        </a>
                        <a href="http://localhost:8000/">
                          <img src={Facebook} alt="facebook buton share" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          }
          <div className="comentarios-wrapper">
            <p>Gostou?</p>
            <p>Deixe seu comentario</p>
          </div>
        </article>
        <section className="posts-relacionados">
          <p>POSTS RELACIONADOS</p>
          <div className="relacionados-wrapper">
            <h1>posts relacionados</h1>
            <h1>posts relacionados</h1>
            <h1>posts relacionados</h1>
          </div>
        </section>
      </main>
    </>
  )
}

const SinglePost = ({ data: { post, allPosts, autores } }) => {
  const thisEdge = allPosts.edges.find(edge => edge.node.id === post.id)
  return (
    <Layout
      meta={post.frontmatter.meta || false}
      title={post.frontmatter.title || false}
    >
      <SinglePostTemplate
        {...post}
        {...post.frontmatter}
        autores={autores.edges.map(post => ({
          ...post.node.frontmatter
        }))}
        nextPostURL={_get(thisEdge, 'next.fields.slug')}
        prevPostURL={_get(thisEdge, 'previous.fields.slug')}
      />
    </Layout>
  )
}

export default SinglePost

export const pageQuery = graphql`
  ## Query for SinglePost data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query SinglePost($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      id
      frontmatter {
        template
        date
        categories {
          category
        }
        title
        subtitle
        featuredImage
        leitura
        contentbody {
          bodypost
          greenboxtitle
          greenboxtitlebutton
          greenboxlink
          yellowboxtitle
          yellowboxlink
        }
        autor {
          autorname
        }
        status
      }
    }
    allPosts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
        }
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    autores: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "autores" } } }
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            about
            featuredImage
          }
        }
      }
    }
  }
`
