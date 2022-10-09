import React from 'react'
import styled from 'styled-components'
import logoDark from '../../../assets/images/logo-pipi-light.png'
import logoLight from '../../../assets/images/logo-pipi-light.png'
import redswapsvg from '../../../assets/images/redswapsvg.png'
// import logoText from '../../../assets/images/logo_text.png'÷\

interface LogoProps {
  isDark: boolean
}
const Logo: React.FC<LogoProps> = ({ isDark }) => {
  return (
    <StyledLogo>
      <img className="logo-img" src={isDark ? logoDark : logoLight} alt="logo" />
      {/* <div className="text">REDSWAP</div> */}
      <img className="red-log-img" src={redswapsvg} alt="" />
    </StyledLogo>
  )
}

const StyledLogo = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  margin-right: 42px;
  text-decoration: none;
  .logo-img {
    width: 37px;
  }
  .text {
    margin-left: 6px;
    height: 23px;
    width: auto;
    font-size: 20px;
    font-weight: 600;
    color: #000;
  }

  .red-log-img {
    margin-left: 6px;
    height: 23px;
    width: auto;
  }
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    .text {
      display: none
    }
  `};
`

export default Logo
