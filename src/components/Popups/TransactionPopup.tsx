import React, { useContext } from 'react'
import { AlertCircle, CheckCircle } from 'react-feather'
import styled, { ThemeContext } from 'styled-components'
import { useActiveWeb3React } from '../../hooks'
import { TYPE, ExternalLink } from '../Shared'
import { getEtherscanLink } from '../../utils'
import { AutoColumn } from '../Column'
import { AutoRow } from '../Row'

const RowNoFlex = styled(AutoRow)`
  flex-wrap: nowrap;
`

export default function TransactionPopup({
  hash,
  success,
  summary
}: {
  hash: string
  success?: boolean
  summary?: string
}) {
  const { chainId } = useActiveWeb3React()

  const theme = useContext(ThemeContext)
  const chainSymbol = process.env.REACT_APP_CHAIN_SYMBOL
  return (
    <RowNoFlex>
      <div style={{ paddingRight: 16 }}>
        {success ? (
          <CheckCircle color={theme.colors.green1} size={24} />
        ) : (
          <AlertCircle color={theme.colors.red1} size={24} />
        )}
      </div>
      <AutoColumn gap="8px">
        <TYPE.body fontWeight={500}>{summary ?? 'Hash: ' + hash.slice(0, 8) + '...' + hash.slice(58, 65)}</TYPE.body>
        {chainId && (
          <ExternalLink href={getEtherscanLink(chainId, hash, 'transaction')}>View on {chainSymbol}</ExternalLink>
        )}
      </AutoColumn>
    </RowNoFlex>
  )
}
