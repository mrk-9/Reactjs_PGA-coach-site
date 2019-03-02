import React, { Fragment } from 'react'
import { connectStateResults } from 'react-instantsearch-dom'
import { withTheme } from 'styled-components'
import { HitsEx } from '../common'
import Card from './Card'
import NoResults from './NoResults'

const SearchResults = ({ searchResults }) => {
  return searchResults && searchResults.nbHits !== 0 ? (
    <Fragment>
      <HitsEx hitComponent={Card} />
    </Fragment>
  ) : (
    <NoResults />
  )
}

export default connectStateResults(withTheme(SearchResults))
