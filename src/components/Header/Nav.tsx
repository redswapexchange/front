import React from 'react'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'
import swapNav from '../../assets/images/swapNav.png'
import swapHoverNav from '../../assets/images/swapHoverNav.png'

import liquitdiNvg from '../../assets/images/liquitdiNvg.png'
import chartNav from '../../assets/images/chartNav.png'
import codeNav from '../../assets/images/codeNav.png'

const Nav: React.FC = () => {
  // const [isMore, setIsMore] = useState(false)

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

      <StyledAbsoluteLink href="/" className="active">
        <img className="navImg" src={swapNav} alt="" sizes="" />
        <span className="navText">
          <TranslatedText translationId={202}>Swap</TranslatedText>
        </span>
      </StyledAbsoluteLink>

      <StyledAbsoluteLink href="/">
        <img className="navImg" src={liquitdiNvg} alt="" sizes="" />
        <span className="navText">
          <TranslatedText translationId={202}>Liquidity</TranslatedText>
        </span>
      </StyledAbsoluteLink>

      <StyledAbsoluteLink href="/">
        <img className="navImg" src={chartNav} alt="" sizes="" />
        <span className="navText">
          <TranslatedText translationId={202}>Chart</TranslatedText>
        </span>
      </StyledAbsoluteLink>

      <StyledAbsoluteLink href="/">
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

const StyledAbsoluteLink = styled.a`
  position: relative;
  color: #282728;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-right: 40px;
  background-size: auto 20px;
  // &:hover {
  //   color: ${({ theme }) => theme.colors.primary};
  //   background-image: url(${swapHoverNav});
  // }
  .navText {
    padding-left: 10px;
    font-size: 16px;
    font-weight: 600;
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
