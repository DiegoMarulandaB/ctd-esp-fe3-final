/* eslint-disable @typescript-eslint/no-misused-promises */
// import { Box, Typography } from '@mui/material'
// import { DirectionDataSchema } from '../schema.form'
// import { StepperButtons } from '../StepperButtons'
// import { useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as React from 'react'
// import Input from '../Input'
// import { ErrorMessage } from '@hookform/error-message'

// export interface DirectionDataProps {
//   activeStep: number
//   handleNext: () => void
//   handleBack: () => void
//   setFormData: (data: any) => void
//   formData: any
// }

// export const DirectionData: React.FC<DirectionDataProps> = ({ activeStep, handleNext, handleBack, formData, setFormData }: DirectionDataProps) => {
//   const { handleSubmit, formState: { errors }, control } = useForm({
//     defaultValues: {
//       ...formData
//     },
//     resolver: yupResolver(DirectionDataSchema)
//   })

//   const onSubmit = (data: any) => {
//     setFormData({
//       ...formData,
//       direccion: data.direccion,
//       dpto: data.dpto,
//       ciudad: data.ciudad,
//       departamento: data.departamento,
//       codigopostal: data.codigopostal
//     })
//     handleNext()
//   }

//   return (
//     <Box>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Input
//           required
//           label="Dirección"
//           control={control}
//           name="direccion"
//           error={Boolean(errors.direccion)}
//           // helperText={`${errors.direccion?.message || ''}`}
//         />
//         <Typography variant="caption" color="error">
//           <ErrorMessage name="direccion" errors={errors} />
//         </Typography>

//         <Input label="Dpto, piso, etc. (opcional)" control={control} name="dpto" />
//         <Input
//           required
//           label="Ciudad"
//           control={control}
//           name="ciudad"
//           error={Boolean(errors.ciudad)}
//           // helperText={`${errors.ciudad?.message || ''}`}
//         />
//         <Typography variant="caption" color="error">
//           <ErrorMessage name="ciudad" errors={errors} />
//         </Typography>
//         <Input
//           required
//           label="Departamento"
//           control={control}
//           name="departamento"
//           error={Boolean(errors.departamento)}
//           // helperText={`${errors.departamento?.message || ''}`}
//         />
//         <Typography variant="caption" color="error">
//           <ErrorMessage name="departamento" errors={errors} />
//         </Typography>

//         <Input
//           required
//           label="Código postal"
//           control={control}
//           name="codigopostal"
//           error={Boolean(errors.codigopostal)}
//           // helperText={`${errors.codigopostal?.message || ''}`}
//         />
//         <Typography variant="caption" color="error">
//           <ErrorMessage name="codigopostal" errors={errors} />
//         </Typography>

//         <StepperButtons activeStep={activeStep} handleNext={handleSubmit(onSubmit)} handleBack={handleBack} />
//       </form>
//     </Box>
//   )
// }

// refactor

import { Box, Typography } from '@mui/material'
import { DirectionDataSchema } from '../schema.form'
import { StepperButtons } from '../StepperButtons'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as React from 'react'
import Input from '../Input'
import { ErrorMessage } from '@hookform/error-message'

interface FormData {
  direccion: string
  departamento: string
  ciudad: string
  codigopostal: string
}

export interface DirectionDataProps {
  activeStep: number
  handleNext: () => void
  handleBack: () => void
  setFormData: (data: FormData) => void
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
    setFormData(data) // No necesitas spread data, ya contiene todas las propiedades necesarias
    handleNext() // Llama a handleNext directamente aquí
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input required label="Dirección" control={control} name="direccion" error={Boolean(errors.direccion)} />
        <Typography variant="caption" color="error">
          <ErrorMessage name="direccion" errors={errors} />
        </Typography>
        <Input label="Dpto, piso, etc. (opcional)" control={control} name="departamento" />{' '}
        {/* Modificamos dpto a departamento aquí también */}
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
        <StepperButtons activeStep={activeStep} handleNext={handleSubmit(onSubmit)} handleBack={handleBack} />
      </form>
    </Box>
  )
}
