import React from 'react'
import { connectHits } from 'react-instantsearch-dom'
import styled from 'styled-components'

const HitsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const HitsEx = ({ hits, hitComponent: HitComponent }) => (
  <HitsContainer>
    {hits.map(hit => (
      <HitComponent key={hit.objectID} hit={hit} />
    ))}
  </HitsContainer>
)

export default connectHits(HitsEx)
