import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'
import { ButtonLink } from '../../../common/Links'
import theme from '../../../theme'
import Svg from '../../../common/Svg'

export const ProcessCardWrapper = styled.div`
  padding: 10px;
`

export const TextContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
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
  font-size: 14px;
  line-height: 1.5;
  color: ${p => p.theme.colors.white};

  a {
    color: ${p => p.theme.colors.white};
    text-decoration: underline;
    &:hover {
      color: ${p => p.theme.colors.white};
      text-decoration: none;
    }
  }
  @media screen and (min-width: 992px) {
    min-height: 135px;
  }
  @media screen and (min-width: 1025px) {
    font-size: 15px;
    margin-bottom: 23px;
  }
`

export const Subtitle = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 1;
  color: ${p => p.theme.colors.gold};
  margin: 20px 0 10px;
  @media screen and (min-width: 1025px) {
    font-size: 26px;
    margin: 20px 0;
  }
  span {
    color: ${p => p.theme.colors.white};
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
  height: 89px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: transparent;
  path {
    stroke: ${p => p.theme.colors.white};
  }
`

const ProcessCard = ({
  image,
  title,
  text,
  number,
  buttonText,
  url,
  icon,
  width,
  height,
  strokeWidth
}) => (
  <ProcessCardWrapper>
    <TextContainer>
      <ImageWrapper>
        <Svg
          d={icon}
          width={width}
          height={height}
          strokeWidth={strokeWidth}
          stroke='#FFF'
        />
      </ImageWrapper>
      <Subtitle>
        <span>{number}.</span> {title}
      </Subtitle>
      <Paragraph>
        <span dangerouslySetInnerHTML={{ __html: text }} />
      </Paragraph>
      {buttonText ? (
        <ButtonLink
          url={url}
          bgColor={theme.colors.gold}
          borderColor={theme.colors.gold}
          color={theme.colors.white}
          bgHoverColor={theme.colors.darkGold}
          borderHoverColor={theme.colors.darkGold}
          padding='5px 20px'
          aria-label={buttonText}
        >
          {buttonText}
        </ButtonLink>
      ) : (
        ''
      )}
    </TextContainer>
  </ProcessCardWrapper>
)

ProcessCard.propTypes = {
  image: string,
  title: string.isRequired,
  text: string.isRequired
}

export default ProcessCard
