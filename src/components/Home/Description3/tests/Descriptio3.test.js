import React from 'react'
import { mount } from 'enzyme'
import Description3 from './../'
import theme from '../../../theme'
import { ThemeProvider } from 'styled-components'
describe('Description3', () => {
  it('is Defined', () => {
    expect(Description3).toBeDefined()
  })

  it('render Description3', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Description3 />
      </ThemeProvider>
    )
    expect(wrapper.find('img')).not.toBeUndefined()
  })
})
