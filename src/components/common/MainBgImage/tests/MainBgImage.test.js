import React from 'react'
import { shallow } from 'enzyme'
import MainImage, { MainImageWrapper, Description, Title } from './..'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import theme from './../../../theme'
describe('MainImage', () => {
  it('is Defined', () => {
    expect(MainImage).toBeDefined()
  })

  it('render Component', () => {
    const wrapper = shallow(
      <MainImage
        title='title'
        description='description'
        imageUrl='/img/Logo.png'
      />
    )
    expect(wrapper.find(Description).text()).toEqual('description')
    expect(wrapper.find(Title).text()).toEqual('title')
  })

  it('check default SC props', () => {
    const wrapper = renderer
      .create(<MainImageWrapper theme={theme} imageUrl='/img/Logo.png' />)
      .toJSON()
    expect(wrapper).toHaveStyleRule('background-image', 'url(/img/Logo.png)')
    expect(wrapper).toHaveStyleRule('height', '400px')
  })

  it('check custom SC props', () => {
    const wrapper = renderer
      .create(
        <MainImageWrapper theme={theme} imageUrl='/img/Logo.png' height={600} />
      )
      .toJSON()
    expect(wrapper).toHaveStyleRule('background-image', 'url(/img/Logo.png)')
    expect(wrapper).toHaveStyleRule('height', '600px')
  })
})
