import { confInfo } from '../utils'

const chainId = confInfo.chainId

export const contractAddresses = {
  sushi: {
    [chainId]: '0xD0198483de27235c28B707AC65283D63Cc09DC63'
    // 170: '0x96D808A323d9eB1De23F7d82F83574e6969c5591',
  },
  weth: {
    [chainId]: confInfo.weth
    // 170: '0x96D808A323d9eB1De23F7d82F83574e6969c5591',
  }
}

const multicall = {
  [chainId]: confInfo.multiCall
  // 70: '0x03fF6895aB1Fdff998665E34368B69a032F50578',
}

interface AddressProps {
  [chainId]: string // Address of the contract
}
export const getAddress = (obj: AddressProps) => {
  return obj[chainId] ? obj[chainId] : obj
}

export const getMulticallAddress = () => {
  return multicall[chainId]
}

export const getPipiAddress = () => {
  return getAddress(contractAddresses.sushi)
}
