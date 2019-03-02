import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Paragraph, Subheading, Title } from '../../GlobalStyles'
import styled from 'styled-components'

export const TextContainer = styled.div`
  padding: 0 20px;
  text-align: center;
  color: ${p => p.theme.colors.blueGray};
  & + & {
    margin-top: 30px;
  }
`
export const DescriptionSection = styled.div`
  padding: 80px 0 50px;
`

export const Subtitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
  color: ${p => p.theme.colors.blueGray};
  margin: 20px 0 10px;
  @media screen and (min-width: 1025px) {
    font-size: 26px;
    margin: 20px 0;
  }
`

export const Description3 = () => {
  return (
    <DescriptionSection>
      <Container>
        <Row>
          <TextContainer as={Col} xs='12' lg={{ size: 12 }}>
            <Subheading>
              As Many as Possible. As Long as Possible. With the Best Experience
              Possible.
            </Subheading>
          </TextContainer>
          <TextContainer as={Col} xs='12' lg={{ size: 10, offset: 1 }}>
            <Title>The Benefits of PGA.Coach</Title>
            <Paragraph>
              American Development Model is essential for growing the sport and
              vital to you and your employer's success. PGA.Coach resources will
              enable you to promote your business through our marketing services
              so you can sell and retain customers at an executive level.
            </Paragraph>
            <Paragraph>
              The American Development Model Certificate and PGA.Coach will
              allow PGA Professionals to evolve and adapt to the changes in the
              game and to a new generation of players. Start your journey today
              with a PGA.Coach education; access all the benefits of PGA.Coach
              and lay the foundation to grow sport participation for a lifetime.
            </Paragraph>
          </TextContainer>
        </Row>
      </Container>
    </DescriptionSection>
  )
}

export default Description3
