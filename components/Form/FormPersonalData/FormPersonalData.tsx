// !original
// import * as React from 'react'
// import { Box, Typography } from '@mui/material'
// import { useForm } from 'react-hook-form'
// import Input from '../Input'
// import { StepperButtons } from '../StepperButtons'
// import { yupResolver } from '@hookform/resolvers/yup'
// import { PersonalDataSchema } from '../schema.form'
// import { ErrorMessage } from '@hookform/error-message'

// export interface FormPersonalDataProps {
//   activeStep: number
//   handleNext: () => void
//   setFormData: (data: any) => void
//   formData: any
// }

// export const FormPersonalData: React.FC<FormPersonalDataProps> = ({
//   activeStep,
//   handleNext,
//   setFormData,
//   formData
// }: FormPersonalDataProps) => {
//   const {
//     handleSubmit,
//     formState: { errors },
//     control
//   } = useForm({
//     defaultValues: {
//       ...formData
//     },
//     resolver: yupResolver(PersonalDataSchema)
//   })

//   const onSubmit = (data: any) => {
//     setFormData({ ...formData, nombre: data.nombre, apellido: data.apellido, email: data.email })
//     handleNext()
//   }

//   return (
//     <Box>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Input
//           required
//           label="Nombre"
//           control={control}
//           name="nombre"
//           type="text"
//           error={Boolean(errors.nombre)}
//           // helperText={`${errors.nombre?.message || ''}`}
//         />
//         <Typography variant="caption" color="error">
//           <ErrorMessage name="nombre" errors={errors} />
//         </Typography>
//         <Input
//           required
//           label="Apellido"
//           control={control}
//           name="apellido"
//           error={Boolean(errors.apellido)}
//         />
//         <Typography variant="caption" color="error">
//           <ErrorMessage name="apellido" errors={errors} />
//         </Typography>
//         <Input
//           required
//           label="Email"
//           control={control}
//           name="email"
//           error={Boolean(errors.email)}
//           // helperText={`${errors.email?.message || ''}`}
//         />
//         <Typography variant="caption" color="error">
//           <ErrorMessage name="email" errors={errors} />

//         </Typography>
//         <StepperButtons activeStep={activeStep} handleNext={handleSubmit(onSubmit)} handleBack={() => {}} />
//       </form>
//     </Box>
//   )
// }

// !refactor2 bueno

// import { Box, Typography } from '@mui/material'
// import { PersonalDataSchema, type PersonalDataFormValues } from '../schema.form'
// import { StepperButtons } from '../StepperButtons'
// import { useForm, type SubmitHandler } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as React from 'react'
// import Input from '../Input'
// import { ErrorMessage } from '@hookform/error-message'

// export interface FormPersonalDataProps {
//   activeStep: number
//   handleNext: () => void
//   setFormData: React.Dispatch<React.SetStateAction<PersonalDataFormValues>> // Corrección del tipo
//   formData: PersonalDataFormValues
// }

// export const FormPersonalData: React.FC<FormPersonalDataProps> = ({
//   activeStep,
//   handleNext,
//   setFormData,
//   formData
// }: FormPersonalDataProps) => {
//   const {
//     handleSubmit,
//     formState: { errors },
//     control
//   } = useForm<PersonalDataFormValues>({
//     defaultValues: formData,
//     resolver: yupResolver(PersonalDataSchema)
//   })

//   const onSubmit: SubmitHandler<PersonalDataFormValues> = (data) => {
//     setFormData(data)
//     handleNext()
//   }

//   return (
//     <Box>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Input required label="Nombre" control={control} name="nombre" type="text" error={Boolean(errors.nombre)} />
//         <Typography variant="caption" color="error">
//           <ErrorMessage name="nombre" errors={errors} />
//         </Typography>

//         <Input required label="Apellido" control={control} name="apellido" error={Boolean(errors.apellido)} />
//         <Typography variant="caption" color="error">
//           <ErrorMessage name="apellido" errors={errors} />
//         </Typography>

//         <Input required label="Email" control={control} name="email" error={Boolean(errors.email)} />
//         <Typography variant="caption" color="error">
//           <ErrorMessage name="email" errors={errors} />
//         </Typography>

//         <StepperButtons activeStep={activeStep} handleNext={handleSubmit(onSubmit)} handleBack={() => {}} />
//       </form>
//     </Box>
//   )
// }

// !refactor pasado por chat los4

import { Box, Typography } from '@mui/material'
import { PersonalDataSchema, type PersonalDataFormValues } from '../schema.form'
import { StepperButtons } from '../StepperButtons'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as React from 'react'
import Input from '../Input'
import { ErrorMessage } from '@hookform/error-message'

export interface FormPersonalDataProps {
  activeStep: number
  handleNext: () => void
  setFormData: React.Dispatch<React.SetStateAction<PersonalDataFormValues>> // Corrección del tipo
  formData: PersonalDataFormValues
}

export const FormPersonalData: React.FC<FormPersonalDataProps> = ({
  activeStep,
  handleNext,
  setFormData,
  formData
}: FormPersonalDataProps) => {
  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm<PersonalDataFormValues>({
    defaultValues: formData,
    resolver: yupResolver(PersonalDataSchema)
  })

  const onSubmit: SubmitHandler<PersonalDataFormValues> = (data) => {
    setFormData(data)
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

        <StepperButtons activeStep={activeStep} handleNext={handleSubmit(onSubmit)} handleBack={() => {}} />
      </form>
    </Box>
  )
}
