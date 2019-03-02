import Img from 'gatsby-image'
import React from 'react'
import styled, { css } from 'styled-components'

export const HeroContainer = styled.div`
  overflow: hidden;
  position: relative;
  margin-bottom: 16px;
`

export const HeroBody = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: ${props => props.top || '50%'};
  transform: translateY(-50%);
  z-index: 2;
  @media (max-width: 1024px) {
    transform: translateY(0%);
  }
`

const GradientOverlay = css`
  > :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${props => props.gradient};
    z-index: 2;
  }
`

const HeroBackgroundImage = styled(Img)`
  position: 'absolute';
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  ${GradientOverlay};
`

const HeroBackgroundColor = styled.div`
  position: 'absolute';
  left: 0;
  top: 0;
  width: 100%;
  height: ${props => props.height || '200px'};
  background-color: ${props => props.color || 'blue'};

  ${GradientOverlay};
`

const Hero = ({
  image = null,
  color = null,
  gradient = null,
  height = null,
  top = '50%',
  ...props
}) => (
  <HeroContainer>
    {image ? (
      <HeroBackgroundImage fluid={image} gradient={gradient} />
    ) : (
      <HeroBackgroundColor color={color} height={height} />
    )}
    <HeroBody top={top}>{props.children}</HeroBody>
  </HeroContainer>
)

export default Hero
