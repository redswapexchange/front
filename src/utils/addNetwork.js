import { Web3Provider } from '@ethersproject/providers'
import { BigNumber, utils } from 'ethers'

// interface AddNetworkArguments {
//   library: Web3Provider
// }

// provider.request returns Promise<any>, but wallet_switchEthereumChain must return null or throw
// see https://github.com/rekmarks/EIPs/blob/3326-create/EIPS/eip-3326.md for more info on wallet_switchEthereumChain
export async function addAlyxNetwork({ library }) {
  if (window && window.ethereum && window.ethereum.isMetaMask) {
    const formattedChainId = utils.hexStripZeros(BigNumber.from(1314).toHexString())
    // try {
    //   await library?.provider.request({
    //     method: 'wallet_switchEthereumChain',
    //     params: [{ chainId: formattedChainId }],
    //   })
    //   return
    // } catch (error) {

    // }
    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: formattedChainId,
            chainName: "Alyx Mainnet",
            rpcUrls: ["https://rpc.alyxchain.com"],
            nativeCurrency: {
              name: "Alyx Mainnet Native Token", 
              symbol: "ALYX",
              decimals: 18
            },
            blockExplorerUrls: ['https://www.alyxscan.com/'],
            iconUrls: ['https://www.alyxchain.com/static/media/logo-color.5e8309c2ef9eaca8fd1e.png'],
          },
        ],
      })
    } catch (error) {
      console.error('error adding ALYX: ', error)
    }
  }
}
