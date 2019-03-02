import React from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
  Form
} from 'reactstrap'
import { Section, Title } from '../../GlobalStyles'

export const ContactForm = () => (
  <Section>
    <Container>
      <Row>
        <Col md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
          <Title>Contact Us</Title>
          <Form
            action='https://formspree.io/CoachPlatformTeam@PGAHQ.com'
            method='POST'
          >
            <FormGroup>
              <Label>Name</Label>
              <Input type='text' name='name' />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input type='email' name='_replyto' />
            </FormGroup>
            <FormGroup>
              <Label>Message</Label>
              <Input type='textarea' name='message' />
            </FormGroup>
            <input type='hidden' name='_next' value='/thank-you' />
            <Button>Send</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </Section>
)

export default ContactForm
