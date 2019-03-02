import React from 'react'
import { mount } from 'enzyme'
import HomeMainBgImage from './../'
import theme from '../../../theme'
import { ThemeProvider } from 'styled-components'
import MainBgImage from '../../../common/MainBgImage'
describe('HomeMainBgImage', () => {
  it('is Defined', () => {
    expect(HomeMainBgImage).toBeDefined()
  })

  it('render Layout', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <HomeMainBgImage />
      </ThemeProvider>
    )
    expect(wrapper.find(MainBgImage)).not.toBeUndefined()
  })
})
