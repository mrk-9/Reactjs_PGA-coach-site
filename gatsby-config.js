require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: 'PGA Coach',
    description: 'The Future of Coaching',
    algolia: {
      appId: process.env.ALGOLIA_APP_ID ? process.env.ALGOLIA_APP_ID : '',
      searchOnlyApiKey: process.env.ALGOLIA_SEARCH_API_KEY
        ? process.env.ALGOLIA_SEARCH_API_KEY
        : '',
      indexName: process.env.ALGOLIA_INDEX_NAME
        ? process.env.ALGOLIA_INDEX_NAME
        : ''
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/stages`,
        name: 'stages'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/features`,
        name: 'features'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'pga-coach',
        short_name: 'pga-coach',
        start_url: '/',
        background_color: '#00234b',
        theme_color: '#00234b',
        display: 'minimal-ui',
        icon: 'src/favicon.png', // This path is relative to the root of the site.
        legacy: true,
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato:300, 400,700']
        }
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-MLC2C56',
        includeInDevelopment: false
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    }
  ]
}
