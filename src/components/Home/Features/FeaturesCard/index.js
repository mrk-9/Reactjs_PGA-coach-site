import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'
import Svg from '../../../common/Svg'

export const TravelCardWrapper = styled.div`
  padding: 10px;
`

export const TextContainer = styled.div`
  padding: 0 20px;
  text-align: center;
  margin-bottom: 40px;
`
export const Title = styled.div`
  font-size: 24px;
  font-weight: 400;
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
  font-size: 14px;
  line-height: 1.5;
  color: ${p => p.theme.colors.white};
  @media screen and (min-width: 1025px) {
    font-size: 18px;
    margin-bottom: 23px;
  }
`

export const Subtitle = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 1;
  color: ${p => p.theme.colors.white};
  margin: 10px 0 10px;
  @media screen and (min-width: 1025px) {
    font-size: 26px;
    margin: 30px 0 20px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin-top: 20px;
  }
`
export const ImageWrapper = styled.div`
  width: 87px;
  height: 89px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: transparent;
  path {
    stroke: ${p => p.theme.colors.white};
    stroke-width: 4px;
  }
`

const FeaturesCard = props => {
  return (
    <TravelCardWrapper>
      <TextContainer>
        <ImageWrapper>
          <Svg
            d={props.node.frontmatter.icon}
            width={props.node.frontmatter.width}
            height={props.node.frontmatter.height}
            stroke='#FFF'
          />
        </ImageWrapper>
        <Subtitle>{props.node.frontmatter.title}</Subtitle>
        <Paragraph>
          <p dangerouslySetInnerHTML={{ __html: props.node.excerpt }} />
        </Paragraph>
      </TextContainer>
    </TravelCardWrapper>
  )
}

FeaturesCard.propTypes = {
  image: string,
  title: string.isRequired,
  text: string.isRequired
}

export default FeaturesCard
