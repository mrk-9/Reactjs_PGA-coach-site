import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { pathOr, prop } from 'ramda'
import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Configure, InstantSearch, Pagination } from 'react-instantsearch-dom'
import { Alert, Col } from 'reactstrap'
import styled from 'styled-components'
import { Layout } from '../components/common'
import SearchBar from '../components/Search/SearchBar'
import SearchRefine from '../components/Search/SearchRefine'
import SearchResults from '../components/Search/SearchResults'

export const Section = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row no-wrap;
  margin-top: 30px;
  padding-right: 100px;
  padding-left: 100px;
  @media screen and (max-width: 1020px) {
    flex-direction: column;
    padding: 10px;
  }
`

export const Main = styled.div`
  padding-left: 15px;
  padding-right: 10px;
  flex-grow: 0;
  max-width: 725px;
  min-width: 700px;
  @media screen and (max-width: 1020px) {
    max-width: 100%;
    padding: 0px;
    min-width: 100%;
  }
`

export const Sidebar = styled.div`
  padding-right: 15px;
  @media screen and (max-width: 1020px) {
    padding-right: 0px;
  }
`

export const Content = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const searchParameters = {
  hitsPerPage: 6
}

const PaginationEx = styled(Pagination)`
  margin: 20px 0px;

  .ais-Pagination-item--disabled .ais-Pagination-link {
    color: #a5abc4;
  }
  .ais-Pagination-link {
    border: 0px solid #c4c8d8;
  }
  .ais-Pagination-link,
  .ais-Pagination-item--selected .ais-Pagination-link {
    color: #1f2a44;
  }
  .ais-Pagination-item--selected .ais-Pagination-link {
    background-color: #a2aaad !important;
    border-color: ;
  }
`

const Wrapper = styled.div`
  background-color: rgb(238, 240, 241);
`

const ProgramPage = ({ data = {} }) => {
  const algolia = pathOr(null, ['site', 'siteMetadata', 'algolia'], data)
  const { heroImage } = data

  return (
    <Layout query={data} title='PGA.Coach'>
      <Wrapper>
        {prop('appId', algolia) ? (
          <InstantSearch
            appId={algolia.appId}
            apiKey={algolia.searchOnlyApiKey}
            indexName={algolia.indexName}
          >
            <Configure {...searchParameters} />
            <SearchBar heroImage={heroImage} />
            <Section>
              <Sidebar>
                <SearchRefine />
              </Sidebar>
              <Main>
                <SearchResults />
                <PaginationEx
                  showFirst={false}
                  showLast
                  pagesPadding={1}
                  translations={{
                    next: <FaArrowRight />,
                    previous: <FaArrowLeft />,
                    last: 'Last'
                  }}
                />
              </Main>
            </Section>
          </InstantSearch>
        ) : (
          <Alert color='danger'>
            Search App has wrong or missing settings!
          </Alert>
        )}
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query SearchQuery {
    site {
      siteMetadata {
        algolia {
          appId
          searchOnlyApiKey
          indexName
        }
      }
    }
    heroImage: file(relativePath: { eq: "searchbackground.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1440) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

ProgramPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default ProgramPage
