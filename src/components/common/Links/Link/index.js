import React from 'react'
import { Link } from 'gatsby'
import { string } from 'prop-types'
import styled from 'styled-components'

export const LinkWrapper = styled.a`
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  color: ${({ theme, color }) => color || '#ffffff'};
  padding: ${({ padding }) => padding || null};
  text-transform: inherit;
  font-weight: 400;
  border-radius: 8px;
  &:hover {
    color: ${({ hoverColor }) => hoverColor || null};
    text-decoration: none;
  }
  svg {
    margin-right: 8px;
  }
`
const CommonLink = ({ url, padding, children }) => (
  <LinkWrapper padding={padding} {...getLinkProps(url)}>
    {children}
  </LinkWrapper>
)

const getLinkProps = url =>
  url.indexOf('://') !== -1
    ? { href: url }
    : url.indexOf('.pdf') !== -1
      ? { href: url, download: '' }
      : { as: Link, to: url }

CommonLink.propTypes = {
  url: string.isRequired,
  padding: string
}

export default CommonLink
