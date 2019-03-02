import React from 'react'
import { string } from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { Placeholder } from '../../../GlobalStyles'
import theme from 'styled-theming'
import Img from 'gatsby-image'
import { prop } from 'ramda'

const boxBackgroundColor = theme('mode', {
  gold: '#b4975a',
  lightBlue: '#4F758B',
  gray: '#A2AAAD',
  yellow: '#B7BF10',
  blue: '#004F71',
  green: '#719949',
  blueGray: '#1F2A44'
})

export const StagesCardWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  background: ${p => p.theme.colors.lightGray};
  margin-bottom: 30px;
  @media (max-width: 992px) {
    flex-wrap: wrap;
  }
`

export const StagesImageWrapper = styled.div`
  width: 185px;
  flex: 0 0 185px;
  display: block;
  overflow: hidden;
  position: relative;
  @media (max-width: 1310px) and (min-width: 992px) {
    display: none;
  }
  .gatsby-image-wrapper {
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const StagesCardInner = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
  flex: 1 1 auto;
  width: auto;
  align-items: flex-start;
  padding: 20px 20px 0;
  height: 150px;
`

export const StagesCardTop = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${p => p.theme.colors.gray};
  @media (max-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const StagesCardBottom = styled.p`
  padding-top: 10px;
  font-size: 14px;
  margin: 0;
  max-width: 100%;
`
export const Subtitle = styled.div`
  font-size: 26px;
  font-weight: 300;
  line-height: 1.25;
  color: #85714d;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`
export const Label = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${p => p.theme.colors.lightBlue};
  color: #384858;
  padding-left: 10px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1310px) {
    padding-left: 10px;
  }
  @media (max-width: 768px) {
    padding-left: 30px;
  }
  @media (max-width: 420px) {
    padding-left: 10px;
  }
`

export const StagesNumber = styled.div`
  display: block;
  flex: 0 0 95px;
  background-color: ${boxBackgroundColor};
  color: ${p => p.theme.colors.white};
  font-size: 95px;
  font-weight: 300;
  line-height: 1;
  padding: 20px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  &:before {
    content: 'stage';
    display: block;
    font-size: 20px;
    text-transform: uppercase;
  }
  @media (max-width: 992px) {
    width: auto;
    flex: 1 1 auto;
  }
`

export const StagesCardColumn = styled.div`
  &:first-of-type {
    border-right: 1px solid ${p => p.theme.colors.gray};
    flex: 0 0 200px;
    max-width: 200px;
    padding: 10px 0px;
    @media (max-width: 992px) {
      flex: 0 0 200px;
      max-width: 200px;
    }
    @media (max-width: 768px) {
      flex: 0 0 calc(100% - 165px);
      max-width: calc(100% - 165px);
    }
    @media (max-width: 420px) {
      flex: 1 1 auto;
      max-width: 100%;
    }
  }
`

export const TilesLabel = styled.div`
  font-size: 11px;
  color: ${p => p.theme.colors.white};
  background-color: ${boxBackgroundColor};
  padding: 5px 15px;
  width: 87px;
  text-align: center;
  border-radius: 15px;
  align-self: center;
`

export const JustifyBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StagesCardInnerExpanded = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 345px;
`
const StagesCard = props => {
  const style = prop('style', props.node.frontmatter)
    ? props.node.frontmatter.style
    : 'gold'
  return (
    <ThemeProvider theme={{ mode: style }}>
      <StagesCardWrapper>
        <StagesNumber>
          {prop('number', props.node.frontmatter)
            ? props.node.frontmatter.number
            : ''}
        </StagesNumber>
        <StagesImageWrapper>
          {prop('featuredImage', props.node.frontmatter) ? (
            <Img
              sizes={props.node.frontmatter.featuredImage.childImageSharp.sizes}
            />
          ) : (
            <Placeholder />
          )}
        </StagesImageWrapper>
        <StagesCardInnerExpanded>
          <StagesCardInner>
            <StagesCardTop>
              <StagesCardColumn>
                <JustifyBetween>
                  <Subtitle>
                    {prop('title', props.node.frontmatter)
                      ? props.node.frontmatter.title
                      : 'Title'}
                  </Subtitle>
                </JustifyBetween>
              </StagesCardColumn>
              <StagesCardColumn>
                <Label>
                  <span>
                    {prop('stagesLine1', props.node.frontmatter)
                      ? props.node.frontmatter.stagesLine1
                      : ''}
                  </span>
                  <span>
                    {prop('stagesLine2', props.node.frontmatter)
                      ? props.node.frontmatter.stagesLine2
                      : ''}
                  </span>
                </Label>
              </StagesCardColumn>
            </StagesCardTop>
            <StagesCardBottom>
              {prop('excerpt', props.node) ? (
                <p dangerouslySetInnerHTML={{ __html: props.node.excerpt }} />
              ) : (
                ''
              )}
            </StagesCardBottom>
          </StagesCardInner>
          {prop('extraImage', props.node.frontmatter) ? (
            <Img
              sizes={props.node.frontmatter.extraImage.childImageSharp.sizes}
            />
          ) : (
            ''
          )}
        </StagesCardInnerExpanded>
      </StagesCardWrapper>
    </ThemeProvider>
  )
}

StagesCard.propTypes = {
  image: string,
  number: string,
  title: string.isRequired,
  text: string.isRequired
}

export default StagesCard
