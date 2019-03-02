import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Placeholder } from '../../GlobalStyles'
import Img from 'gatsby-image'
import { MainBgImage } from '../../common'
import styled from 'styled-components'
import { prop } from 'ramda'

export const Subtitle = styled.div`
  width: 100%;
  color: #ffffff
  font-size: 30px;
  font-weight: 400;
  text-align: center;

  @media screen and (min-width: 1025px) {
    font-size: 42px;
  }
`
export const BackgroundImageWrapper = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  min-height: 720px;
  min-width: 1440px;
  z-index: -1;
  height: 100%;
  .gatsby-image-wrapper {
    height: 100%;
  }
`

export const HomeMainImage = () => (
  <StaticQuery
    query={graphql`
      query {
        Image: file(relativePath: { eq: "Home/MainBgImage.jpg" }) {
          ...optimizedImage
        }
      }
    `}
    render={data => (
      <MainBgImage
        title='The Future of Coaching'
        height={840}
        position='flex-end'
      >
        <BackgroundImageWrapper>
          {prop('Image', data) ? (
            <Img fluid={data.Image.childImageSharp.fluid} />
          ) : (
            <Placeholder />
          )}
        </BackgroundImageWrapper>
      </MainBgImage>
    )}
  />
)

export default HomeMainImage
