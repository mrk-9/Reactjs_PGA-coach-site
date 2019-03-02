import React from 'react'
import styled from 'styled-components'
import Link from '../Link'
import { string, bool } from 'prop-types'

export const TextLinkWrapper = styled.span`
  align-self: center;
  a {
    display: ${({ display }) => display};
    font-size: medium;
    color: ${({ theme, color }) => color || theme.colors.white};
    background-color: transparent;
    text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
    transition: color 0.2s linear;
    text-transform: ${({ transform }) => transform};
    &:hover {
      color: ${({ hoverColor }) => hoverColor || null};
      text-decoration: none;
    }
  }
`

const TextLink = ({
  url,
  children,
  padding,
  transform = 'none',
  underline = false,
  display = 'flex',
  ...styles
}) => (
  <TextLinkWrapper
    transform={transform}
    underline={underline}
    display={display}
    {...styles}
  >
    <Link url={url} padding={padding}>
      {children}
    </Link>
  </TextLinkWrapper>
)

TextLink.propTypes = {
  url: string.isRequired,
  color: string,
  hoverColor: string,
  underline: bool,
  padding: string,
  transform: string,
  display: string
}
export default TextLink
