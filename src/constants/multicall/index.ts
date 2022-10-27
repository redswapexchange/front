import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'
import { confInfo } from '../../utils'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: confInfo.multiCall, // TODO
  [ChainId.TESTNET]: confInfo.multiCall // '0xbE8D16084841875a1f398E6C3eC00bBfcbFa571b'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
