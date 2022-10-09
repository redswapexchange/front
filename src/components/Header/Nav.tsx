import React from 'react'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'

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
        <TranslatedText translationId={202}>Exchange</TranslatedText>
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
  color: rgb(127, 134, 143);
  margin-right: 24px;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: 400px) {
    margin-right: 24px;
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
