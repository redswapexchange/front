import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { TYPE } from '../Shared'
import Modal from '../Modal'
import { AutoRow, RowBetween } from '../Row'
import { AutoColumn } from '../Column'
import { AlertTriangle } from 'react-feather'
import { ButtonError } from '../Button'
import { confInfo } from '../../utils'

const WarningContainer = styled.div`
  max-width: 420px;
  width: 100%;
  padding: 1rem;
  background: rgba(242, 150, 2, 0.05);
  border: 1px solid #f3841e;
  border-radius: 20px;
  overflow: auto;
`

const StyledWarningIcon = styled(AlertTriangle)`
  stroke: ${({ theme }) => theme.colors.red2};
`

export default function SyrupWarningModal({
  isOpen,
  transactionType,
  onConfirm
}: {
  isOpen: boolean
  transactionType: string
  onConfirm: () => void
}) {
  const [understandChecked, setUnderstandChecked] = useState(false)
  const toggleUnderstand = useCallback(() => setUnderstandChecked(uc => !uc), [])

  const handleDismiss = useCallback(() => null, [])
  return (
    <Modal isOpen={isOpen} onDismiss={handleDismiss} maxHeight={90}>
      <WarningContainer className="token-warning-container">
        <AutoColumn gap="lg">
          <AutoRow gap="6px">
            <StyledWarningIcon />
            <TYPE.main color={'red2'}>{confInfo.chainCoin} Warning</TYPE.main>
          </AutoRow>
          {transactionType !== '' && (
            <>
              <TYPE.body color={'red2'}>
                Please be careful when <strong>{transactionType}</strong> {confInfo.chainCoin}.
              </TYPE.body>
              <TYPE.body color={'red2'}>
                {transactionType === 'Buying'
                  ? `You will not receive ${confInfo.chainCoin} rewards for holding purchased ${confInfo.chainCoin} .`
                  : `You will need to buy back the same amount of ${confInfo.chainCoin} to be able to convert back to ${confInfo.chainCoin}.`}
              </TYPE.body>
            </>
          )}
          <RowBetween>
            <div>
              <label style={{ cursor: 'pointer', userSelect: 'none' }}>
                <input
                  type="checkbox"
                  className="understand-checkbox"
                  checked={understandChecked}
                  onChange={toggleUnderstand}
                />{' '}
                I understand
              </label>
            </div>
            <ButtonError
              disabled={!understandChecked}
              error={true}
              width={'140px'}
              padding="0.5rem 1rem"
              className="token-dismiss-button"
              style={{
                borderRadius: '10px'
              }}
              onClick={() => {
                setUnderstandChecked(false)
                onConfirm()
              }}
            >
              <TYPE.body color="white">Continue</TYPE.body>
            </ButtonError>
          </RowBetween>
        </AutoColumn>
      </WarningContainer>
    </Modal>
  )
}
