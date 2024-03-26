/* ! errores
linea 33, "direccion": Unknown word.cSpell
Object literal may only specify known properties, and 'direccion' does not exist in type 'PersonalDataFormValues | (() => PersonalDataFormValues)'.

linea 66 a 70, Property 'direccion' does not exist on type 'PersonalDataFormValues'.

linea 132, Type 'PersonalDataFormValues' is missing the following properties from type 'FormData': direccion, departamento, ciudad, codigopostalts(2739)
DirectionData.tsx(23, 3): The expected type comes from property 'formData' which is declared here on type 'IntrinsicAttributes & DirectionDataProps'

linea 133, Type 'Dispatch<SetStateAction<PersonalDataFormValues>>' is not assignable to type 'Dispatch<SetStateAction<FormData>>'.
  Type 'SetStateAction<FormData>' is not assignable to type 'SetStateAction<PersonalDataFormValues>'.
    Type 'FormData' is not assignable to type 'SetStateAction<PersonalDataFormValues>'.ts(2322)
DirectionData.tsx(22, 3): The expected type comes from property 'setFormData' which is declared here on type 'IntrinsicAttributes & DirectionDataProps'

linea 139, Type 'Dispatch<SetStateAction<PersonalDataFormValues>>' is not assignable to type 'Dispatch<SetStateAction<FormData>>'.
  Type 'SetStateAction<FormData>' is not assignable to type 'SetStateAction<PersonalDataFormValues>'.
    Type 'FormData' is not assignable to type 'SetStateAction<PersonalDataFormValues>'.ts(2322)
DirectionData.tsx(22, 3): The expected type comes from property 'setFormData' which is declared here on type 'IntrinsicAttributes & DirectionDataProps'

linea 156, Type '(data: FormData) => Promise<void>' is not assignable to type '(data: string) => Promise<void>'.
  Types of parameters 'data' and 'data' are incompatible.
    Type 'string' is not assignable to type 'FormData'.ts(2322)
PaymentData.tsx(16, 3): The expected type comes from property 'onSubmit' which is declared here on type 'IntrinsicAttributes & PaymentDataProps'

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
import { type PersonalDataFormValues } from '../Form/schema.form'

const steps = ['Datos Personales', 'Dirección de entrega', 'Datos del pago']

export interface SteppertProps {
  title: string
  image: string
  price: number
}

export default function HorizontalLinearStepper ({ title, image, price }: SteppertProps): JSX.Element {
  const [activeStep, setActiveStep] = React.useState<number>(0)
  const [error, setError] = React.useState<string>('')

  const [formData, setFormData] = React.useState<PersonalDataFormValues>({
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
    try {
      const sentFormData = {
        customer: {
          name: formData.nombre,
          lastname: formData.apellido,
          email: formData.email,
          address: {
            address1: formData.direccion,
            address2: formData.dpto,
            city: formData.ciudad,
            state: formData.departamento,
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

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sentFormData)
      })
      //! error linea 97, Unsafe argument of type `any` assigned to a parameter of type `SetStateAction<string>`.
      const responseData = await response.json()
      if (typeof responseData.error === 'string') {
        setError(responseData.error)
      } else {
        localStorage.setItem('purchase-data', JSON.stringify(responseData))
        //! error  linea 99,100 Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
        router.push({
          pathname: '/confirmacion-compra'
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} sx={{ marginBottom: '30px' }}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
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
