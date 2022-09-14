import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x09F67cfA0Bf612D96cF85b78dafb872166459ABA', // TODO
  [ChainId.TESTNET]: '' // '0xbE8D16084841875a1f398E6C3eC00bBfcbFa571b'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
