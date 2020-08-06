import React, { useState } from 'react'
import { graphql } from 'gatsby'
import HeaderSite from '../components/HeaderSite'
import Hero from '../components/Hero'
import Clientes from "../components/Clientes"
import Cards from '../components/Cards'
import Ilustra from '../components/Ilustra'
import Planos from '../components/Planos'
import Carousel from '../components/Carousel'
import Duvidas from '../components/Duvidas'
import ComoFunciona from '../components/ComoFunciona'
import AccordionComponent from '../components/AccordionComponent'
import FaleComAGente from '../components/FaleComAGente'
import BlogDestaques from '../components/BlogDestaques'
import VamosConversar from '../components/VamosConversar'
import AberturaEmpresa from '../components/AberturaEmpresa'
import Layout from '../components/Layout'
import './HomePage.css'

export const HomePageTemplate = ({
  posts = []
}) => {

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
      <AberturaEmpresa />
      <AccordionComponent />
      <VamosConversar />
      <BlogDestaques posts={posts} />
      <FaleComAGente />
    </>
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