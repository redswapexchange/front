import React from 'react'
import { Percent } from '@pancakeswap-libs/sdk'
import Modal from '../../components/Modal'
import { Button } from 'rebass'

export default function ConfirmPriceWithoutFeeModal({
  priceImpactWithoutFee,
  isOpen,
  onConfirm,
  onDismiss
}: {
  priceImpactWithoutFee: Percent | undefined
  isOpen: boolean
  onConfirm: () => void
  onDismiss: () => void
}) {
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} maxHeight={90}>
      {priceImpactWithoutFee}

      <div className="btn-div">
        <Button
          variant="primary"
          onClick={() => {
            onConfirm()
          }}
        >
          a
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            onDismiss()
          }}
        >
          b
        </Button>
      </div>
    </Modal>
  )
}
