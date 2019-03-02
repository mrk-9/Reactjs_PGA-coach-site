import React from 'react'
import { Layout } from '../components/common'
import styled from 'styled-components'
import { Title, Paragraph } from '../components/GlobalStyles'

export const ThankYouWrapper = styled.div`
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const ThankYouPage = ({ data = {} }) => (
  <Layout query={data} title='PGA.Coach'>
    <ThankYouWrapper>
      <Title>Thank you!</Title>
      <Paragraph>We received your message and will get back to you.</Paragraph>
    </ThankYouWrapper>
  </Layout>
)

export default ThankYouPage
