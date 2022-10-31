import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

import { NavLink, useHistory } from 'react-router-dom'
import TranslatedText from '../TranslatedText'
import swapNav from '../../assets/images/swapNav.png'
import swapHoverNav from '../../assets/images/swapHoverNav.png'

import liquidityNav from '../../assets/images/liquitdiNvg.png'
import liquidityHoverNav from '../../assets/images/liquitdiHoverNvg.png'
import chartNav from '../../assets/images/chartNav.png'
import chartHoverNav from '../../assets/images/chartHoverNav.png'
import codeNav from '../../assets/images/codeNav.png'
import codeHoverNav from '../../assets/images/codeHoverNav.png'

import logo from '../../assets/images/logo3.png'

interface MobileMenuProps {
  onDismiss: () => void
  visible?: boolean
}

// function isZero(num: number) {
//   return Math.abs(num - 0) <= 1e-8
// }

// eslint-disable-next-line react/prop-types
const MobileMenu: React.FC<MobileMenuProps> = ({ onDismiss, visible }) => {
  const history = useHistory()

  const [currPath, setCurrPath] = useState<string>()

  useEffect(() => {
    const { location } = history
    setCurrPath(location.pathname)
    history.listen(historyLocation => {
      // 每次路由变化都会执行这个方法
      setCurrPath(historyLocation.pathname)
    })
  }, [history, currPath])

  function textColor(bl: boolean) {
    if (bl) return { color: '#c63745' }
    return {}
  }

  if (visible) {
    return (
      <StyledMobileMenuWrapper>
        <StyledBackdrop onClick={onDismiss} />
        <StyledMobileMenu>
          <Bg></Bg>
          <LogoLink to={'/'} onClick={onDismiss}>
            <img src={logo} alt="" />
          </LogoLink>
          <Cn>
            <StyledLink to="/swap" onClick={onDismiss}>
              <img className="navImg" src={currPath === '/swap' ? swapHoverNav : swapNav} alt="" sizes="" />
              <span className="navText" style={textColor(currPath === '/swap')}>
                <TranslatedText translationId={202}>Swap</TranslatedText>
              </span>
            </StyledLink>
          </Cn>
          <Cn>
            <StyledLink to={'/pool'} onClick={onDismiss}>
              <img
                className="navImg"
                src={currPath !== '/' && currPath !== '/swap' ? liquidityHoverNav : liquidityNav}
                alt=""
                sizes=""
              />
              <span className="navText" style={textColor(currPath !== '/' && currPath !== '/swap')}>
                <TranslatedText translationId={202}>Liquidity</TranslatedText>
              </span>
            </StyledLink>
          </Cn>
          <Cn>
            <StyledAbsoluteLink href="/" onClick={onDismiss}>
              <img className="navImg" src={chartNav} alt="" sizes="" />
              <span className="navText">
                <TranslatedText translationId={202}>Chart</TranslatedText>
              </span>
            </StyledAbsoluteLink>
          </Cn>
          <Cn>
            <StyledAbsoluteLink href="/" onClick={onDismiss}>
              <img className="navImg" src={codeNav} alt="" sizes="" />
              <span className="navText">
                <TranslatedText translationId={202}>Code</TranslatedText>
              </span>
            </StyledAbsoluteLink>
          </Cn>
        </StyledMobileMenu>
      </StyledMobileMenuWrapper>
    )
  }
  return null
}

// const Bottom = styled.div`
//   position: absolute;
//   left: 0;
//   z-index: 1000;
//   width: 80%;
//   bottom: 120px;
//   right: 0;
//   margin: auto;
//   text-align: center;
//   .mobile-lng-swith {
//     width: 100%;
//     height: 30px;
//     line-height: 30px;
//     margin-bottom: 20px;
//   }
// `

const Bg = styled.div`
  position: absolute;
  right: 0;
  width: 70%;
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  transform: rotate(180deg);
`
const StyledBackdrop = styled.div`
  position: absolute;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${props => props.theme.colors.bg5};
`

const StyledMobileMenuWrapper = styled.div`
  position: fixed;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
`

const slideIn = keyframes`
  0% {
    transform: translateX(0)
  }
  100% {
    transform: translateX(100%);
  }
`

const StyledMobileMenu = styled.div`
  animation: ${slideIn} 0.3s forwards ease-out;
  background-color: ${props => props.theme.colors.bg1};
  border-left: 1px solid ${props => props.theme.colors.bg1};
  position: absolute;
  top: 0;
  right: 100%;
  bottom: 0;
  width: calc(100% - 130px);
  padding-top: 24px;
`

const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding-left: 10px;
  img {
    max-width: 50%;
  }
`

const StyledLink = styled(NavLink)`
  position: relative;
  box-sizing: border-box;
  color: #282728;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    &.swap-nav {
      .navImg {
        content: url(${swapHoverNav});
      }
    }
    &.pool-nav {
      .navImg {
        content: url(${liquidityHoverNav});
      }
    }
  }
  .navImg {
    height: 20px;
    width: auto;
  }
  .navText {
    padding-left: 10px;
    font-size: 16px;
    font-weight: 500;
  }
  &.active {
    color: ${props => props.theme.colors.red3};
  }
`
const StyledAbsoluteLink = styled.a`
  position: relative;
  color: #282728;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    &.chart-nav {
      .navImg {
        content: url(${chartHoverNav});
      }
    }
    &.code-nav {
      .navImg {
        content: url(${codeHoverNav});
      }
    }
  }
  .navText {
    padding-left: 10px;
    font-size: 16px;
    font-weight: 500;
  }
  .navImg {
    height: 20px;
    width: auto;
  }
  &:hover {
    color: ${props => props.theme.colors.red3};
  }
  &.active {
    color: ${props => props.theme.colors.red3};
  }
`
const Cn = styled.div`
  margin: 30px 24px 0 24px;
`
// const Price = styled.div`
//   width: 100%;
//   padding-top: 22px;
//   padding-bottom: 10px;
//   color: ${props => props.theme.colors.primary};
//   text-align: left;
//   font-weight: bolder;
// `
export default MobileMenu
