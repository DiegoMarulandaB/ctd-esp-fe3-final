/*
* Usar la extensión better comments
! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
*/

import React, { type FC } from 'react'
import { Box, Button } from '@mui/material'

interface StepperButtonsProps {
  activeStep: number
  handleNext: () => void
  handleBack: () => void
}

export const StepperButtons: FC<StepperButtonsProps> = (props) => {
  const { activeStep, handleNext, handleBack } = props

  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
          Anterior
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        <Button onClick={handleNext}>{activeStep < 2 ? 'Siguiente' : 'Finalizar compra'}</Button>
      </Box>
    </Box>
  )
}
