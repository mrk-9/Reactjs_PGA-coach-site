import React from 'react'
import { mount } from 'enzyme'
import StagesCard, { Title } from './../'
import { ThemeProvider } from 'styled-components'
import theme from '../../../../theme'
describe('StagesCard', () => {
  it('is Defined', () => {
    expect(StagesCard).toBeDefined()
  })

  it('should render StagesCard', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <StagesCard text='text' title='title' image='aimage' />
      </ThemeProvider>
    )
    expect(wrapper.find(Title).text()).toEqual('title')
  })
})
