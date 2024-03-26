//! error linea 49 Promise-returning function provided to attribute where a void return was expected.
import { Box, Typography } from '@mui/material'
import { DirectionDataSchema } from '../schema.form'
import { StepperButtons } from '../StepperButtons'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as React from 'react'
import Input from '../Input'
import { ErrorMessage } from '@hookform/error-message'

export interface FormData {
  direccion: string
  departamento: string
  ciudad: string
  codigopostal: string
}

export interface DirectionDataProps {
  activeStep: number
  handleNext: () => void
  handleBack: () => void
  setFormData: React.Dispatch<React.SetStateAction<FormData>> // Corregir el tipo de setFormData
  formData: FormData
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
  } = useForm<FormData>({
    defaultValues: formData,
    resolver: yupResolver(DirectionDataSchema)
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setFormData(data)
    handleNext()
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input required label="Dirección" control={control} name="direccion" error={Boolean(errors.direccion)} />
        <Typography variant="caption" color="error">
          <ErrorMessage name="direccion" errors={errors} />
        </Typography>
        <Input label="Dpto, piso, etc. (opcional)" control={control} name="departamento" />
        <Input required label="Ciudad" control={control} name="ciudad" error={Boolean(errors.ciudad)} />
        <Typography variant="caption" color="error">
          <ErrorMessage name="ciudad" errors={errors} />
        </Typography>
        <Input
          required
          label="Departamento"
          control={control}
          name="departamento"
          error={Boolean(errors.departamento)}
        />
        <Typography variant="caption" color="error">
          <ErrorMessage name="departamento" errors={errors} />
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
        <StepperButtons activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} />
      </form>
    </Box>
  )
}
