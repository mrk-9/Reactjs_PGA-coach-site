import { pathOr } from 'ramda'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdClear } from 'react-icons/md'
import { connectSearchBox } from 'react-instantsearch-dom'
import { Col, Container, Row } from 'reactstrap'
import styled from 'styled-components'
import Hero from '../common/Hero'

const ClearIcon = styled(MdClear)`
  position: absolute;
  top: 36%;
  right: 110px;
  cursor: pointer;
`

const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 10px;
  top: 3px;
  z-index: 1;
  color: rgb(153, 153, 153);
  margin-right: 15px;
  transform: rotate(90deg);
  border-top: 3px solid #d8dad9;
  width: 7%;
  padding: 10px 5px 5px 5px;
`

export const Content = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 58px;
  font-weight: 100;
  color: rgb(255, 255, 255);
`

export const SearchTitle = styled(Title)`
  margin-bottom: 15px;
  @media (max-width: 983.99px) {
    font-size: 46px;
  }

  @media (max-width: 767.99px) {
    font-size: 34px;
  }

  @media (max-width: 576.99px) {
    font-size: 28px;
    line-height: 0.95;
  }

  @media (max-width: 359.99px) {
    font-size: 24px;
    line-height: 0.95;
  }
`

export const InputWrapper = styled.div`
  display: inline-block;
  position: relative;
  justify-content: center;
  align-items: center;
`

export const SearchInput = styled.input`
  height: 54px;
  padding-left: 75px;
  padding-right: 20px;
  border-radius: 0px;
  border: 0;
  outline: rgb(255, 255, 255) solid 1px;
  width: 650px;

  font-weight: 400;
  font-size: 16px;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 1020px) {
    width: 500px;
  }
  @media screen and (max-width: 767px) {
    width: 375px;
  }
  @media screen and (max-width: 515px) {
    width: 250px;
  }
`
export const SearchButton = styled.button`
  background-color: #b4975a;
  transition: background-color 0.2s linear;
  display: inline-block;
  border: 1px solid #b4975a;
  color: #fff;
  padding: 15px 20px;
  margin-left: 5px;
`

const BackgroundImage = pathOr(null, ['childImageSharp', 'fluid'])

const SearchBar = ({ currentRefinement, refine, heroImage }) => (
  <Hero image={BackgroundImage(heroImage)} top='26%'>
    <Container>
      <Row>
        <Content>
          <SearchTitle size='lg'>Find ADM programs in your area</SearchTitle>
          <InputWrapper>
            <SearchIcon size={'48px'} />
            <SearchInput
              type='text'
              value={currentRefinement}
              onChange={e => refine(e.currentTarget.value)}
              placeholder='Search by zipcode, city or club name'
            />

            {currentRefinement && <ClearIcon onClick={() => refine('')} />}
            <SearchButton
              value={currentRefinement}
              onClick={e => window.scrollTo({ top: 500, behavior: 'smooth' })}
            >
              Search
            </SearchButton>
          </InputWrapper>
        </Content>
      </Row>
    </Container>
  </Hero>
)

export default connectSearchBox(SearchBar)
