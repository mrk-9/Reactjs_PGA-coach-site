import React from 'react'
import { mount } from 'enzyme'
import TextLink from './../'
import { Link } from 'gatsby'
import theme from '../../../../theme'
import { ThemeProvider } from 'styled-components'
describe('TextLink', () => {
  it('is Defined', () => {
    expect(TextLink).toBeDefined()
  })

  it('render TextLink', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <TextLink url='/' text='text' />
      </ThemeProvider>
    ).find(TextLink)
    expect(wrapper.find(Link).props().to).toEqual('/')
  })
})
