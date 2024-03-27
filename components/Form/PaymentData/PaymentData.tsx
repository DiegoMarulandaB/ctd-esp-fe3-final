/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
/*
* Usar la extensión better comments
! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
*/

import * as React from 'react'
import { Box, Typography } from '@mui/material'
import Input from '../Input'
import { useForm } from 'react-hook-form'
import { StepperButtons } from '../StepperButtons'
import { PaymentDataSchema } from '../schema.form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from '@hookform/error-message'

//! any
export interface PaymentDataProps {
  activeStep: number
  handleNext: () => void
  handleBack: () => void
  onSubmit: (data: any) => void
  formData: any
}

export const PaymentData: React.FC<PaymentDataProps> = ({
  activeStep,
  handleNext,
  handleBack,
  onSubmit,
  formData
}: PaymentDataProps) => {
  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm({
    defaultValues: {
      ...formData
    },
    resolver: yupResolver(PaymentDataSchema)
  })

  // const handleSubmitForm = async (data: any)  => {
  //   await onSubmit(data)
  // }

  return (
    <Box>
      {/* <form onSubmit={handleSubmit}> */}
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <form
        onSubmit={handleSubmit(async (data) => {
          onSubmit(data)
        })}
      >
        <Input
          required
          label="Número de tarjeta"
          control={control}
          name="numtarjeta"
          error={Boolean(errors.numerotarjeta)}
        />
        <Typography variant="caption" color="error">
          <ErrorMessage name="numerotarjeta" errors={errors} />
        </Typography>
        <Input
          required
          label="Nombre como aparece en la tarjeta"
          control={control}
          name="nombretarjeta"
          error={Boolean(errors.nombretarjeta)}
        />
        <Typography variant="caption" color="error">
          <ErrorMessage name="nombretarjeta" errors={errors} />
        </Typography>
        <Input
          required
          label="Fecha de expiración"
          control={control}
          name="fechadeexpiración"
          error={Boolean(errors.fechadeexpiración)}
        />
        <Typography variant="caption" color="error">
          <ErrorMessage name="fechadeexpiración" errors={errors} />
        </Typography>
        <Input
          required
          label="Código de seguridad"
          control={control}
          name="codigodeseguridad"
          error={Boolean(errors.codigodeseguridad)}
        />
        <Typography variant="caption" color="error">
          <ErrorMessage name="codigodeseguridad" errors={errors} />
        </Typography>
        <StepperButtons activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} />
      </form>
    </Box>
  )
}
