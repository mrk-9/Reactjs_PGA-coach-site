import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/common'
import {
  BackgroundSection,
  CardsSecondary,
  Description,
  Description3,
  FeaturesSet,
  MainImage,
  ProcessSet,
  StagesSet,
  Testimonials
} from '../components/Home'

const IndexPage = ({ data = {} }) => {
  const { edges: feature } = data.features
  return (
    <Layout query={data} title='PGA.Coach'>
      <MainImage />
      <Description />
      <CardsSecondary />
      <StagesSet />
      <ProcessSet />
      <Description3 />
      <FeaturesSet features={feature} />
      <Testimonials />
      <BackgroundSection />
    </Layout>
  )
}

export const optimizedImage = graphql`
  fragment optimizedImage on File {
    childImageSharp {
      fluid(quality: 100, maxWidth: 1440) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  fragment optimizedSharpSizes on File {
    childImageSharp {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export const query = graphql`
  query imageQuery {
    features: allMarkdownRemark(
      sort: { fields: [frontmatter___order], order: ASC }
      filter: { fileAbsolutePath: { regex: "/features/" } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            icon
            order
            width
            height
          }
        }
      }
    }
  }
`

export default IndexPage
