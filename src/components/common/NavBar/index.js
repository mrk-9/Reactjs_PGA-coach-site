import 'datejs'
import React, { Component } from 'react'
import LogoImg from '../../../images/Logo.svg'
import theme from '../../theme'
import { ButtonLink, Link } from '../Links'
import { cross, hamburger } from '../Svg/elements'
import Svg from './../Svg'
import { links, LinksContainer } from './navLinks'
import {
  AsideNavList,
  AsideWrapper,
  CrossWrapper,
  HamburgerWrapper,
  Logo,
  NavList,
  NavWrapper,
  SvgButtonWrapper,
  TopSide
} from './styles'
export default class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.toggleStateHandler = this.toggleStateHandler.bind(this)
  }

  toggleStateHandler () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    return (
      <NavWrapper>
        <TopSide>
          <Link url='/' aria-label='PGA Coach'>
            <Logo alt='Logo' src={LogoImg} />
          </Link>
          <NavList>
            <LinksContainer
              padding='0 20px'
              color={theme.colors.white}
              links={links}
            />
            <ButtonLink
              url='https://pgacoach.lightspeedvt.com/'
              bgColor={theme.colors.gold}
              borderColor={theme.colors.gold}
              color={theme.colors.white}
              bgHoverColor={theme.colors.darkGold}
              borderHoverColor={theme.colors.darkGold}
              padding='5px 20px'
              aria-label='Sing In'
            >
              SIGN IN
            </ButtonLink>
          </NavList>

          <HamburgerWrapper>
            <SvgButton svg={hamburger} handler={this.toggleStateHandler} />
          </HamburgerWrapper>
        </TopSide>
        <Aside
          isOpen={this.state.isOpen}
          svg={cross}
          handler={this.toggleStateHandler}
        />
      </NavWrapper>
    )
  }
}
export const SvgButton = ({ svg, handler }) => (
  <SvgButtonWrapper onClick={handler} aria-label='Open navigation'>
    <Svg d={svg} />
  </SvgButtonWrapper>
)

export const Aside = ({ isOpen, svg, handler }) => (
  <AsideWrapper active={isOpen}>
    <CrossWrapper>
      <SvgButton svg={svg} handler={handler} />
    </CrossWrapper>
    <AsideNavList>
      <LinksContainer
        padding='20px 0'
        color={theme.colors.navy}
        links={links}
      />
      <ButtonLink
        url='https://pgacoach.lightspeedvt.com/'
        bgColor={theme.colors.gold}
        borderColor={theme.colors.gold}
        color={theme.colors.white}
        bgHoverColor={theme.colors.darkGold}
        borderHoverColor={theme.colors.darkGold}
        padding='5px 20px'
        aria-label='Sign In'
      >
        SIGN IN
      </ButtonLink>
    </AsideNavList>
  </AsideWrapper>
)
