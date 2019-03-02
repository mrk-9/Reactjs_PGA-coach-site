import React from 'react'
import styled, { withTheme } from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  font-weight: normal;
  margin-bottom: 10px;
  padding: 14px 20px 15px;

  background: #d4d4d5;
  color: #00234b;
  text-transform: uppercase;
  font-size: 18px;
`
const Content = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 20px;
  padding: 14px 20px 15px;
`

export const RefineBy = ({ text, children }) => (
  <Wrapper>
    <Title>{text}</Title>
    <Content>{children}</Content>
  </Wrapper>
)

export default withTheme(RefineBy)
