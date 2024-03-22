// import { Alert, Snackbar } from '@mui/material'
// import { DirectionData } from './DirectionData/DirectionData'
// import { FormPersonalData } from './FormPersonalData/FormPersonalData'
// import { FormProvider, useForm } from 'react-hook-form'
// import { PaymentData } from './PaymentData/PaymentData'
// import { type FormData } from 'dh-marvel/features/checkout/form.types'
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as React from 'react'
// import Box from '@mui/material/Box'
// import router from 'next/router'
// import Step from '@mui/material/Step'
// import StepLabel from '@mui/material/StepLabel'
// import Stepper from '@mui/material/Stepper'
// import Typography from '@mui/material/Typography'

// const steps = ['Datos Personales', 'Dirección de entrega', 'Datos del pago']

// export interface SteppertProps {
//   title: string
//   image: string
//   price: number
// }

// export default function HorizontalLinearStepper ({ title, image, price }: SteppertProps) {
//   const [activeStep, setActiveStep] = React.useState<number>(0)
//   const [error, setError] = React.useState<string>('')
//   const [formData, setFormData] = React.useState({
//     nombre: '',
//     apellido: '',
//     email: '',

//     direccion: '',
//     dpto: '',
//     ciudad: '',
//     departamento: '',
//     codigopostal: '',

//     numerotarjeta: '',
//     nombretarjeta: '',
//     codigodeseguridad: '',
//     fechadeexpiración: ''
//   })

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1)
//   }

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1)
//   }

//   const onSubmit = async (data: FormData) => {
//     const sentFormData = {
//       customer: {
//         name: formData.nombre,
//         lastname: formData.apellido,
//         email: formData.email,
//         address: {
//           address1: formData.direccion,
//           address2: formData.dpto,
//           city: formData.ciudad,
//           state: formData.departamento,
//           zipCode: formData.codigopostal
//         }
//       },
//       card: {
//         number: data.numerotarjeta,
//         cvc: data.codigodeseguridad,
//         expDate: data.fechadeexpiración,
//         nameOnCard: data.nombretarjeta
//       },
//       order: {
//         name: title,
//         image,
//         price
//       }
//     }

//     fetch('/api/checkout', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(sentFormData)
//     })
//       .then(async (response) => await response.json())
//       .then((data) => {
//         if (data.error) {
//           setError(data.message)
//         } else {
//           localStorage.setItem('purchase-data', JSON.stringify(data))
//           router.push({
//             pathname: '/confirmacion-compra'
//           })
//         }
//       })
//       .catch((error) => {
//         console.error(error)
//       })
//   }

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Stepper activeStep={activeStep} sx={{ marginBottom: '30px' }}>
//         {steps.map((label, index) => {
//           const stepProps: { completed?: boolean } = {}
//           const labelProps: {
//             optional?: React.ReactNode
//           } = {}
//           return (
//             <Step key={label} {...stepProps}>
//               <StepLabel {...labelProps}>{label}</StepLabel>
//             </Step>
//           )
//         })}
//       </Stepper>

//       <Typography sx={{ mt: 2, mb: 1, fontWeight: 700 }}>Paso {activeStep + 1}: {steps[activeStep]} </Typography>
//       {activeStep === 0 &&
//         <FormPersonalData
//           formData={formData}
//           setFormData={setFormData}
//           activeStep={activeStep}
//           handleNext={handleNext}
//         />}

//       {activeStep === 1 &&
//         <DirectionData
//           formData={formData}
//           setFormData={setFormData}
//           activeStep={activeStep}
//           handleBack={handleBack}
//           handleNext={handleNext}
//         />}

//       {activeStep === 2 &&
//         <PaymentData
//           formData={formData}
//           activeStep={activeStep}
//           handleBack={handleBack}
//           handleNext={handleNext}
//           onSubmit={onSubmit}
//         />}

