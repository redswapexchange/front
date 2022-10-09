import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xcF44844b769BBFAFCc3D5Fa1B90163838b871e3d', // TODO
  [ChainId.TESTNET]: '0xcF44844b769BBFAFCc3D5Fa1B90163838b871e3d' // '0xbE8D16084841875a1f398E6C3eC00bBfcbFa571b'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
