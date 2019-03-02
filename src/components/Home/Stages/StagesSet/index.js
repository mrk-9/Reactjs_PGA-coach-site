import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import {
  Paragraph,
  Title,
  ContainerLg,
  Placeholder
} from '../../../GlobalStyles'
import styled, { createGlobalStyle } from 'styled-components'
import StagesCard from '../StagesCard'
import { StaticQuery, graphql } from 'gatsby'
import { prop } from 'ramda'

const GlobalStyle = createGlobalStyle`
  .stages-lg {
    > div{
      height: 340px;
      @media (max-width: 1024px) {
        height: auto;
        img{
          width: 100%;
          height: auto;
          top: 100%;
        }
      }
    }
  }
  .mobile-hiddden{
    @media (max-width: 1024px) {
        display: none;
    }
  }
`

export const StagesCol = styled(Col)`
  &:last-of-type{
    > div:last-of-type {
      height: 340px;
      @media (max-width: 1024px) {
        height: auto;
        img{
          width: 100%;
          height: auto;
          top: 100%;
        }
      }
  }
`
const StagesSetWrapper = styled.div`
  text-align: center;
  padding: 100px 20px;
  width: 100%;
`
export const TextContainer = styled.div`
  padding: 0 20px;
  text-align: center;
  color: ${p => p.theme.colors.blueGray};
  margin-bottom: 20px;
`

const StagesSet = props => (
  <StaticQuery
    query={graphql`
      query {
        stages: allMarkdownRemark(
          sort: { fields: [frontmatter___number], order: ASC }
          filter: { fileAbsolutePath: { regex: "/stage/" } }
        ) {
          edges {
            node {
              excerpt
              frontmatter {
                date(formatString: "DD MMMM, YYYY")
                title
                number
                stagesLine1
                stagesLine2
                style
                extraImage {
                  ...optimizedSharpSizes
                }
                featuredImage {
                  ...optimizedSharpSizes
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <div id='seven-stages'>
          <StagesSetWrapper>
            <ContainerLg>
              <Row>
                <TextContainer as={Col} xs='12' md={{ size: 8, offset: 2 }}>
                  <Title>The Seven Stages of ADM for the PGA</Title>
                  <Paragraph>
                    We've broken down physical and physiological development
                    into 7 stages. Using this strategy, the right skills,
                    exercises, and instruction can be delivered at the right
                    time, leading to success for your students and your coaching
                    program.
                  </Paragraph>
                </TextContainer>
              </Row>
              <Row>
                <StagesCol xs={12} lg={6}>
                  {data.stages.edges
                    .slice(0, Math.floor(data.stages.edges.length / 2) + 1)
                    .map(
                      ({ node }) =>
                        prop('frontmatter', node) ? (
                          <StagesCard node={node} />
                        ) : (
                          <Placeholder />
                        )
                    )}
                </StagesCol>
                <StagesCol xs={12} lg={6}>
                  {data.stages.edges
                    .slice(Math.floor(data.stages.edges.length / 2) + 1)
                    .map(
                      ({ node }) =>
                        prop('frontmatter', node) ? (
                          <StagesCard node={node} />
                        ) : (
                          <Placeholder />
                        )
                    )}
                </StagesCol>
              </Row>
            </ContainerLg>
          </StagesSetWrapper>
          <GlobalStyle />
        </div>
      </Fragment>
    )}
  />
)

export default StagesSet
