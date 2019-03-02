import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import FeaturesCard from '../FeaturesCard'
import { Row, Col } from 'reactstrap'
import { ContainerLg, Title, Placeholder } from '../../../GlobalStyles'
import { ButtonLink } from '../../../common/Links'
import styled from 'styled-components'
import theme from '../../../theme'
import DoubleArrow from '../../../../images/icons/DoubleArrow.svg'
import { prop } from 'ramda'

export const RowCentered = styled(Row)`
  justify-content: center;
`

export const FeaturesColumn = styled(Col)`
  & + & {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      top: 40px;
      left: -95px;
      width: 195px;
      height: 15px;
      background-image: url(${DoubleArrow});
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
  height: 720px;
  max-height: 100vh;
  background-color: ${p => p.theme.colors.transparent};
  align-items: flex-end;
  padding-bottom: 150px;
  position: relative;
  overflow: hidden;
  @media (max-width: 1024px) {
    max-height: 1000vh;
    height: auto;
    padding: 70px 0;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  reight: 0;
  background-color: ${p => p.theme.colors.gold};
  padding: 20px 0;
`

export const TextContainer = styled.div`
  text-align: center;
  margin-bottom: 70px;
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

class FeaturesSet extends React.Component {
  render () {
    const features = this.props.features
    return (
      <StaticQuery
        query={graphql`
          query {
            Image: file(relativePath: { eq: "Home/BackgroundCard.jpg" }) {
              ...optimizedImage
            }
          }
        `}
        render={data => (
          <BackGroundWrapper id='benefits'>
            <BackgroundImageWrapper>
              {prop('Image', data) ? (
                <Img fluid={data.Image.childImageSharp.fluid} />
              ) : (
                <Placeholder />
              )}
            </BackgroundImageWrapper>
            <ContainerLg>
              <TextContainer>
                <Title color='white'>Benefits</Title>
              </TextContainer>
              <RowCentered>
                {features.map(({ node }) => (
                  <FeaturesColumn lg='4'>
                    <FeaturesCard node={node} />
                  </FeaturesColumn>
                ))}
              </RowCentered>
              <ButtonsContainer>
                <ButtonLink
                  url='https://pgacoach.lightspeedvt.com/'
                  bgColor={theme.colors.gold}
                  borderColor={theme.colors.white}
                  color={theme.colors.white}
                  bgHoverColor={theme.colors.darkGold}
                  borderHoverColor={theme.colors.white}
                  padding='8px 15px'
                  aria-label='Get Started Here'
                >
                  Get Started Here
                </ButtonLink>
              </ButtonsContainer>
            </ContainerLg>
          </BackGroundWrapper>
        )}
      />
    )
  }
}

export default FeaturesSet
