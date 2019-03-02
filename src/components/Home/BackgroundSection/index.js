import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { prop } from 'ramda'
import { Placeholder } from '../../GlobalStyles'

export const BackgroundSection = () => (
  <StaticQuery
    query={graphql`
      query {
        BottomImage: file(relativePath: { eq: "Home/BackgroundSection.jpg" }) {
          ...optimizedImage
        }
      }
    `}
    render={data =>
      prop('BottomImage', data) ? (
        <Img fluid={data.BottomImage.childImageSharp.fluid} />
      ) : (
        <Placeholder />
      )
    }
  />
)

export default BackgroundSection
