import React from 'react'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'
import { swapLink } from '../../utils'

import tmLinkImg from '../../assets/images/tm_link.png'
import twitterLinkImg from '../../assets/images/twitter_link.png'

const ShareLinkDiv = styled.div`
  margin-right: 1rem;
  display: flex;
  align-items: center;
  &.style-mobile {
    position: absolute;
    bottom: 10px;
    left: 0;
  }
  .link-a {
    padding-top: 4px;
    margin-left: 0.8rem;
    display: flex;
    align-items: center;
    .img-tm {
      height: 20px;
    }
    .img-twitter {
      height: 20px;
    }
  }
`

export default function ShareLink() {
  return (
    <ShareLinkDiv className={isMobile ? 'style-mobile' : ''}>
      <a className="link-a" href={swapLink.tm} target="_blank" rel="noopener noreferrer">
        <img className="img-tm" src={tmLinkImg} alt="" />
      </a>
      <a className="link-a" href={swapLink.twitter} target="_blank" rel="noopener noreferrer">
        <img className="img-twitter" src={twitterLinkImg} alt="" />
      </a>
    </ShareLinkDiv>
  )
}
