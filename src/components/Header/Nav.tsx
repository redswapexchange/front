import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'
import swapNav from '../../assets/images/swapNav.png'
import swapHoverNav from '../../assets/images/swapHoverNav.png'

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
      {/* <StyledAbsoluteLink href="https://puddingswap.finance/farms">
        <TranslatedText translationId={198}>Farm</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://puddingswap.finance/staking">
        <TranslatedText translationId={200}>Staking</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://puddingswap.finance/pudvault">
        <TranslatedText translationId="nav-pud-vault">LockVault</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://puddingswap.finance/ePud">
        <TranslatedText translationId={218}>ePUD Pools</TranslatedText>
      </StyledAbsoluteLink> */}
      {/* <StyledAbsoluteLink href="https://puddingswap.finance/chefnft">NFT</StyledAbsoluteLink> */}

      {/* <div
        style={{ height: '20px', width: '28px', marginRight: '24px' }}
        onMouseLeave={el => {
          setIsMore(false)
        }}
      >
        <StyledAbsoluteLink href="https://puddingswap.finance/Synthesiser">
          <div
            onMouseOver={() => {
              setIsMore(true)
            }}
          >
            NFT
          </div>

          {isMore && (
            <MoreBoxItem
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '140px',
                height: '77px',
                justifyContent: 'space-around'
              }}
            >
              <StyledAbsoluteLink href="https://puddingswap.finance/chefnft">
                <TranslatedText translationId={'Blind Box'}>Blind Box</TranslatedText>
              </StyledAbsoluteLink>
              <StyledAbsoluteLink href="https://puddingswap.finance/Synthesiser">
                <TranslatedText translationId={'Pudding Making'}>Pudding Making</TranslatedText>
              </StyledAbsoluteLink>
            </MoreBoxItem>
          )}
        </StyledAbsoluteLink>
      </div> */}

      <StyledLink className="swap-nav" to={'/swap'}>
        <img className="navImg" src={currPath === '/swap' ? swapHoverNav : swapNav} alt="" sizes="" />
        <span className="navText" style={textColor(currPath === '/swap')}>
          <TranslatedText translationId={202}>Swap</TranslatedText>
        </span>
      </StyledLink>

      <StyledLink className="pool-nav" to={'/pool'}>
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

      <StyledAbsoluteLink className="chart-nav" href="/">
        <img className="navImg" src={chartNav} alt="" sizes="" />
        <span className="navText">
          <TranslatedText translationId={202}>Chart</TranslatedText>
        </span>
      </StyledAbsoluteLink>

      <StyledAbsoluteLink className="code-nav" href="/">
        <img className="navImg" src={codeNav} alt="" sizes="" />
        <span className="navText">
          <TranslatedText translationId={202}>Code</TranslatedText>
        </span>
      </StyledAbsoluteLink>
      {/* <StyledAbsoluteLink href="https://puddingswap.finance/ido" className="active">
        IDO
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://info.puddingswap.finance">
        <TranslatedText translationId={348}>Analytics</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://voting.puddingswap.finance">
        <TranslatedText translationId={370}>Voting</TranslatedText>
      </StyledAbsoluteLink> */}
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
