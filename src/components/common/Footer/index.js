import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'
import Svg from './../Svg'
import theme from '../../theme'
import { TextLink } from '../Links'
import { facebookF, instagram, youtube, twitter } from '../Svg/elements'

export const links = [
  {
    title: 'PGA of America',
    url: 'https://www.pga.org/'
  },
  {
    title: "Golf's American Development Model",
    url: "/Golf's_American_Development_Model.pdf"
  },
  {
    title: 'Privacy Policy',
    url: 'https://www.pga.org/privacy-policy'
  },
  {
    title: 'Contact Us',
    url: '/contact'
  }
]

export const socialLinks = [
  {
    title: 'Facebook',
    url: 'https://www.facebook.com/groups/2010744555639212/',
    icon: facebookF
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/',
    icon: twitter
  },
  {
    title: 'Youtube',
    url: 'https://www.youtube.com/',
    icon: youtube
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/',
    icon: instagram
  }
]

export const Paragraph = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.3;
  color: ${p => p.theme.colors.white};
  @media screen and (min-width: 1025px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`

export const FooterTitle = styled.div`
  margin-bottom: 20px;
  font-size: 30px;
  line-height: 1.3;
  color: ${p => p.theme.colors.white};
`

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${p => p.theme.colors.navy};
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 80px 0;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  justify-content: flex-start;
`

export const Title = styled.h2`
  color: ${p => p.theme.colors.white};
  padding-bottom: 10px;
`

export const SocialRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 15px;
  padding-bottom: 15px;
`

export const SocialLink = styled.a`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: ${p => p.theme.colors.white};
  line-height: 25px;
  font-size: 11px;
  text-align: center;
  background-color: ${p => p.theme.colors.transparent};
  opacity: 0.8;
  margin: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 1px;
  position: relative;
  border: 1px solid ${p => p.theme.colors.white};
  &:hover {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.gray};
  }
`

export const Copyright = styled.span`
  font-size: small;
  color: ${p => p.theme.colors.white};
  font-weight: 700;
  @media (max-width: 1024px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 15px;
    border-top: 1px solid ${p => p.theme.colors.white};
    padding-top: 15px;
  }
  @media (min-width: 1025px) {
    order: 1;
  }
`
export const FooterBottom = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid ${p => p.theme.colors.white};
  width: 100%;
  justify-content: space-between;
  padding-top: 20px;
  margin-top: 20px;
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    border-color: transparent;
    padding-top: 0px;
  }
`

export const FooterNav = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -10px;
  margin-right: -10px;
  justify-content: flex-end;
  flex-wrap: wrap;
  @media (min-width: 1025px) {
    order: 2;
  }
`
export const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 992px) {
    flex-wrap: wrap;
  }
`

export const FooterDescription = styled.div`
  flex: 0 0 400px;
  max-width: 400px;
  @media (max-width: 992px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`
export const FooterLink = styled(TextLink)`
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Footer = () => (
  <FooterWrapper>
    <Container>
      <FooterTop>
        <FooterDescription>
          <FooterTitle>Thank you for supporting us!</FooterTitle>
        </FooterDescription>
        <div>
          <SocialRow>
            {socialLinks.map(({ url, title, icon }) => (
              <SocialLink href={url} key={title} aria-label={title}>
                <Svg d={icon} />
              </SocialLink>
            ))}
          </SocialRow>
        </div>
      </FooterTop>
    </Container>
    <Container>
      <FooterBottom>
        <FooterNav>
          {links.map(({ url, title, icon }) => (
            <FooterLink
              url={url}
              key={title}
              color={theme.colors.white}
              hoverColor={theme.colors.gray}
              padding='0 10px'
              aria-label={title}
            >
              {title}
            </FooterLink>
          ))}
        </FooterNav>
        <Copyright>
          © COPYRIGHT {new Date().getFullYear()}. All Rights Reserved.
        </Copyright>
      </FooterBottom>
    </Container>
  </FooterWrapper>
)

export default Footer
