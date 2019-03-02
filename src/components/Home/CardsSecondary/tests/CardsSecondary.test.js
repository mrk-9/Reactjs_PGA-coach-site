import React from 'react'
import { mount } from 'enzyme'
import CardsSecondary from './../'
import theme from '../../../theme'
import { ThemeProvider } from 'styled-components'
describe('CardsSecondary', () => {
  it('is Defined', () => {
    expect(CardsSecondary).toBeDefined()
  })

  it('render CardsSecondary', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <CardsSecondary />
      </ThemeProvider>
    )
    expect(wrapper.find('img')).not.toBeUndefined()
  })
})
