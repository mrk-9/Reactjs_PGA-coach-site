import React from 'react'
import { mount } from 'enzyme'
import Description from './../'
import theme from '../../../theme'
import { ThemeProvider } from 'styled-components'
describe('Description', () => {
  it('is Defined', () => {
    expect(Description).toBeDefined()
  })

  it('render Description', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Description />
      </ThemeProvider>
    )
    expect(wrapper.find('img')).not.toBeUndefined()
  })
})
