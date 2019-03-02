import theme from '../../theme'
import React from 'react'
import { TextLink } from '../Links'

export const links = [
  {
    title: 'HOME',
    url: '/',
    icon: ''
  },
  {
    title: 'ADM',
    url: '#adm',
    icon: ''
  },
  {
    title: 'Seven Stages',
    url: '#seven-stages',
    icon: ''
  },
  {
    title: 'Get Started',
    url: '#get-started',
    icon: ''
  },
  {
    title: 'BENEFITS',
    url: '#benefits',
    icon: ''
  },
  {
    title: 'Directory',
    url: 'directory',
    icon: ''
  }
]

export const LinksContainer = ({ links = [], padding, color }) => (
  <React.Fragment>
    {links.map(({ url, title, icon }) => (
      <TextLink
        url={url}
        key={url}
        color={color}
        hoverColor={theme.colors.gray}
        padding={padding}
        transform='uppercase'
        aria-label={title}
      >
        {title}
      </TextLink>
    ))}
  </React.Fragment>
)
