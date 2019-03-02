import React from 'react'
import { mount } from 'enzyme'
import Layout from './../'
import NavBar from '../../NavBar'
describe('Layout', () => {
  it('is Defined', () => {
    expect(Layout).toBeDefined()
  })

  it('render Layout', () => {
    const wrapper = mount(<Layout title='title' query={{}} />)
    expect(wrapper.find(NavBar)).not.toBeUndefined()
  })
})
