import { createGlobalStyle } from 'styled-components'

import ProximaNovaRegularWoff2 from '../../assets/fonts/ProximaNovaRegular/ProximaNova-Regular.woff2'
import ProximaNovaRegularWoff from '../../assets/fonts/ProximaNovaRegular/ProximaNova-Regular.woff'
import ProximaNovaRegularWoffSvg from '../../assets/fonts/ProximaNovaRegular/ProximaNova-Regular.svg'

export const FixedGlobalStyle = createGlobalStyle`
    html, input, textarea, button {
      font-family: "Proxima Nova Rg, Noto Sans", sans-serif;
      letter-spacing: -0.018em;
      font-display: fallback;
    }
    @supports (font-variation-settings: normal) {
      html, input, textarea, button {
        font-family: "Proxima Nova Rg, Noto Sans", sans-serif;
      }
    }

    html,
    body {
      margin: 0;
      padding: 0;
    }

    * {
      box-sizing: border-box;
    }

    button {
      user-select: none;
    }

    html {
      font-weight: normal;
      font-style: normal;
      font-family: "Proxima Nova Rg, Noto Sans", sans-serif;
      font-size: 16px;
      font-variant: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
`

export const ThemedGlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Proxima Nova Rg';
      src: url(${ProximaNovaRegularWoff2}) format('woff2'),
          url(${ProximaNovaRegularWoff}) format('woff'),
          url(${ProximaNovaRegularWoffSvg}'#ProximaNova-Regular') format('svg');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }


    html {
      color: ${({ theme }) => (theme as any).colors.text1};
      background-color:${({ theme }) => (theme as any).colors.bg0};
    }  
    body {
      min-height: 100vh;
      background-position: 0 -30vh;
      background-repeat: no-repeat;
    }
`
