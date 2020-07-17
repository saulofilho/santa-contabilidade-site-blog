import React, { Fragment } from 'react'
import _get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import { ChevronLeft } from 'react-feather'

import Content from '../components/Content'
import Layout from '../components/Layout'
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
  autor,
  status,
  nextPostURL,
  prevPostURL,
  autores = [],
}) => {
  // let filteredPosts =
  //   posts && !!posts.length
  //     ? byAutor(posts, title, contentType)
  //     : []

  console.log('autores', autores)
  console.log('autor', autor)
  

  const postDestaque = autor.filter(aut => aut.autorname == "Saulo Filho")
  const xxx = postDestaque.map(aut => aut.autorname)
  // console.log('filter', xxx)

  return (
    <main>
      <article
        className="SinglePost section light"
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        <div className="container skinny">
          <Link className="SinglePost--BackButton" to="/blog/">
            <ChevronLeft /> BACK
        </Link>
          <div className="SinglePost--Content relative">
            <div className="SinglePost--Meta">
              {date && (
                <time
                  className="SinglePost--Meta--Date"
                  itemProp="dateCreated pubdate datePublished"
                  date={date}
                >
                  {date}
                </time>
              )}
              {categories && (
                <Fragment>
                  <span>|</span>
                  {categories.map((cat, index) => (
                    <span
                      key={cat.category}
                      className="SinglePost--Meta--Category"
                    >
                      {cat.category}
                      {/* Add a comma on all but last category */}
                      {index !== categories.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </Fragment>
              )}
            </div>

            {date && (
              <h1 className="SinglePost--Title" itemProp="title">
                {date}
              </h1>
            )}

            {title && (
              <h1 className="SinglePost--Title" itemProp="title">
                {title}
              </h1>
            )}

            {subtitle && (
              <h1 className="SinglePost--Title" itemProp="title">
                {subtitle}
              </h1>
            )}

            {featuredImage && (
              <img src={featuredImage} alt={title} />
            )}

            {leitura && (
              <h1 className="SinglePost--Title" itemProp="title">
                {leitura}
              </h1>
            )}

            {status && (
              <h1 className="SinglePost--Title" itemProp="title">
                {status}
              </h1>
            )}

            {/* {autor &&
              autor.length > 0 && (
                <div className="">
                  {autor.map((item, index) => (
                    <div
                      className=""
                      key={item.autorname + index}
                    >
                      <div>
                        {item.autorname && <p>{item.autorname}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              )
            } */}

            {/* {autores &&
              autores.length > 0 && (
                <div className="">
                  {autores.map((item, index) => (
                    <div
                      className=""
                      key={item.title + index}
                    >
                      <div>
                        {item.title && <p>{item.title}</p>}
                        {item.about && <p>{item.about}</p>}
                        {item.featuredImage && <img src={item.featuredImage} alt={item.about} />}
                      </div>
                    </div>
                  ))}
                </div>
              )
            } */}

            {contentbody &&
              contentbody.length > 0 && (
                <div className="SinglePost--InnerContent">
                  {contentbody.map((item, index) => (
                    <div
                      className=""
                      key={item + index}
                    >
                      {item.bodypost && <Content source={item.bodypost} />}
                      {item.greenboxlink &&
                        <div className="box-green">
                          {item.greenboxtitle && <p>{item.greenboxtitle}</p>}
                          <button>
                            <a href={item.greenboxlink}>{item.greenboxtitlebutton}</a>
                          </button>
                        </div>
                      }
                      {item.yellowboxtitle &&
                        <div className="box-yellow">
                          <p>{item.yellowboxtitle}</p>
                        </div>
                      }
                    </div>
                  ))}
                </div>
              )
            }

            <div className="SinglePost--Pagination">
              {prevPostURL && (
                <Link
                  className="SinglePost--Pagination--Link prev"
                  to={prevPostURL}
                >
                  Previous Post
                </Link>
              )}
              {nextPostURL && (
                <Link
                  className="SinglePost--Pagination--Link next"
                  to={nextPostURL}
                >
                  Next Post
                </Link>
              )}
            </div>
          </div>
        </div>
      </article>
    </main>
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
