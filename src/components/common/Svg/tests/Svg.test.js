import React from 'react'
import { shallow } from 'enzyme'
import Svg from './../'

describe('Svg', () => {
  it('is Defined', () => {
    expect(Svg).toBeDefined()
  })

  it('render Svg with default props', () => {
    const wrapper = shallow(<Svg d='Asd' />)
    expect(wrapper.find('svg').props().width).toEqual(20)
    expect(wrapper.find('svg').props().height).toEqual(20)
  })

  it('render Svg with custom props', () => {
    const wrapper = shallow(<Svg d='Asd' width={31} height={31} />)
    expect(wrapper.find('svg').props().width).toEqual(31)
    expect(wrapper.find('svg').props().height).toEqual(31)
  })
})