//       {error !== '' &&
//         <Snackbar open={true} autoHideDuration={6000}>
//           <Alert severity="error">
//             {error}
//           </Alert>
//         </Snackbar>
//       }
//     </Box>
//   )
// }

// refactor

import { Alert, Snackbar } from '@mui/material'
import { DirectionData } from './DirectionData/DirectionData'
import { FormPersonalData } from './FormPersonalData/FormPersonalData'
import { FormProvider, useForm } from 'react-hook-form'
import { PaymentData } from './PaymentData/PaymentData'
import { type FormData } from 'dh-marvel/features/checkout/form.types'
import { yupResolver } from '@hookform/resolvers/yup'
import * as React from 'react'
import Box from '@mui/material/Box'
import router from 'next/router'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import Typography from '@mui/material/Typography'

const steps = ['Datos Personales', 'Dirección de entrega', 'Datos del pago']

export interface SteppertProps {
  title: string
  image: string
  price: number
}

// interface CheckoutResponse {
//   error: boolean
//   message: string
//   // Otros campos si los hay...
// }

export default function HorizontalLinearStepper ({ title, image, price }: SteppertProps): JSX.Element {
  const [activeStep, setActiveStep] = React.useState<number>(0)
  const [error, setError] = React.useState<string>('')
  const [formData, setFormData] = React.useState<{
    nombre: string
    apellido: string
    email: string

    direccion: string
    dpto: string
    ciudad: string
    departamento: string
    codigopostal: string

    numerotarjeta: string
    nombretarjeta: string
    codigodeseguridad: string
    fechadeexpiración: string
  }>({
    nombre: '',
    apellido: '',
    email: '',

    direccion: '',
    dpto: '',
    ciudad: '',
    departamento: '',
    codigopostal: '',

    numerotarjeta: '',
    nombretarjeta: '',
    codigodeseguridad: '',
    fechadeexpiración: ''
  })

  const handleNext = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const onSubmit = async (data: FormData): Promise<void> => {
    const { nombre, apellido, email, direccion, dpto, ciudad, departamento, codigopostal } = data

    const sentFormData = {
      customer: {
        name: nombre,
        lastname: apellido,
        email,
        address: {
          address1: direccion,
          address2: dpto,
          city: ciudad,
          state: departamento,
          zipCode: codigopostal
        }
      },
      card: {
        number: data.numerotarjeta,
        cvc: data.codigodeseguridad,
        expDate: data.fechadeexpiración,
        nameOnCard: data.nombretarjeta
      },
      order: {
        name: title,
        image,
        price
      }
    }

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sentFormData)
      })

      const responseData = await response.json()

      if (responseData.error) {
        setError(responseData.message)
      } else {
        localStorage.setItem('purchase-data', JSON.stringify(responseData))
        router.push({ pathname: '/confirmacion-compra' })
      }
    } catch (error) {
      console.error(error)
      setError('Hubo un error al procesar la solicitud.')
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} sx={{ marginBottom: '30px' }}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {}
          const labelProps: {
            optional?: React.ReactNode
          } = {}
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>

      <Typography sx={{ mt: 2, mb: 1, fontWeight: 700 }}>
        Paso {activeStep + 1}: {steps[activeStep]}{' '}
      </Typography>
      {activeStep === 0 && (
        <FormPersonalData
          formData={formData}
          setFormData={setFormData}
          activeStep={activeStep}
          handleNext={handleNext}
        />
      )}

      {activeStep === 1 && (
        <DirectionData
          formData={formData}
          setFormData={setFormData}
          activeStep={activeStep}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      )}

      {activeStep === 2 && (
        <PaymentData
          formData={formData}
          activeStep={activeStep}
          handleBack={handleBack}
          handleNext={handleNext}
          onSubmit={onSubmit}
        />
      )}

      {error !== '' && (
        <Snackbar open={true} autoHideDuration={6000}>
          <Alert severity="error">{error}</Alert>
        </Snackbar>
      )}
    </Box>
  )
}
