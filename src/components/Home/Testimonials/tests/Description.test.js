import React from 'react'
import { mount } from 'enzyme'
import Description4 from './../'
import theme from '../../../theme'
import { ThemeProvider } from 'styled-components'
describe('Description4', () => {
  it('is Defined', () => {
    expect(Description4).toBeDefined()
  })

  it('render Description', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Description4 />
      </ThemeProvider>
    )
    expect(wrapper.find('img')).not.toBeUndefined()
  })
})
