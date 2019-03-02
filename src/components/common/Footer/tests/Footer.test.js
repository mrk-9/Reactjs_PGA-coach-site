import React from 'react'
import { mount } from 'enzyme'
import Footer from './../'
import { ThemeProvider } from 'styled-components'
import theme from './../../../theme'
describe('Footer', () => {
  it('is Defined', () => {
    expect(Footer).toBeDefined()
  })

  it('Check Links', () => {
    mount(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    )
  })
})
