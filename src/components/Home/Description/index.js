import React from 'react'
import Img from 'gatsby-image'
import { Container, Row, Col } from 'reactstrap'
import { Heading, Subheading, Paragraph, Section } from '../../GlobalStyles'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { prop } from 'ramda'

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 650px;
  flex-wrap: nowrap;
  margin: 100px auto 0;
  img {
    max-width: 100%;
  }
  @media (max-width: 576px) {
    margin: 40px auto 0;
    flex-wrap: wrap;
    img {
      transform: scale(0.7);
    }
  }
`

export const RowCentered = styled(Row)`
  justify-content: center;
`
export const ImageItem = styled.div`
  padding: 0 15px;
  flex: 0 1 14%;
  @media (max-width: 576px) {
    width: 100%;
    flex: 0 1 100%;
    text-align: center;
  }
`

export const TextContainer = styled.div`
  text-align: center;
  color: ${p => p.theme.colors.blueGray};
  padding-left: 30px;
  padding-right: 30px;
`

export const VideoWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
  margin-top: 40px;
  &:before {
    display: block;
    content: '';
    padding-top: 56.25%;
  }
  iframe {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`

export const Subtitle = styled.div`
  font-size: 18px;
  margin-top: 18px;
  font-weight: 300;
  text-align: center;
  color: ${p => p.theme.colors.black};
  @media screen and (min-width: 1025px) {
    font-size: 24px;
  }
`

const Video = ({ src }) => (
  <iframe
    allowFullScreen
    frameborder='0'
    width='640'
    height='360'
    src={src}
    title='PGA Coaching Platform, hosted by Bill Cowher'
    webkitallowfullscreen
    mozallowfullscreen
  />
)

const Description = props => (
  <StaticQuery
    query={graphql`
      query {
        brandLogos: allFile(filter: { absolutePath: { regex: "/GridLogo/" } }) {
          edges {
            node {
              ...optimizedImage
            }
          }
        }
      }
    `}
    render={data => (
      <Section id='adm'>
        <Container>
          <RowCentered>
            <TextContainer as={Col} xs='12' md='9'>
              <Heading>Welcome to PGA.Coach</Heading>
              <Subheading>
                Bringing the American Development Model to golf
              </Subheading>
              <Paragraph>
                Let's maximize each athlete's potential; create well-rounded
                athletes and develop principles that create life-long golfers
                and athletes for generations. Now is the time to start your
                journey with PGA.Coach training, and gain access to all of the
                tools you need to create passionate students and life-long
                golfers.
              </Paragraph>
            </TextContainer>
          </RowCentered>
          <RowCentered>
            <VideoWrapper as={Col} xs='12' md='7' lg='5'>
              <Video src='https://player.vimeo.com/video/307296703' />
            </VideoWrapper>
          </RowCentered>
          <ImageContainer>
            {data.brandLogos.edges.map(({ node }) => (
              <ImageItem>
                {prop('childImageSharp', node) ? (
                  <Img fluid={node.childImageSharp.fluid} />
                ) : (
                  ''
                )}
              </ImageItem>
            ))}
          </ImageContainer>
        </Container>
      </Section>
    )}
  />
)

export default Description
