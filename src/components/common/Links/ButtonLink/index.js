import TextLink from '../TextLink'
import styled from 'styled-components'
import React from 'react'
import { string, bool } from 'prop-types'

export const ButtonLinkWrapper = styled.span`
  background-color: ${({ theme, bgColor }) => bgColor || theme.colors.red};
  transition: background-color 0.2s linear;
  display: inline-block;
  border-radius: 8px;
  border: 1px solid
    ${({ borderColor, theme }) => borderColor || theme.colors.transparent};
  &:hover {
    background-color: ${({ theme, bgHoverColor }) =>
    bgHoverColor || theme.colors.gray};
    border: 1px solid
      ${({ borderHoverColor, theme }) =>
    borderHoverColor || theme.colors.transparent};
    a {
      color: ${({ theme, color }) => color || theme.colors.white};
    }
  }
`

const ButtonLink = ({
  url,
  bgHoverColor,
  bgColor,
  borderColor,
  borderHoverColor,
  children,
  ...textStyles
}) => (
  <ButtonLinkWrapper
    bgColor={bgColor}
    bgHoverColor={bgHoverColor}
    borderColor={borderColor}
    borderHoverColor={borderHoverColor}
  >
    <TextLink url={url} padding='10px 20px' {...textStyles}>
      {children}
    </TextLink>
  </ButtonLinkWrapper>
)

ButtonLink.propTypes = {
  url: string.isRequired,
  color: string,
  hoverColor: string,
  underline: bool,
  bgColor: string,
  bgHoverColor: string,
  borderColor: string,
  padding: string
}

export default ButtonLink
