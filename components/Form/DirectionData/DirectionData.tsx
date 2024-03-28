/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
/*
* Usar la extensión better comments
! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
*/

import { Box, Typography } from '@mui/material'
import { DirectionDataSchema } from '../schema.form'
import { StepperButtons } from '../StepperButtons'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as React from 'react'
import Input from '../Input'
import { ErrorMessage } from '@hookform/error-message'

//! any
export interface DirectionDataProps {
  activeStep: number
  handleNext: () => void
  handleBack: () => void
  setFormData: (data: any) => void
  formData: any
}

export const DirectionData: React.FC<DirectionDataProps> = ({
  activeStep,
  handleNext,
  handleBack,
  formData,
  setFormData
}: DirectionDataProps) => {
  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm({
    defaultValues: {
      ...formData
    },
    resolver: yupResolver(DirectionDataSchema)
  })

  const onSubmit = (data: any): void => {
    setFormData({
      ...formData,
      direccion: data.direccion,
      dpto: data.dpto,
      ciudad: data.ciudad,
      provincia: data.provincia,
      codigopostal: data.codigopostal
    })
    handleNext()
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input required label="Dirección" control={control} name="direccion" error={Boolean(errors.direccion)} />
        <Typography variant="caption" color="error">
          <ErrorMessage name="direccion" errors={errors} />
        </Typography>
        <Input label="Dpto, piso, etc. (opcional)" control={control} name="dpto" />
        <Input required label="Ciudad" control={control} name="ciudad" error={Boolean(errors.ciudad)} />
        <Typography variant="caption" color="error">
          <ErrorMessage name="ciudad" errors={errors} />
        </Typography>
        <Input
          required
          label="Provincia"
          control={control}
          name="provincia"
          error={Boolean(errors.provincia)}
        />
        <Typography variant="caption" color="error">
          <ErrorMessage name="provincia" errors={errors} />
        </Typography>
        <Input
          required
          label="Código postal"
          control={control}
          name="codigopostal"
          error={Boolean(errors.codigopostal)}
        />
        <Typography variant="caption" color="error">
          <ErrorMessage name="codigopostal" errors={errors} />
        </Typography>
        <StepperButtons activeStep={activeStep} handleNext={handleSubmit(onSubmit)} handleBack={handleBack} />
      </form>
    </Box>
  )
}
