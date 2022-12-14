import React, { useCallback, useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'
// import { Text } from 'rebass'
import { useHistory } from 'react-router-dom'

import styled from 'styled-components'
import Settings from '../Settings'
import Nav from './Nav'
import { useIsDarkMode } from '../../state/user/hooks'
import Logo from './Logo'
import menuIcon from '../../assets/images/menu.png'
import MobileMenu from '../MobileMenu'
import AccountButton from './AccountButton'
import Web3Status from '../Web3Status'
import ShareLink from './ShareLink'

const HeaderFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  top: 0;
  position: absolute;
  background:  ${({ theme }) => theme.colors.bg1}
  z-index: 2;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    width: calc(100%);
    position: relative;
  `};
`
const Menu = styled.div`
  display: none;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: block;
    width: 30px;
    margin-right: 10px;
    img {
      width: 100%;
      display: block;
    }
  `};
`
const HeaderElement = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 320px) {
    width: 20%;
  }
`

const HeaderControlsMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
`

const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToSmall`
  `};
`

const StyledTopBarInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 24px;
  @media (max-width: 850px) {
    min-width: auto;
  }
`
const StyledAccountButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    .lng-switch, .price {
      display: none;
    }
  `};
`
// const Price = styled.div`
//   color: ${props => props.theme.colors.primary};
//   margin-right: 24px;
//   font-weight: bolder;
// `

// const PriceLInk = styled.a`
// color: ${props => props.theme.colors.primary};
// margin-right: 24px;
// font-weight: bolder;
// text-decoration: none;
// `

// function isZero(num: number) {
//   return Math.abs(num - 0) <= 1e-8
// }

export default function Header() {
  const isDark = useIsDarkMode()
  const history = useHistory()
  const [mobileMenu, setMobileMenu] = useState(false)

  // ?????????????????????
  const [isShow, setIsShow] = useState(false)
  const handlePresentMobileMenu = useCallback(() => {
    setMobileMenu(true)
  }, [setMobileMenu])
  const handleDismissMobileMenu = useCallback(() => {
    setMobileMenu(false)
  }, [setMobileMenu])

  useEffect(() => {
    const { location } = history
    setIsShow(location.pathname !== '/' && location.pathname !== '/home')
    history.listen(historyLocation => {
      const { pathname } = historyLocation
      setIsShow(pathname !== '/' && pathname !== '/home')
    })
  }, [history])

  return (
    <HeaderFrame style={isShow ? {} : { display: 'none' }}>
      <StyledTopBarInner>
        <HeaderElement>
          <Menu onClick={handlePresentMobileMenu}>
            <img src={menuIcon} alt="menu" />
          </Menu>
          <Title href="/">
            <Logo isDark={isDark} />
          </Title>
          {!isMobile && <Nav />}
        </HeaderElement>
        {isMobile && (
          <HeaderControlsMobile>
            <AccountButton />
            <Settings />
          </HeaderControlsMobile>
        )}
        {!isMobile && (
          <HeaderControls>
            <HeaderElement>
              <StyledAccountButtonWrapper>
                <ShareLink />
                <Web3Status />
                <AccountButton />
                <Settings />
                {/* <LngSwithForWeb /> */}
              </StyledAccountButtonWrapper>
            </HeaderElement>
          </HeaderControls>
        )}
        <MobileMenu onDismiss={handleDismissMobileMenu} visible={mobileMenu} />
      </StyledTopBarInner>
    </HeaderFrame>
  )
}
