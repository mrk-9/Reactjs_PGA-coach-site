import styled from 'styled-components'

export const NavWrapper = styled.nav`
  width: 100%;
  background-color: ${p => p.theme.colors.navy};
`

export const TopSide = styled.div`
  height: 120px;
  padding-bottom: 37px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media (max-width: 1200px) {
    height: 70px;
    padding-bottom: 0px;
  }
`

export const NavList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 60px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`

export const Title = styled.div`
  color: ${p => p.theme.colors.white};
  font-size: 14px;
  margin: auto;
  @media screen and (min-width: 1025px) {
    font-size: 18px;
  }
`

export const Event = styled.span`
  font-weight: bold;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const Logo = styled.img`
  position: absolute;
  left: 60px;
  top: 43px;
  width: 278px;
  @media screen and (max-width: 1200px) {
    width: 178px;
    top: 25px;
  }
  @media screen and (max-width: 420px) {
    width: 148px;
    top: 25px;
    left: 20px;
  }
`

export const AsideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.colors.white};
  transform: translateX(${p => (p.active ? 0 : -100)}%);
  transition: transform 0.3s linear;
`
export const SvgButtonWrapper = styled.button`
  padding: 0;
  background-color: transparent;
  border: 0;
  text-align: left;
  color: ${p => p.theme.colors.gray};
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

export const CrossWrapper = styled.div`
  align-self: flex-end;
  padding-top: 36px;
  padding-right: 50px;
`

export const HamburgerWrapper = styled.div`
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  padding-right: 50px;
  padding-top: 10px;
  display: none;

  @media screen and (max-width: 1200px) {
    display: flex;
  }
  @media screen and (max-width: 420px) {
    padding-right: 30px;
  }
`

export const AsideNavList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`
