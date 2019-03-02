import React from 'react'
import { mount } from 'enzyme'
import CommonLink from './../'
import { Link } from 'gatsby'

describe('Link', () => {
  it('is Defined', () => {
    expect(CommonLink).toBeDefined()
  })

  it('render internal Link', () => {
    const wrapper = mount(<CommonLink url='/' />)
    expect(wrapper.find(Link).props().to).toEqual('/')
  })

  it('render global Link', () => {
    const wrapper = mount(<CommonLink url='http://google.com' />)

    expect(wrapper.find('a').props().href).toEqual('http://google.com')
  })
})
