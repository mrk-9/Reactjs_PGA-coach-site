import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Section } from '../../GlobalStyles'
import styled from 'styled-components'
import Logo from '../../../images/Home/PgaCoachLogo2.png'

export const TestimonialsWrapper = styled(Section)`
  background-color: ${p => p.theme.colors.white};
  @media (min-width: 1025px) {
    padding: 150px 0;
  }
`

export const TextContainer = styled.div`
  text-align: center;
`

export const Testimonials = () => {
  return (
    <TestimonialsWrapper>
      <Container>
        <Row>
          <TextContainer as={Col} xs='12' md={{ size: 8, offset: 2 }}>
            <img src={Logo} alt='Pga Coach' width='280' />
          </TextContainer>
        </Row>
      </Container>
    </TestimonialsWrapper>
  )
}

export default Testimonials
