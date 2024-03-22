/* eslint-disable @typescript-eslint/no-misused-promises */
// import { Box, Typography } from '@mui/material'
// import { PersonalDataSchema } from '../schema.form'
// import { StepperButtons } from '../StepperButtons'
// import { useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as React from 'react'
// import Input from '../Input'

// import { ErrorMessage } from '@hookform/error-message'

// export interface FormPersonalDataProps {
//   activeStep: number
//   handleNext: () => void
//   setFormData: (data: any) => void
//   formData: any
// }

// export const FormPersonalData: React.FC<FormPersonalDataProps> = ({ activeStep, handleNext, setFormData, formData }: FormPersonalDataProps) => {
//   const { handleSubmit, formState: { errors }, control } = useForm({
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
//         />
//         <Typography variant="caption" color="error">
//           <ErrorMessage name="email" errors={errors} />
//         </Typography>

//         <StepperButtons activeStep={activeStep} handleNext={handleSubmit(onSubmit)} handleBack={() => {}} />
//       </form>
//     </Box>
//   )
// }

// refactor pueden usar este

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
  setFormData: (data: PersonalDataFormValues) => void // Assuming PersonalDataFormValues is the type for your form data
  formData: PersonalDataFormValues // Assuming PersonalDataFormValues is the type for your form data
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
    setFormData({ ...formData, ...data })
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
