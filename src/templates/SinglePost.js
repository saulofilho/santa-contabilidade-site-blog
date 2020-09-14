import React, { Fragment } from 'react'
import HeaderPost from '../components/HeaderPost'
import { graphql, Link} from 'gatsby'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Facebook from '../../static/assets/facebook.png'
import Whatsapp from '../../static/assets/whatsapp.png'
import Linkedin from '../../static/assets/linkedin.png'
import Twitter from '../../static/assets/twitter.png'
import Calendario from '../../static/assets/autor-calendario.png'
import Relogio from '../../static/assets/autor-relogio.png'
import Autor from '../../static/assets/autor.png'
import WhiteLine from '../../static/assets/line.png'
import { LinkedinShareButton } from "react-share";
import { Disqus } from 'gatsby-plugin-disqus'
import './SinglePost.css'

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
  allPosts = [],
  destaquesSize = 3,
  fields
}) => {

  const postAutor = autor.filter(aut => aut.autorname)

  const autorInfos = autores.filter(aut => aut.title == postAutor.map(aut => aut.autorname))

  const postCategories = categories.map(cat => cat.category)

  const relatedPosts = allPosts.filter(el => {
    return el.categories.map(cat => cat.category) == postCategories[0]
  });

  const relatedPostsShuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  let disqusConfig = {
    identifier: title,
  }

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
            <span className="white-line">
              <img src={WhiteLine} alt="linha branca separando divs"/>
            </span>
            <div className="autor-data-leitura-wrapper">
              {autor && autor.map((item, index) => (
                <div
                  className="post-info-text"
                  key={item.autorname + index}
                >
                  <img src={Autor} alt="autor icon"/>
                  {item.autorname && <p>{item.autorname}</p>}
                </div>
              ))}
              {date && (
                <div className="post-info-text">
                  <img src={Calendario} alt="calendario icon"/>
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
                  <img src={Relogio} alt="relogio icon"/>
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
                  <div 
                    className="fb-share-button" 
                    data-href="https://developers.facebook.com/docs/plugins/" 
                    data-layout="button" data-size="small">
                      <a 
                        target="_blank" 
                        rel="noreferrer" 
                        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" 
                        className="fb-xfbml-parse-ignore"
                      >
                        <img src={Facebook} alt="facebook buton share"/>
                      </a>
                  </div>
                  <a 
                    target='_blank'
                    rel="noreferrer" 
                    href="https://twitter.com/share?ref_src=twsrc%5Etfw" 
                    className="twitter-share-button" 
                    data-show-count="false"
                  >
                    <img src={Twitter} alt="twitter buton share"/>
                  </a>
                  <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                  <a 
                    target='_blank'
                    rel="noreferrer" 
                    href="https://wa.me/5548984289990?text=SantaContabilidade"
                  >
                    <img src={Whatsapp} alt="whatsapp buton share"/>
                  </a>
                  <LinkedinShareButton url={fields} className="Demo__some-network__share-button">
                    <img src={Linkedin} alt="facebook buton share"/>
                  </LinkedinShareButton>
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
                          <a href={item.greenboxlink}>
                            <button>
                                {item.greenboxtitlebutton}
                            </button>
                          </a>
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
        <div className="post-form">
          <p className="post-form-title">
            ASSINE NOSSA NEWSLETTER E
            <br/>
            <strong>GANHE CONTEÚDOS EXCLUSIVOS</strong>
          </p>
          <form action="https://paginas.rocks/Pages/Index/460771" method="post" target='_blank'>  
            <input id="id" name="id" type="hidden" value="460771" />  
            <input id="pid" name="pid" type="hidden" value="16429160" />  
            <input id="list_id" name="list_id" type="hidden" value="460771" />  
            <input id="provider" name="provider" type="hidden" value="leadlovers" />   
            <input className="form-control form-ll" id="email" name="email" placeholder="Seu email" type="text" />  
            <button className="btn btn-danger" type="submit">EU QUERO!</button>  
            <input type="hidden" id="source" name="source" value="" />  
          </form>
        </div>
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
                        {item.title && item.linkedin &&
                          <a href={item.linkedin}>
                            <p className="titulo">{item.title}</p>
                          </a>
                        }
                        {item.about && <p className="about">{item.about}</p>}
                      </div>
                      <div className="autor-share">
                        <p className="escrito">Curtiu? Compartilhe</p>
                        <a
                          target='_blank'
                          rel="noreferrer" 
                          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                          className="twitter-share-button"
                          data-show-count="false"
                        >
                          <img src={Twitter} alt="twitter buton share" />
                        </a>
                        <LinkedinShareButton url={fields} className="Demo__some-network__share-button">
                          <img src={Linkedin} alt="facebook buton share" />
                        </LinkedinShareButton>
                        <a
                          target='_blank'
                          rel="noreferrer" 
                          href="https://wa.me/5548984289990?text=SantaContabilidade"
                        >
                          <img src={Whatsapp} alt="whatsapp buton share" />
                        </a>
                        <div
                          className="fb-share-button"
                          data-href="https://developers.facebook.com/docs/plugins/"
                          data-layout="button" data-size="small">
                          <a
                            target="_blank"
                            rel="noreferrer" 
                            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                            className="fb-xfbml-parse-ignore"
                          >
                            <img src={Facebook} alt="facebook buton share" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          }
        </article>
        <div className="comentarios-wrapper container">
          <p>Gostou? Deixe seu comentário</p>
          <Disqus config={disqusConfig} />
        </div>
        <section className="posts-relacionados">
          <p className="container posts-relacionados-title">POSTS RELACIONADOS</p>
          <div className="container">
          {relatedPosts &&
              relatedPosts.length > 0 && (
                <div className="relacionados-wrapper">
                  {relatedPostsShuffle(relatedPosts).slice(0, destaquesSize).map((item, index) => (
                    <div
                      className="relacionados-item"
                      key={item + index}
                    >
                      <div className="relacionados-img">
                        <img src={item.featuredImage} alt={item.title}/>
                      </div>
                      <div className="relacionados-content">
                        <div className="related-tag">
                          {categories.map((cat, index) => (
                            <div
                              key={cat.category + index}
                              className="related-categoria"
                            >
                              <p>
                                {cat.category}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="related-titulo">
                          <p>{item.title}</p>
                        </div>
                        <div className="related-subtitulo">
                          <p>{item.subtitle}</p>
                        </div>
                        <div className="related-button">
                          <Link to={item.slug}>
                            <button>
                              LER AGORA
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            }
          </div>
        </section>
      </main>
    </>
  )
}

const SinglePost = ({ data: { post, allPosts, autores } }) => {
  return (
    <Layout
      meta={post.frontmatter.meta || false}
      title={post.frontmatter.title || false}
    >
      <SinglePostTemplate
        {...post}
        {...post.frontmatter}
        {...post.fields}
        autores={autores.edges.map(post => ({
          ...post.node.frontmatter
        }))}
        allPosts={allPosts.edges.map(post => ({
          ...post.node.frontmatter,
          ...post.node.fields
        }))}
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
      fields {
        slug
      }
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
          fields {
            slug
          }
          frontmatter {
            date
            categories {
              category
            }
            title
            subtitle
            featuredImage
            leitura
            status
          }
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
            linkedin
            featuredImage
          }
        }
      }
    }
  }
`
