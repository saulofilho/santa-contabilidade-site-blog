const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  siteMetadata: {
    title: 'Santa Contabilidade | Blog',
    siteUrl: 'https://santacontabilidade-blog.netlify.app/'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-123456',
        includeInDevelopment: false
      }
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        runtimeCaching: [
          {
            urlPattern: /(\.js$|\.css$|static\/)/,
            handler: `cacheFirst`
          },
          {
            urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `staleWhileRevalidate`
          },
        ],
        skipWaiting: true,
        clientsClaim: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'santacontabilidade',
        short_name: 'santacontabilidade-blog',
        start_url: '/',
        background_color: '#00C2BD',
        theme_color: '#00C2BD',
        display: 'standalone',
        icon: `${__dirname}/static/images/logo-vertical.png`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false
            }
          },
          `gatsby-remark-responsive-iframe`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          postcssPresetEnv({
            browsers: '> 0.5%, last 2 versions, ie 11'
          })
        ]
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)({
            browsers: '> 0.5%, last 2 versions, ie 11'
          })
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: 'white',
        showSpinner: false
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `https-santacontabilidade-blog-netlify-app`
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        stylesPath: `${__dirname}/src/cms/admin.css`,
        enableIdentityWidget: true
      }
    },
    'gatsby-plugin-netlify'
  ]
}
