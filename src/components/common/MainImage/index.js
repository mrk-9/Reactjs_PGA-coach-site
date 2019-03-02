import React from 'react'
import { MainBgImage } from '../../common'
import styled from 'styled-components'
import Image from '../../../images/Home/MainBgImage.png'

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  margin-top: 50px;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`
export const Subtitle = styled.div`
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  color: #ffffff
  font-size: 30px;
  font-weight: 400;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  @media screen and (min-width: 1025px) {
    font-size: 42px;
  }
`

const HomeMainImage = () => (
  <MainBgImage title='Welcome to PGA.Coach' height={840} imageUrl={Image}>
    <Subtitle> and the American Development Model for Golf</Subtitle>
  </MainBgImage>
)

export default HomeMainImage
