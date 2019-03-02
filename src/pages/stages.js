import React from 'react'
import { Layout } from '../components/common'
import { Description, MainImage, StagesSet } from '../components/Stages'

const StagesPage = ({ data = {} }) => (
  <Layout query={data} title='PGA.Coach'>
    <MainImage />
    <Description />
    <StagesSet />
  </Layout>
)

export default StagesPage
