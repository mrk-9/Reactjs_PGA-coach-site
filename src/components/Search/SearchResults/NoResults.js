import React from 'react'
import styled from 'styled-components'

export const StyledText = styled.p`
  min-width: 650px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
`

export const NoResults = () => <StyledText>No Results Found</StyledText>

export default NoResults
