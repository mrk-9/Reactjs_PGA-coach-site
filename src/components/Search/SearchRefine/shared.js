import styled from 'styled-components'
import { FaMapMarkerAlt } from 'react-icons/fa/index'

export const Separator = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  ${props =>
    (props.vertical && 'border-right') ||
    (props.horizontal && 'border-bottom')}: 2px solid
    ${props => props.theme.colors.darkgrey};
`
export const LocationDropDown = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  &:focus {
    box-shadow: none;
    background-color: transparent;
  }
  @media screen and (max-width: 768px) {
    align-items: baseline;
  }
`

export const MileSelect = styled.select`
  margin-top: 10px;
  background-color: transparent;
  border: 0;
  font-size: 16px;
  height: 100%;
  font-family: 'Montserrat', sans-serif;
`

export const MapMarker = styled(FaMapMarkerAlt).attrs({
  size: '16px'
})`
  margin: 10px;
`

export const LocationInput = styled.input`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 14px;
  margin-top: 5px;
  &:placeholder {
    color: ${props => props.theme.footerCopyright};
  }
  &:focus {
    outline: none;
  }
`
