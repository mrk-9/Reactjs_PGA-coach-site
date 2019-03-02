import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Row, Col } from 'reactstrap'
import PropTypes from 'prop-types'
import { Title, Paragraph, Placeholder } from '../../GlobalStyles'
import styled from 'styled-components'
import { ButtonLink } from '../../common/Links'
import theme from '../../theme'
import Img from 'gatsby-image'
import { prop } from 'ramda'

export const SetWrapper = styled.div`
  text-align: center;
  width: 100%;
`

export const CardWrapper = styled.div`
  background-color: ${p => p.theme.colors.white};
  position: relative;
`

export const CardInner = styled.strong`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 47%;
  max-width: 750px;
  width: 75%;
  min-width: 530px;
  @media screen and (max-width: 1275px) {
    top: 20%;
    min-width: 415px;
  }
  @media screen and (max-width: 1024px) {
    top: 25%;
    min-width: 330px;
  }
  @media screen and (max-width: 768px) {
    top: 60%;
    transform: translate(-50%, -50%);
    min-width: 330px;
  }
  @media screen and (max-width: 480px) {
    top: 50%;
    width: 90%;
    min-width: 0px;
  }
  > img {
    max-width: 100%;
  }
`

export const CardCol = styled(Col)`
  &:first-of-type {
    ${CardInner} {
      top: 63%;
      @media screen and (max-width: 480px) {
        top: 55%;
        width: 90%;
      }
    }
  }
`

export const TitleWhite = styled(Title)`
  color: ${p => p.theme.colors.white};
`

export const ParagraphWhite = styled(Paragraph)`
  color: ${p => p.theme.colors.white};
`
export const ButtonsContainer = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${p => p.theme.colors.lightBlue};
  padding: 20px 0;
`

export const CardsSecondary = () => (
  <StaticQuery
    query={graphql`
      query {
        TilesLg: file(relativePath: { eq: "Home/Card-lg.jpg" }) {
          ...optimizedImage
        }
        Tiles1: file(relativePath: { eq: "Home/Card3.jpg" }) {
          ...optimizedImage
        }
        Tiles2: file(relativePath: { eq: "Home/Card4.jpg" }) {
          ...optimizedImage
        }
        BrandImages: file(relativePath: { eq: "Home/BrandImages.png" }) {
          ...optimizedImage
        }
      }
    `}
    render={data => (
      <Fragment>
        <SetWrapper>
          <Row noGutters>
            <CardCol xs='12'>
              <CardWrapper>
                {prop('TilesLg', data) ? (
                  <Img fluid={data.TilesLg.childImageSharp.fluid} />
                ) : (
                  <Placeholder />
                )}
                <CardInner>
                  <Title color='white'>Why Does ADM Work?</Title>
                  <Paragraph color='white'>
                    American Development Model was designed by sports scientists
                    to help support a lifetime affinity to sports, and to
                    develop athletes to their greatest potential. These
                    principles align physical and psychological development to
                    stages, delivering appropriate skills and exercise at the
                    appropriate time.
                  </Paragraph>
                </CardInner>
              </CardWrapper>
            </CardCol>
            <CardCol xs='12' md='6'>
              <CardWrapper>
                {prop('Tiles1', data) ? (
                  <Img fluid={data.Tiles1.childImageSharp.fluid} />
                ) : (
                  <Placeholder />
                )}
                <CardInner>
                  <Title color='white'>How Does ADM Work?</Title>
                  <Paragraph color='white'>
                    Creating positive experiences early, for all athletes, will
                    keep more players engaged and retained in our sport.
                    Introducing the right aspects of play in a structure that is
                    fun, engaging, and progressively challenging, allows golfers
                    of all ages to experience the challenges and joys of our
                    sport.
                  </Paragraph>
                </CardInner>
              </CardWrapper>
            </CardCol>
            <CardCol xs='12' md='6'>
              <CardWrapper>
                {prop('Tiles2', data) ? (
                  <Img fluid={data.Tiles2.childImageSharp.fluid} />
                ) : (
                  <Placeholder />
                )}
                <CardInner>
                  <Title color='white'>What Is The ADM?</Title>
                  <Paragraph color='white'>
                    Golf's new pathway is built on the principles of the
                    American Development Model (ADM), a proven, long-term
                    athlete development model that has been successfully applied
                    to USA Hockey, USOC, USA Basketball and USA Lacrosse.
                  </Paragraph>
                  {prop('BrandImages', data) ? (
                    <Img fluid={data.BrandImages.childImageSharp.fluid} />
                  ) : (
                    ''
                  )}
                </CardInner>
              </CardWrapper>
            </CardCol>
          </Row>
          <Row noGutters>
            <ButtonsContainer>
              <ButtonLink
                url='https://pgacoach.lightspeedvt.com/'
                bgColor={theme.colors.lightBlue}
                borderColor={theme.colors.white}
                color={theme.colors.white}
                bgHoverColor={theme.colors.lightBlue}
                borderHoverColor={theme.colors.white}
                padding='8px 15px'
                aria-label='Get Started Here'
              >
                Get Started Here
              </ButtonLink>
            </ButtonsContainer>
          </Row>
        </SetWrapper>
      </Fragment>
    )}
  />
)

Row.propTypes = {
  noGutters: PropTypes.bool,
  form: PropTypes.bool
}

export default CardsSecondary
