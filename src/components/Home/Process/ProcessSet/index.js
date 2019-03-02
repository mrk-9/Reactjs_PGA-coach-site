import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import ProcessCard from '../ProcessCard'
import { Row, Col } from 'reactstrap'
import { ContainerLg, Placeholder } from '../../../GlobalStyles'
import styled from 'styled-components'
import process from './process'
import ArrowRight from '../../../../images/icons/ArrowRight.svg'
import { prop } from 'ramda'

export const ProcessColumn = styled(Col)`
  & + & {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      top: 40px;
      left: -60px;
      width: 115px;
      height: 15px;
      background-image: url(${ArrowRight});
      background-size: contain;
      background-repeat: no-repeat;
      display: block;
      @media (max-width: 1024px) {
        display: none;
      }
    }
  }
`

export const BackGroundWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 720px;
  max-height: 100vh;
  background-color: ${p => p.theme.colors.transparent};
  position: relative;
  overflow: hidden;
  @media (max-width: 1200px) {
    max-height: 1000vh;
    height: auto;
    padding: 100px 0;
  }
  @media (max-width: 1024px) {
    padding: 70px 0;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin-top: 20px;
    > span {
      margin-bottom: 15px;
    }
  }
`

export const TextContainer = styled.div`
  padding: 0 20px;
  text-align: center;
  margin-bottom: 40px;
`
export const Title = styled.div`
  font-size: 24px;
  font-weight: 300;
  line-height: 1;
  color: ${p => p.theme.colors.white};
  margin-bottom: 15px;
  @media screen and (min-width: 1025px) {
    font-size: 42px;
    margin-bottom: 23px;
  }
`

export const Paragraph = styled.p`
  margin-bottom: 15px;
  font-size: 12px;
  line-height: 1.5;
  color: ${p => p.theme.colors.white};
  font-weight: 400;
  @media screen and (min-width: 1025px) {
    font-size: 18px;
    margin-bottom: 23px;
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

export const ProcessSet = () => (
  <StaticQuery
    query={graphql`
      query {
        Image: file(relativePath: { eq: "Home/BackgroundCard2.jpg" }) {
          ...optimizedImage
        }
      }
    `}
    render={data => (
      <BackGroundWrapper id='get-started'>
        <BackgroundImageWrapper>
          {prop('Image', data) ? (
            <Img fluid={data.Image.childImageSharp.fluid} />
          ) : (
            <Placeholder />
          )}
        </BackgroundImageWrapper>
        <ContainerLg>
          <Row>
            <TextContainer
              as={Col}
              xs='12'
              md={{ size: 8, offset: 2 }}
              lg={{ size: 6, offset: 3 }}
            >
              <Title>Get Started</Title>
              <Paragraph>
                Your PGA.Coach training is quick and easy and begins HERE.
                Approximate duration two hours. Any Device: Mobile Tablet,
                Desktop. Move at your own pace, resource library etc.
              </Paragraph>
            </TextContainer>
          </Row>
          <Row>
            {process.map(item => (
              <ProcessColumn xs={12} sm={6} lg={3}>
                <ProcessCard {...item} />
              </ProcessColumn>
            ))}
          </Row>
        </ContainerLg>
      </BackGroundWrapper>
    )}
  />
)

export default ProcessSet
