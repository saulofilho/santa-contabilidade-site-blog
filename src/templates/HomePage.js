import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import Header from '../components/Header'
import Destaques from "../components/Destaques"
import PostSection from '../components/PostSection'
import PostCategoriesNav from '../components/PostCategoriesNav'
import Layout from '../components/Layout'
import TypeChecker from 'typeco';
import './HomePage.css'

export const HomePageTemplate = ({
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
        title: "CONTABILIDADE ONLINE?",
        subtitle: "MITOS E VERDADES AGORA!",
        leitura: "yellow",
        slug: "http://localhost:8000/",
        status: "Ad"
      }
    )

  const postsAndAds = insertGreenAd(yellowAd, 10, 
      {
        title: "FICOU COM GOSTINHO DE QUERO MAIS?",
        subtitle: "CONFIRA NOSSA PÁGINA DE MATERIAIS RICOS",
        leitura: "green",
        slug: "http://localhost:8000/",
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
  
  const postsFinancas = posts.filter(el => {
    return el.categories.map(cat => cat.category) == "Finanças"
  });
  
  const postsGestao = posts.filter(el => {
    return el.categories.map(cat => cat.category) == "Gestão"
  });

  const showContabilidade = () => {
    setAllPosts(postContabilidade)
  }

  const showEmpreendedorismo = () => {
    setAllPosts(postsEmpreendedorismo)
  }
  
  const showFinancas = () => {
    setAllPosts(postsFinancas)
  }
  
  const showGestao = () => {
    setAllPosts(postsGestao)
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
          <div className="home">
            <h1>HOME PAGE</h1>
          </div>
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