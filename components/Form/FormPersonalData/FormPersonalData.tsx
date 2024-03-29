/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/*
* Usar la extensión better comments
! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
*/
import { Box, Typography } from '@mui/material'
import { PersonalDataSchema } from '../schema.form'
import { StepperButtons } from '../StepperButtons'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as React from 'react'
import Input from '../Input.page'
import { ErrorMessage } from '@hookform/error-message'

//! any
interface FormPersonalDataProps {
  activeStep: number
  handleNext: () => void
  handleBack: () => void
  setFormData: React.Dispatch<React.SetStateAction<any>>
  formData: any
}

export const FormPersonalData: React.FC<FormPersonalDataProps> = ({
  activeStep,
  handleNext,
  handleBack,
  setFormData,
  formData
}: FormPersonalDataProps) => {
  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm<any>({
    defaultValues: {
      ...formData
    },
    resolver: yupResolver(PersonalDataSchema)
  })

  const onSubmit = (data: any) => {
    setFormData({ ...formData, nombre: data.nombre, apellido: data.apellido, email: data.email })
    handleNext()
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input required label="Nombre" control={control} name="nombre" type="text" error={Boolean(errors.nombre)} />
        <Typography variant="caption" color="error">
          <ErrorMessage name="nombre" errors={errors} />
        </Typography>
        <Input required label="Apellido" control={control} name="apellido" error={Boolean(errors.apellido)} />
        <Typography variant="caption" color="error">
          <ErrorMessage name="apellido" errors={errors} />
        </Typography>
        <Input required label="Email" control={control} name="email" error={Boolean(errors.email)} />
        <Typography variant="caption" color="error">
          <ErrorMessage name="email" errors={errors} />
        </Typography>
        <StepperButtons activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} />
      </form>
    </Box>
  )
}
