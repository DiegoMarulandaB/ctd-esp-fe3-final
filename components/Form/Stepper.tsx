/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/*
* Usar la extensión better comments
! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
*/

import * as React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import { FormPersonalData } from './FormPersonalData/FormPersonalData'
import { DirectionData } from './DirectionData/DirectionData'
import { PaymentData } from './PaymentData/PaymentData'
import { Alert, Snackbar } from '@mui/material'
import router from 'next/router'
import { type FormData } from '../../features/checkout/form.types'
import { type PersonalDataFormValues } from './schema.form'

const steps = ['Datos Personales', 'Dirección de entrega', 'Datos del pago']

export interface SteppertProps {
  title: string
  image: string
  price: number
}

export default function HorizontalLinearStepper ({ title, image, price }: SteppertProps): JSX.Element {
  const [activeStep, setActiveStep] = React.useState<number>(0)
  const [formData, setFormData] = React.useState<PersonalDataFormValues>({
    nombre: '',
    apellido: '',
    email: '',
    direccion: '',
    dpto: '',
    ciudad: '',
    provincia: '',
    codigopostal: '',
    numerotarjeta: '',
    nombretarjeta: '',
    codigodeseguridad: '',
    fechadeexpiración: ''
  })
  const [error, setError] = React.useState<string>('')

  const handleNext = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const onSubmit = async (data: FormData): Promise<void> => {
    const sentFormData = {
      customer: {
        name: formData.nombre,
        lastname: formData.apellido,
        email: formData.email,
        address: {
          address1: formData.direccion,
          address2: formData.dpto,
          city: formData.ciudad,
          state: formData.provincia,
          zipCode: formData.codigopostal
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

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message)
      }

      const responseData = await response.json()
      localStorage.setItem('purchase-data', JSON.stringify(responseData))
      await router.push({
        pathname: '/confirmacion-compra'
      })
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('Error desconocido')
      }
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
          handleBack={handleBack} // Add handleBack prop here
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
