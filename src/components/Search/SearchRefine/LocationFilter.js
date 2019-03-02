import React from 'react'
import styled from 'styled-components'
import PlacesInput from './Places/PlacesInput'

const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 25px;
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

export default () => (
  <LocationWrapper>
    <Title>Location</Title>
    <PlacesInput />
  </LocationWrapper>
)
