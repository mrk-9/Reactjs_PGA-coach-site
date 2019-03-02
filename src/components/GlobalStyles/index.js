import styled, { createGlobalStyle } from 'styled-components'
import { Container } from 'reactstrap'

export const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100%;
    min-height: 100%;
    min-width: 200px;
    overflow-x: hidden;
    background: #ffffff;
    color: #A2AAAD;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.33;
    font-family: 'Lato', sans-serif;
  }

  h2 {
    margin-bottom: 15px;
    font-size: 20px;
  }

  ul,
  li,
  a,
  p,
  h1,
  h2,
  body,
  strong,
  div {
    margin: 0px;
    padding: 0px;
    font-family: 'Lato', sans-serif;
  }
`

export const ContainerLg = styled(Container)`
  @media (min-width: 1310px) {
    max-width: 1310px !important;
  }
`

export const Section = styled.div`
  width: 100%;
  padding: 60px 0;
  @media screen and (min-width: 1025px) {
    padding: 100px 0;
  }
`

export const Heading = styled.div`
  font-size: 30px;
  font-weight: 300;
  line-height: 1;
  color: ${p => p.color || p.theme.colors.gold};
  margin-bottom: 15px;
  @media screen and (min-width: 1025px) {
    font-size: 56px;
    margin-bottom: 13px;
  }
`
export const Subheading = styled.div`
  font-size: 20px;
  margin-bottom: 16px;
  font-weight: 300;
  text-align: center;
  color: ${p => p.color || p.theme.colors.gold};
  color: #85714d;
  @media screen and (min-width: 1025px) {
    font-size: 30px;
  }
`

export const Title = styled.div`
  font-size: 24px;
  font-weight: 300;
  line-height: 1;
  color: ${p => p.color || p.theme.colors.gold};
  margin-bottom: 15px;
  @media screen and (min-width: 1025px) {
    font-size: 42px;
    margin-bottom: 23px;
  }
`

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 15px;
  color: ${p => p.color || p.theme.colors.blueGray};
  @media screen and (min-width: 1025px) {
    font-size: 18px;
  }
`

export const Placeholder = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${p => p.theme.colors.lightBlue};
`
