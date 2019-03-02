import React from 'react'
import { mount } from 'enzyme'
import ButtonLink from './../'
import { Link } from 'gatsby'
import theme from '../../../../theme'
import { ThemeProvider } from 'styled-components'
describe('ButtonLink', () => {
  it('is Defined', () => {
    expect(ButtonLink).toBeDefined()
  })

  it('render ButtonLink', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <ButtonLink url='/' text='text' />
      </ThemeProvider>
    ).find(ButtonLink)
    expect(wrapper.find(Link).props().to).toEqual('/')
  })
})
