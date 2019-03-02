import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Section } from '../../GlobalStyles'
import styled from 'styled-components'

export const Paragraph = styled.p`
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: ${p => p.theme.colors.blueGray};
  text-align: left;
  @media screen and (min-width: 1025px) {
    font-size: 18px;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const TextContainer = styled.div`
  padding: 0 20px;
  text-align: center
  color: ${p => p.theme.colors.blueGray};
`

export const Title = styled.div`
  font-size: 24px;
  line-height: 1;
  color: ${p => p.theme.colors.blueGray};
  margin-bottom: 23px;
  @media screen and (min-width: 1025px) {
    font-size: 42px;
  }
`

export const Description = () => {
  return (
    <Section>
      <Container>
        <Row>
          <TextContainer as={Col} xs='12' md={{ size: 8, offset: 2 }}>
            <Title>Subhead Goes Here.</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Paragraph>
          </TextContainer>
        </Row>
      </Container>
    </Section>
  )
}

export default Description
