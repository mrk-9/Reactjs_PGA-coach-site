import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { string, number } from 'prop-types'
import styled from 'styled-components'

export const MainImageWrapper = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
  background-color: transparent;
  background-size: cover;

  height: ${p => p.height || 400}px;
  background-image: url(${p => p.imageUrl});
  max-height: calc(100vh - 120px);
  display: flex;
  align-items: ${p => p.position};
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: auto;
    max-height: 1000vh;
    padding: 250px 0 50px;
  }
  @media (max-width: 768px) {
    padding-top: 150px;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`

export const Content = styled.div`
  width: 100%;
  transition: transform 1s ease-in, opacity 1s ease-in;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
  z-index: 10;
`

export const Description = styled.div`
  color: ${p => p.theme.colors.white};
  letter-spacing: 3px;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 400;
  @media screen and (min-width: 1025px) {
    font-size: 48px;
  }
`

export const Title = styled.h2`
  color: ${p => p.theme.colors.white};
  font-size: 52px;
  font-weight: 300;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 220px;

  @media screen and (min-width: 1025px) {
    font-size: 94px;
  }
`

const MainImage = ({
  height,
  description,
  title,
  imageUrl,
  position,
  children
}) => (
  <MainImageWrapper height={height} imageUrl={imageUrl} position={position}>
    <CSSTransition classNames='BGImage' appear unmountOnExit in timeout={300}>
      <Content>
        {description && <Description>{description}</Description>}
        <Title>{title}</Title>
        {children}
      </Content>
    </CSSTransition>
  </MainImageWrapper>
)

MainImage.propTypes = {
  height: number,
  title: string.isRequired,
  description: string,
  imageUrl: string.isRequired
}
export default MainImage
