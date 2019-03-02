import React from 'react'
import { mount } from 'enzyme'
import { StagesCard, StagesSet } from '../../'
import { ThemeProvider } from 'styled-components'
import theme from '../../../../theme'
describe('StagesSet', () => {
  it('is Defined', () => {
    expect(StagesSet).toBeDefined()
  })

  it('should render StagesSet', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <StagesSet />
      </ThemeProvider>
    )
    expect(wrapper.find(StagesCard).length).toEqual(7)
  })
})
