import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'
import swapNav from '../../assets/images/swapNav.png'
import swapHoverNav from '../../assets/images/swapHoverNav.png'
import { swapLink } from '../../utils'

import liquidityNav from '../../assets/images/liquitdiNvg.png'
import liquidityHoverNav from '../../assets/images/liquitdiHoverNvg.png'
import chartNav from '../../assets/images/chartNav.png'
import chartHoverNav from '../../assets/images/chartHoverNav.png'
import codeNav from '../../assets/images/codeNav.png'
import codeHoverNav from '../../assets/images/codeHoverNav.png'
import { NavLink, useHistory } from 'react-router-dom'

const Nav: React.FC = () => {
  // const [isMore, setIsMore] = useState(false)

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

  return (
    <StyledNav>
      <StyledLink className="swap-nav" to={swapLink.swap}>
        <img className="navImg" src={currPath === '/swap' ? swapHoverNav : swapNav} alt="" sizes="" />
        <span className="navText" style={textColor(currPath === '/swap')}>
          <TranslatedText translationId={202}>Swap</TranslatedText>
        </span>
      </StyledLink>

      <StyledLink className="pool-nav" to={swapLink.liquidity}>
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

      <StyledAbsoluteLink className="chart-nav" href={swapLink.chart}>
        <img className="navImg" src={chartNav} alt="" sizes="" />
        <span className="navText">
          <TranslatedText translationId={202}>Chart</TranslatedText>
        </span>
      </StyledAbsoluteLink>

      <StyledAbsoluteLink className="code-nav" href={swapLink.code}>
        <img className="navImg" src={codeNav} alt="" sizes="" />
        <span className="navText">
          <TranslatedText translationId={202}>Code</TranslatedText>
        </span>
      </StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  font-size: 14px;
  font-weight: 700;
`

const StyledLink = styled(NavLink)`
  position: relative;
  color: #282728;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-right: 40px;
  background-size: auto 20px;
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

  .navText {
    padding-left: 10px;
    font-size: 18px;
    font-weight: 500;
  }
  @media (max-width: 400px) {
    margin-right: 24px;
  }
  .navImg {
    height: 20px;
    width: auto;
  }
`

const StyledAbsoluteLink = styled.a`
  position: relative;
  color: #282728;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-right: 40px;
  background-size: auto 20px;
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
    font-size: 18px;
    font-weight: 500;
  }
  @media (max-width: 400px) {
    margin-right: 24px;
  }
  .navImg {
    height: 20px;
    width: auto;
  }
`

// const MoreBoxItem = styled.div`
//   position: absolute;
//   color: rgba(127, 134, 143, 1);
//   white-space: nowrap;
//   margin-left: -23px;
//   background: white;
//   width: 100px;
//   height: 77px;
//   margin-top: 6px;
//   padding: 0 16px;
//   border-radius: 14px;
//   & > div:nth-child(2) {
//     margin-top: 20px;
//   }
// `

export default Nav
