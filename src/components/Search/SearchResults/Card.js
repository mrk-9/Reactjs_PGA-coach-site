import React from 'react'
import styled, { withTheme } from 'styled-components'
import driveCHipUrl from '../../../images/programs/drivechip.jpg'
import golfReadyUrl from '../../../images/programs/golfready.jpg'
import juniorUrl from '../../../images/programs/junior.jpg'
import lpgaUrl from '../../../images/programs/girlsgolf.png'
import firstTeeUrl from '../../../images/programs/first-tee.png'
import { Container, Row, Col } from 'reactstrap'

import { FiMail } from 'react-icons/fi'

export const Wrapper = styled.div`
  display: inline-block;
  width: 100%;
  margin-bottom: 32px;
  color: #1f2a44;
  border: 1px solid #a2aaad;

  @media (max-width: 767.99px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-bottom: 16px;
  }
`

export const ItemBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.colors.white};
  overflow: hidden;
  text-align: center;
  padding: 20px;
`

export const ItemHeader = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  background: #00234b;
  height: 54px;
  color: white;

  @media (max-width: 767.99px) {
    flex-direction: column;
    padding: 8px;
  }
`

export const ItemTitle = styled.div`
  height: 35px;
  font-size: 24px;
  letter-spacing: -0.19px;
  line-height: 22px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: 767.99px) {
    font-size: 22px;
    letter-spacing: -0.17px;
    overflow-wrap: break-word;
  }
`

export const BodyItems = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 12px;
  line-height: 21px;

  @media (min-width: 768px) {
    font-size: 12px;
  }
  @media (min-width: 1366px) {
    font-size: 14px;
  }
`

export const BodyItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;

  @media (min-width: 567px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    width: 49%;
  }

  white-space: nowrap;
  text-overflow: ellipsis;
`

export const ProgramItems = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 18px;
  margin-top: 5px;

  @media (max-width: 767.99px) {
    flex-direction: column;
    margin-top: -10px;
  }
  @media (min-width: 768px) {
    font-size: 12px;
  }
  @media (min-width: 1366px) {
    font-size: 14px;
  }
`

export const ProgramItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.secondary};
  padding: 5px 0;

  @media (min-width: 567px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    width: 100%;
    padding: 0;
  }

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const ProgramBodyItem = styled.div`
  align-self: center;

  font-size: 16px;
  color: #00234b;

  img {
    width: 80px;
  }

  a {
    color: #00234b;
    text-decoration: none;
    svg {
      margin: 0px 4px 4px 0px;
    }
  }

  a:link {
    text-decoration: none;
  }

  a:hover {
    color: #00234b;
    text-decoration: none;
  }
`

export const labelsLogos = {
  JUNIOR_LEAGUE: <img src={juniorUrl} />,
  FIRST_TEE: <img src={firstTeeUrl} />,
  GET_GOLF_READY: <img src={golfReadyUrl} />,
  GIRLS_GOLF: <img src={lpgaUrl} />,
  DRIVE_CHIP_PUTT: <img src={driveCHipUrl} />
}

const Card = ({
  hit: { objectID, name, city, state, zip, address, programs = [] }
}) => (
  <Wrapper>
    <ItemHeader>
      <ItemTitle>{name}</ItemTitle>
      <BodyItems>
        <BodyItem children={`${address}, ${city}, ${state} ${zip}`} />
      </BodyItems>
    </ItemHeader>
    <ItemBody>
      <Container fluid>
        <Row>
          {programs.map(({ type, contactName, contactPhone, contactEmail }) => (
            <Col key={`${type}+${contactName}`} xs={6} md={3}>
              <ProgramItem>
                <ProgramBodyItem children={labelsLogos[type]} />
                <ProgramBodyItem children={contactName} />
                <ProgramBodyItem children={contactPhone} />
                {contactEmail && (
                  <ProgramBodyItem>
                    <a href={`mailto:${contactEmail}`}>
                      <FiMail /> Email Me
                    </a>
                  </ProgramBodyItem>
                )}
              </ProgramItem>
            </Col>
          ))}
        </Row>
      </Container>
    </ItemBody>
  </Wrapper>
)

export default withTheme(Card)
