import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1756a9718035E828e287AB345180EA45e1673722', // TODO
  [ChainId.TESTNET]: '0x1756a9718035E828e287AB345180EA45e1673722' // '0xbE8D16084841875a1f398E6C3eC00bBfcbFa571b'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
