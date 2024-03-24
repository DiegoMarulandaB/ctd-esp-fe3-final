/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Box, Typography } from '@mui/material'
// import { PaymentDataSchema } from '../schema.form'
// import { StepperButtons } from '../StepperButtons'
// import { useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as React from 'react'
// import Input from '../Input'
// import { ErrorMessage } from '@hookform/error-message'

// export interface PaymentDataProps {
//   activeStep: number
//   handleNext: () => void
//   handleBack: () => void
//   onSubmit: (data: any) => void
//   formData: any
// }

// export const PaymentData: React.FC<PaymentDataProps> = ({ activeStep, handleNext, handleBack, onSubmit, formData }: PaymentDataProps) => {
//   const { handleSubmit, formState: { errors }, control } = useForm({
//     defaultValues: {
//       ...formData
//     },
//     resolver: yupResolver(PaymentDataSchema)
//   })

//   return (
//     <Box>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Input
//           required
//           label="Número de tarjeta"
//           control={control}
//           name="numerotarjeta"
//           error={Boolean(errors.numerotarjeta)}
//           // helperText={`${errors.numtarjeta?.message || ''}`}
//         />
//         <Typography variant="caption" color="error">
//           <ErrorMessage name="numerotarjeta" errors={errors} />
//         </Typography>
//         <Input
//           required
//           label="Nombre como aparece en la tarjeta"
//           control={control}
//           name="nombretarjeta"
//           error={Boolean(errors.nombretarjeta)}
//           // helperText={`${errors.nombretarjeta?.message || ''}`}
//         />
//         <Typography variant="caption" color="error">
//           <ErrorMessage name="nombretarjeta" errors={errors} />
//         </Typography>
//         <Input
//           required
//           label="Fecha de expiración"
//           control={control}
//           name="fechadeexpiración"
//           error={Boolean(errors.fechadeexpiración)}
//           // helperText={`${errors.fechadeexpiración?.message || ''}`}
//         />
//         <Typography variant="caption" color="error">
//           <ErrorMessage name="fechadeexpiracion" errors={errors} />
//         </Typography>
//         <Input
//           required
//           label="Código de seguridad"
//           control={control}
//           name="codigodeseguridad"
//           error={Boolean(errors.codigodeseguridad)}
//           // helperText={`${errors.codigodeseguridad?.message || ''}`}
//         />
//         <Typography variant="caption" color="error">
//           <ErrorMessage name="codigodeseguridad" errors={errors} />
//         </Typography>
//         <StepperButtons activeStep={activeStep} handleNext={handleSubmit(onSubmit)} handleBack={handleBack} />
//       </form>
//     </Box>
//   )
// }

// refactor2

import { Box, Typography } from '@mui/material'
import { PaymentDataSchema } from '../schema.form'
import { StepperButtons } from '../StepperButtons'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as React from 'react'
import Input from '../Input'
import { ErrorMessage } from '@hookform/error-message'

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

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          required
          label="Número de tarjeta"
          control={control}
          name="numerotarjeta"
          error={Boolean(errors.numerotarjeta)}
          // helperText={`${errors.numtarjeta?.message || ''}`}
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
          // helperText={`${errors.nombretarjeta?.message || ''}`}
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
          // helperText={`${errors.fechadeexpiración?.message || ''}`}
        />
        <Typography variant="caption" color="error">
          <ErrorMessage name="fechadeexpiracion" errors={errors} />
        </Typography>
        <Input
          required
          label="Código de seguridad"
          control={control}
          name="codigodeseguridad"
          error={Boolean(errors.codigodeseguridad)}
          // helperText={`${errors.codigodeseguridad?.message || ''}`}
        />
        <Typography variant="caption" color="error">
          <ErrorMessage name="codigodeseguridad" errors={errors} />
        </Typography>
        <StepperButtons activeStep={activeStep} handleNext={() => { onSubmit(formData) }} handleBack={handleBack} />
      </form>
    </Box>
  )
}
