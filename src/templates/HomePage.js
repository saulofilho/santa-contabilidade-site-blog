import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import HeaderSite from '../components/HeaderSite'
import Hero from '../components/Hero'
import Clientes from "../components/Clientes"
import Cards from '../components/Cards'
import Ilustra from '../components/Ilustra'
import Planos from '../components/Planos'
import Carousel from '../components/Carousel'
import Duvidas from '../components/Duvidas'
import ComoFunciona from '../components/ComoFunciona'
import Accordion from '../components/Accordion'
import FaleComAGente from '../components/FaleComAGente'
import BlogDestaques from '../components/BlogDestaques'
import VamosConversar from '../components/VamosConversar'
import Layout from '../components/Layout'
import './HomePage.css'

export const HomePageTemplate = ({
  title,
  posts = [],
  destaquesSize = 3,
}) => {

  const [allPosts, setAllPosts] = useState([...posts]);

  const postsDestaques = posts.filter(post => post.status == "Destaque")

  const postContabilidade = posts.filter(el => {
    return el.categories.map(cat => cat.category) == "Contabilidade"
  });
  
  const postsEmpreendedorismo = posts.filter(el => {
    return el.categories.map(cat => cat.category) == "Empreendedorismo"
  });
  
  const postsFinancas = posts.filter(el => {
    return el.categories.map(cat => cat.category) == "Finanças"
  });
  
  const postsGestao = posts.filter(el => {
    return el.categories.map(cat => cat.category) == "Gestão"
  });

  return (
  <Location>
    {({ location }) => {      
      return (
        <>
          <HeaderSite />
          <Hero />
          <Clientes />
          <Cards />
          <Ilustra />
          <Planos />
          <Carousel />
          <Duvidas />
          <ComoFunciona />
          <section>
            abertura de empresas
          </section>
          <Accordion />
          <VamosConversar />
          <BlogDestaques />
          <FaleComAGente />
        </>
      )
    }}
  </Location>
  )
}

const HomeIndex = ({ data: { page, posts, postCategories } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <HomePageTemplate
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

export default HomeIndex

export const pageQuery = graphql`
  ## Query for HomeIndex data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomeIndex($id: String!) {
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