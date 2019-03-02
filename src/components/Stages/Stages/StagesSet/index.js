import React, { Fragment } from 'react'
import StagesCard from '../StagesCard'
import { Container, Row, Col } from 'reactstrap'
import tiles from './stages'
import styled from 'styled-components'

export const StagesSetWrapper = styled(Container)`
  text-align: center;
  padding-bottom: 30px;
`

const StagesSet = () => (
  <Fragment>
    <StagesSetWrapper>
      <Row>
        {tiles.map(item => (
          <Col xs='12' key={item.title}>
            <StagesCard {...item} />
          </Col>
        ))}
      </Row>
    </StagesSetWrapper>
  </Fragment>
)

export default StagesSet
