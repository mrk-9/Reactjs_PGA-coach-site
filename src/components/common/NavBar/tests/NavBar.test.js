import React from 'react'
import { mount } from 'enzyme'
import NavBar, { SvgButton } from './..'
import { TextLink } from '../../Links'
import { ThemeProvider } from 'styled-components'
import theme from './../../../theme'
import 'jest-styled-components'
describe('NavBar', () => {
  it('is Defined', () => {
    expect(NavBar).toBeDefined()
  })

  it('Change state', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>
    ).find(NavBar)

    expect(wrapper.state().isOpen).toEqual(false)
    wrapper
      .find(SvgButton)
      .first()
      .simulate('click')
    expect(wrapper.state().isOpen).toEqual(true)
    wrapper
      .find(SvgButton)
      .last()
      .simulate('click')
    expect(wrapper.state().isOpen).toEqual(false)
  })

  it('should render link', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>
    ).find(NavBar)
    const links = [
      '#adm',
      '#seven-stages',
      '#get-started',
      'https://pgacoach.lightspeedvt.com/',
      '#adm',
      '#seven-stages',
      '#get-started',
      'https://pgacoach.lightspeedvt.com/'
    ]

    expect(wrapper.find(TextLink).map(x => x.props().url)).toEqual(
      expect.arrayContaining(links)
    )
  })
})
