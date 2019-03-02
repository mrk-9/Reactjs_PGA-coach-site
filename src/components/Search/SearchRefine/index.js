import React, { Fragment } from 'react'
import { FaAngleRight, FaAngleUp } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import { RefinementList } from 'react-instantsearch-dom'
import styled, { withTheme } from 'styled-components'
import RefineBy from './RefineBy'
import RefineConfig from './RefineConfig'
import LocationFilter from './LocationFilter'

const Panel = styled.div`
  display: flex;
  ${props => props.basis && `flex-basis: ${props.basis}%`};
  flex-direction: ${props => (props.vertical && 'column') || 'row'};
  position: relative;
  word-wrap: break-word;
  background-color: transparent;
  background-clip: border-box;
  width: 100%;
  height: ${props => (props.h && `${props.h}px`) || 'auto'};
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding: ${props => `${props.noPadding ? 0 : '30px'}`};
`

const Container = styled(Panel)`
  padding: 0px;
  min-width: 220px;
  max-width: 280px;
  @media screen and (max-width: 1020px) {
    width: 100%;
    max-width: 100%;
    ${props => !props.expanded && 'display: none;'} transition: display 1s;
  }
`

export const FilterResults = styled(Panel)`
  display: none;
  @media screen and (max-width: 1020px) {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    border: 1px solid #a2aaad;
    align-items: center;
    ${props => props.expanded && 'display: none;'};
  }
`

const HideFilters = styled.p`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  color: ${props => props.theme.colors.lightBlue};
  width: 100%;
  @media screen and (min-width: 1020px) {
    display: none;
  }
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const CloseIcon = styled(MdClose)`
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
`

const RefinementListEx = styled(RefinementList)`
  .ais-RefinementList {
  }
  .ais-RefinementList-list {
  }
  .ais-RefinementList-item {
  }
  .ais-RefinementList-label {
    display: flex;
    align-items: center;
  }

  .ais-RefinementList-checkbox {
    cursor: pointer;
    appearance: none;
    background: transparent;
    border-radius: 1px;
    box-sizing: border-box;
    position: relative;
    box-sizing: content-box;
    width: 25px;
    height: 25px;
    border-width: 0;
    transition: all 0.3s linear;
    border: 1px solid #a2aaad;

    :checked :after {
      content: '';
      display: block;
      position: absolute;
      top: 4px;
      left: 9px;
      width: 8px;
      height: 14px;
      border: solid #00234b;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }

    :focus {
      outline: 0 none;
      box-shadow: none;
    }
  }

  .ais-RefinementList-labelText {
    font-size: 16px;
    margin-left: 10px;
  }

  .ais-RefinementList-count {
    margin-left: auto;
    display: none;
  }
`

export class Refiners extends React.Component {
  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = { expanded: false }
  }

  toggle () {
    this.state.expanded && window.scrollTo({ top: 0, behavior: 'smooth' })
    this.setState({ expanded: !this.state.expanded })
  }

  render () {
    const { refiners } = RefineConfig
    const { expanded } = this.state
    return (
      <Fragment>
        <FilterResults onClick={this.toggle} expanded={expanded}>
          Filter Results
          <FaAngleRight />
        </FilterResults>
        <Container expanded={expanded}>
          {expanded && (
            <CloseWrapper>
              <CloseIcon onClick={this.toggle} size='2em' />
            </CloseWrapper>
          )}
          <LocationFilter />
          {refiners.map(attr => (
            <RefineBy {...{ text: attr.label, key: attr.label }}>
              <RefinementListEx {...attr} />
            </RefineBy>
          ))}
          <HideFilters onClick={this.toggle}>
            Hide Filters
            <FaAngleUp />
          </HideFilters>
        </Container>
      </Fragment>
    )
  }
}

export default withTheme(Refiners)
