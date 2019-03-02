import React from 'react'
import styled from 'styled-components'

const PaginationText = styled.p`
  text-align: center;
  font-size: 12px;
  margin: 20px 0 0 0;
`

const makePaginationString = ({ nbHits, hitsPerPage }) =>
  nbHits && hitsPerPage
    ? `Showing 1 - ${hitsPerPage} out of ${nbHits.toLocaleString()}`
    : null

const SearchStatsEx = ({ searchResults }) => (
  <PaginationText>
    {searchResults ? makePaginationString(searchResults) : null}
  </PaginationText>
)

export default SearchStatsEx
