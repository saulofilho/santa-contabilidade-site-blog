import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import Header from '../components/Header'
import Destaques from "../components/Destaques"
import PostSection from '../components/PostSection'
import PostCategoriesNav from '../components/PostCategoriesNav'
import Layout from '../components/Layout'
import TypeChecker from 'typeco';
import './BlogIndex.css'

export const BlogIndexTemplate = ({
  title,
  posts = [],
  destaquesSize = 2,
}) => {

  const insertYellowAd = (arr, index, ...newItems) => [
    ...arr.slice(0, index),
    ...newItems,
    ...arr.slice(index)
  ]

  const insertGreenAd = (arr, index, ...newItems) => [
    ...arr.slice(0, index),
    ...newItems,
    ...arr.slice(index)
  ]
  
  const yellowAd = insertYellowAd(posts, 5, 
      {
        title: "CONTABILIDADE DIGITAL?",
        subtitle: "MITOS E VERDADES AGORA!",
        leitura: "yellow",
        slug: "http://santacontabilidade.com.br/blog/mitos-e-verdades",
        status: "Ad"
      }
    )

  const postsAndAds = insertGreenAd(yellowAd, 10, 
      {
        title: "FICOU COM GOSTINHO DE QUERO MAIS?",
        subtitle: "CONFIRA NOSSA PÁGINA DE MATERIAIS RICOS",
        leitura: "green",
        slug: "http://santacontabilidade.com.br/materiais",
        status: "Ad"
      }
    )

  const [allPosts, setAllPosts] = useState([...postsAndAds]);

  const postsDestaques = posts.filter(post => post.status == "Destaque")

  const postContabilidade = posts.filter(el => {
    return el.categories.map(cat => cat.category) == "Contabilidade"
  });
  
  const postsEmpreendedorismo = posts.filter(el => {
    return el.categories.map(cat => cat.category) == "Empreendedorismo"
  });
  
  const postsFinancasGestao = posts.filter(el => {
    return el.categories.map(cat => cat.category) == "Finanças" || el.categories.map(cat => cat.category) == "Gestão"
  });
  
  const postsTributos = posts.filter(el => {
    return el.categories.map(cat => cat.category) == "Tributos"
  });

  const showContabilidade = () => {
    setAllPosts(postContabilidade)
  }

  const showEmpreendedorismo = () => {
    setAllPosts(postsEmpreendedorismo)
  }
  
  const showFinancas = () => {
    setAllPosts(postsFinancasGestao)
  }
  
  const showGestao = () => {
    setAllPosts(postsTributos)
  }
  
  const showAll = () => {
    setAllPosts([...posts])
  }

  const getMatchedList = (searchText) => {
    if (TypeChecker.isEmpty(searchText)) return posts;
    return posts.filter(post => post.title.toLowerCase().includes(searchText.toLowerCase()));
  };

  const onSearchClick = (value) => {
    setAllPosts(getMatchedList(value))
  }

  return (
  <Location>
    {({ location }) => {      
      return (
        <>
          <Header />
          <div className="blog">
            <section className="destaques">
              <div className="container">
                <h1>Destaques</h1>
                <div className="destaques-wrapper">
                  {postsDestaques.slice(0, destaquesSize).map((post, index) => (
                    <Destaques key={post + index} post={post} />
                  ))}
                </div>
              </div>
            </section>
            <main>
              <section className="container">
                <h1>Conteúdo por categorias</h1>
                <PostCategoriesNav 
                  onSearchClick={onSearchClick} 
                  showContabilidade={showContabilidade}
                  showEmpreendedorismo={showEmpreendedorismo}
                  showFinancas={showFinancas}
                  showGestao={showGestao}
                  showAll={showAll}
                />
              </section>
              {!!posts.length && (
                <section className="container">
                  <h1>Todos os posts</h1>
                  <PostSection posts={allPosts} />
                </section>
              )}
            </main>
          </div>
        </>
      )
    }}
  </Location>
  )
}

const BlogIndex = ({ data: { page, posts, postCategories } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <BlogIndexTemplate
      {...page}
      {...page.fields}
      {...page.frontmatter}
      posts={posts.edges.map(post => ({
        ...post.node,
        ...post.node.frontmatter,
        ...post.node.fields
      }))}
      postCategories={postCategories.edges.map(post => ({
        ...post.node,
        ...post.node.frontmatter,
        ...post.node.fields
      }))}
    />
  </Layout>
)

export default BlogIndex

export const pageQuery = graphql`
  ## Query for BlogIndex data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query BlogIndex($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      fields {
        contentType
      }
      frontmatter {
        template
        title
      }
    }
    posts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
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
      }
    }
    postCategories: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "postCategories" } } }
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`