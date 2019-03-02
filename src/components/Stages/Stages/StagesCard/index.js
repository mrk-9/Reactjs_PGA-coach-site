import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { string } from 'prop-types'
import theme from 'styled-theming'

const boxBackgroundColor = theme('mode', {
  gray: '#A2AAAD',
  blueGray: '#1F2A44',
  transparent: 'transparent',
  lightGray: '#D8DAD9',
  blue: '#004F71',
  lightBlue: '#4F758B',
  orange: '#ffa500',
  gold: '#85714D',
  yellow: '#B7BF10',
  green: '#719949'
})

export const StagesCardWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  background: ${p => p.theme.colors.lightGray};
  margin-bottom: 40px;
  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`

export const JustifyBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Image = styled.img`
  object-fit: contain;
  object-position: 50% 50%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const StagesImageWrapper = styled.div`
  width: 200px;
  flex: 0 0 200px;
  display: block;
  overflow: hidden;
  position: relative;
`

export const StagesCardInner = styled.div`
  display: flex;
  text-align: left;
  margin: 20px;
  padding: 0;
  border: 1px solid ${p => p.theme.colors.gray};
  justify-content: space-between;
  flex: 1 1 auto;
  width: auto;
  @media (max-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
export const Title = styled.div`
  font-size: 28px;
  font-weight: 400;
  color: ${p => p.theme.colors.navy};
  margin-bottom: 5px;
`
export const Label = styled.div`
  font-size: 22px;
  font-weight: 400;
  color: ${p => p.theme.colors.lightBlue};
  color: #384858;
  height: 50%;
  padding: 15px 20px;
  border-bottom: 1px solid #a2aaad;
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    flex: 0 0 170px;
    height: auto;
    border: none;
    border-right: 1px solid ${p => p.theme.colors.gray};
  }
  @media (max-width: 420px) {
    width: 100%;
    flex: 0 0 100%;
    border: none;
    border-bottom: 1px solid ${p => p.theme.colors.gray};
  }
`
export const Subtitle = styled.p`
  font-size: 14px;
  color: ${p => p.theme.colors.navy};
  font-weight: 400;
`
export const StagesNumber = styled.div`
  display: block;
  flex: 0 0 100px;
  background-color: ${boxBackgroundColor};
  color: ${p => p.theme.colors.white};
  font-size: 100px;
  font-weight: 400;
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
  @media (max-width: 1024px) {
    width: auto;
    flex: 1 1 auto;
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

export const StagesCardColumn = styled.div`
  display: flex;
  flex-direction: column;

  &:first-of-type {
    border-right: 1px solid ${p => p.theme.colors.gray};
    flex: 0 0 1;
    max-width: 100%;
    padding: 20px;
    @media (max-width: 1024px) {
      flex: 0 0 100%;
      max-width: 100%;
      border-right: none;
      border-bottom: 1px solid ${p => p.theme.colors.gray};
    }
    @media (max-width: 768px) {
      border-bottom: 1px solid ${p => p.theme.colors.gray};
      border-right: none;
      height: auto;
    }
  }
  &:last-of-type {
    flex: 0 0 240px;
    max-width: 240px;
    height: 100%;
    @media (max-width: 1024px) {
      flex: 0 0 100%;
      max-width: 100%;
      flex-direction: row;
      height: auto;
    }
    @media (max-width: 768px) {
      flex: 0 0 100%;
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
  ul {
    display: flex;
    padding: 0;
    list-style: none;
    font-size: 13px;
    width: fit-content;
    margin: 0 auto;
    padding: 20px 0;

    @media (max-width: 1024px) {
      flex: 1 1 auto;
      max-width: auto;
      margin-left: 15px;
    }
    @media (max-width: 420px) {
      width: 100%;
      flex: 0 0 100%;
      margin-left: 20px;
    }
    li {
      & + li {
        margin-left: 10px;
        &:before {
          content: '•';
          color: #384858;
          margin-right: 10px;
        }
      }
    }
  }
`

const StagesCard = ({ number, image, title, text, label, style, stages }) => (
  <ThemeProvider theme={{ mode: style }}>
    <StagesCardWrapper>
      <StagesNumber>{number}</StagesNumber>
      <StagesImageWrapper>
        <Image src={image} alt={title} />
      </StagesImageWrapper>
      <StagesCardInner>
        <StagesCardColumn>
          <JustifyBetween>
            <Title>{title}</Title>
            <TilesLabel>{label}</TilesLabel>
          </JustifyBetween>
          <Subtitle>{text}</Subtitle>
        </StagesCardColumn>
        <StagesCardColumn>
          <Label>
            <span>{stages}</span>
          </Label>
          <ul>
            <li>Agility</li>
            <li>Balance</li>
            <li>Coordination</li>
          </ul>
        </StagesCardColumn>
      </StagesCardInner>
    </StagesCardWrapper>
  </ThemeProvider>
)

StagesCard.propTypes = {
  image: string,
  title: string.isRequired,
  text: string.isRequired
}

export default StagesCard
