import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import { NavLink, Link as HistoryLink } from 'react-router-dom'

import { ArrowLeft } from 'react-feather'
import { RowBetween } from '../Row'
import QuestionHelper from '../QuestionHelper'
import TranslatedText from '../TranslatedText'
import logo from '../../assets/images/logo4.png'

const Tabs = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`

const activeClassName = 'ACTIVE'

const StyledNavLink = styled(NavLink).attrs({
  activeClassName
})`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: center;
  justify-content: center;
  height: 3rem;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text3};
  font-size: 20px;

  &.${activeClassName} {
    border-radius: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text1};
  }

  :hover,
  :focus {
    color: ${({ theme }) => darken(0.1, theme.colors.text1)};
  }
`

const StyleAddNavLink = styled(NavLink)`
  padding: 10px 15px;
  // background-color: #5e0b14;
  border: 2px solid #5e0b14;
  cursor: pointer;
  text-decoration: none;
  border-radius: 20px;
  font-weight: 600;
  color: #fff;
  font-size: 14px;
`

const ActiveText = styled.div`
  font-weight: 500;
  font-size: 20px;
`

const StyledArrowLeft = styled(ArrowLeft)`
  color: ${({ theme }) => theme.colors.text1};
`

const TabHeader = styled.div`
  width: 100%;
  height: 70px;
  .tab-body {
    position: absolute;
    width: 100%;
    height: 70px;
    text-transform: capitalize;
    background-color: ${({ theme }) => theme.colors.primary1};
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: space-between;
    .tab-logo {
      display: flex;
      align-items: center;
    }
    .title {
      font-size: 18px;
      font-weight: 600;
      padding-left: 15px;
      text-transform: uppercase;
    }
  }
  .logo-img {
    height: 36px;
  }
`

function SwapTabHeader({ title }: { title: string }) {
  return (
    <TabHeader>
      <div className="tab-body">
        <div className="tab-logo">
          <img className="logo-img" src={logo} alt="" />
          <span className="title">{title}</span>
        </div>
        {title === 'pool' && (
          <StyleAddNavLink id={'add-liquidity-link'} to="/add/ETH">
            Add Liquidity
          </StyleAddNavLink>
        )}
      </div>
    </TabHeader>
  )
}

export function SwapPoolTabs({ active }: { active: 'swap' | 'pool' }) {
  return (
    <>
      <SwapTabHeader title={active} />
      <Tabs style={{ marginBottom: '20px', display: 'none' }}>
        <StyledNavLink id={`swap-nav-link`} to={'/swap'} isActive={() => active === 'swap'}>
          <TranslatedText translationId={268}>Swap</TranslatedText>
        </StyledNavLink>
        <StyledNavLink id={`pool-nav-link`} to={'/pool'} isActive={() => active === 'pool'}>
          <TranslatedText translationId={270}>Pool</TranslatedText>
        </StyledNavLink>
      </Tabs>
    </>
  )
}

export function FindPoolTabs() {
  return (
    <>
      <SwapTabHeader title={'Import Pool'} />
      <Tabs>
        <RowBetween style={{ padding: '1rem' }}>
          <HistoryLink to="/pool">
            <StyledArrowLeft />
          </HistoryLink>
          <ActiveText>Pool</ActiveText>
          <QuestionHelper text={"Use this tool to find pairs that don't automatically appear in the interface."} />
        </RowBetween>
      </Tabs>
    </>
  )
}

export function AddRemoveTabs({ adding }: { adding: boolean }) {
  return (
    <>
      <SwapTabHeader title={'Liquidity'} />
      <Tabs>
        <RowBetween style={{ padding: '1rem' }}>
          <HistoryLink to="/pool">
            <StyledArrowLeft />
          </HistoryLink>
          {/* <ActiveText>{adding ? 'Add' : 'Remove'} Liquidity</ActiveText> */}
          <ActiveText>{adding ? 'Add' : 'Remove'}</ActiveText>
          <QuestionHelper
            text={
              adding
                ? 'When you add liquidity, you are given pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time.'
                : 'Removing pool tokens converts your position back into underlying tokens at the current rate, proportional to your share of the pool. Accrued fees are included in the amounts you receive.'
            }
          />
        </RowBetween>
      </Tabs>
    </>
  )
}
