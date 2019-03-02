import React from 'react'
import { mount } from 'enzyme'
import ProcessCard, { Title } from './../'
import { ThemeProvider } from 'styled-components'
import theme from '../../../../theme'
describe('ProcessCard', () => {
  it('is Defined', () => {
    expect(ProcessCard).toBeDefined()
  })

  it('should render ProcessCard', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <ProcessCard text='text' title='title' image='aimage' />
      </ThemeProvider>
    )
    expect(wrapper.find(Title)).not.toBeUndefined()
  })
})
