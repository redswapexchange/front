import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import logoImg from '../../assets/images/logo-swap-light.png'
import logoRed from '../../assets/images/redswapsvg.png'
import { swapLink } from '../../utils'

const HomeWarp = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #faf8f5;
  position: fixed;
  top: 0;
  right: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .home-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .logo-div {
    text-align: center;
    &.last-child {
      margin-top: 10px;
    }
    img {
      width: 10rem;
    }
  }
  .btn-div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 2.5rem;
  }
  .home-footer {
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    text-align: center;
    color: #c63745;
    font-size: 13px;
  }
`

const StyledNavLink = styled(NavLink)`
  width: 160px;
  height: 40px;
  background-color: #c63745;
  color: #fff;
  font-size: 14px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
`

const StyledLink = styled.a`
  width: 160px;
  height: 40px;
  background-color: #c63745;
  color: #fff;
  font-size: 14px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
`

export default function Home() {
  // const [headerEl, setHeaderEl] = useState<any>()
  // useEffect(() => {
  //   const el = document.querySelector('#app-header')
  //   setHeaderEl(el)
  //   if (headerEl) {
  //     headerEl.style.display = 'none'
  //   }
  // }, [headerEl])

  return (
    <HomeWarp>
      <div className="home-body">
        <div className="home-content">
          <div className="logo-div">
            <img className="logo-1" src={logoImg} alt="" />
          </div>
          <div className="logo-div last-child">
            <img className="logo-2" src={logoRed} alt="" />
          </div>
          <div className="btn-div">
            <StyledLink href={swapLink.crossChainBridge}> Cross-chain Bridge </StyledLink>
            <StyledNavLink to={swapLink.swap}> Enter Dapp </StyledNavLink>
          </div>
        </div>
      </div>
      <div className="home-footer">Copyright @ 2022 Redswap. All rights reserved.</div>
    </HomeWarp>
  )
}
