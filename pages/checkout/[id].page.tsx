/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react/prop-types */

import React, { useState } from 'react'
import { Stepper, Step, StepLabel, Alert, Snackbar } from '@mui/material'
import LayoutCheckout from '../../components/layouts/layout-checkout'
import type { NextPage } from 'next'
// import { type Result , Comics } from 'dh-marvel/features/comics.types'
import { type Result } from '../../features/comics.types'
import { getComic } from '../../services/marvel/marvel.service'
import { Box } from '@mui/system'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import BodySingle from '../../components/layouts/body/single/body-single'
import PersonalDataForm from '../../components/Forms/PersonalData/PersonalDataForm'
import { type PersonalDataFormValues } from '../../components/Forms/schema.form'
import { DeliveryDataForm } from '../../components/Forms/DeliveryData/DeliveryDataForm'
import { PaymentDataForm } from '../../components/Forms/PaymentData/PaymentDataForm'
import { type FormData } from '../../features/checkout/form.types'
import router from 'next/router'

interface CheckoutProps {
  comic: Result;
}

const steps = ['Datos Personales', 'Dirección de entrega', 'Datos del pago']

const StepperFormulario: NextPage<CheckoutProps> = ({ comic }) => {
  const [activeStep, setActiveStep] = useState(0)
  const [error, setError] = useState('')

  const [formData, setFormData] = React.useState<PersonalDataFormValues>({
    nombre: '',
    apellido: '',
    email: '',
    direccion: '',
    departamento: '',
    ciudad: '',
    provincia: '',
    codigopostal: '',
    numerotarjeta: '',
    nombretarjeta: '',
    fechaexpiracion: '',
    cv: '',
  })

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
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
          address2: formData.departamento,
          city: formData.ciudad,
          state: formData.provincia,
          zipCode: formData.codigopostal,
        },
      },
      card: {
        number: data.numerotarjeta,
        cvc: data.cv,
        expDate: data.fechaexpiracion,
        nameOnCard: data.nombretarjeta,
      },
      order: {
        name: comic.title,
        image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
        price: comic.price,
      },
    }
    console.log('Data enviada al finalizar compra', sentFormData)

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sentFormData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message)
      }

      const responseData = await response.json()
      localStorage.setItem('purchase-data', JSON.stringify(responseData))
      await router.push({
        pathname: '/confirmacion-compra',
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
    <LayoutCheckout>
      <BodySingle title="Checkout">
        <Card
          sx={{
            display: 'flex',
            marginTop: '20px',
            boxShadow: '0 2px 8px 0 #c1c9d7, 0 -2px 8px 0 #cce1e9',
            borderRadius: '12px',
          }}
        >
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Box sx={{ display: 'flex', borderRight: '1px solid grey', alignItems: 'center' }}>
              <Box mr={2} sx={{ minWidth: '35%', maxWidth: '35%', flexShrink: 0 }}>
                <CardMedia
                  component="img"
                  image={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
                  alt={comic?.title || ''}
                  sx={{
                    borderRadius: '12px',
                    height: 350,
                    objectFit: 'cover',
                  }}
                />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {comic && (
                  <>
                    <Typography variant="h5" sx={{ flexGrow: 1 }}>
                      {comic.title}
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'grey.700', marginTop: '10px' }}>
                      Total
                    </Typography>
                    <Typography variant="h4">${comic.price}</Typography>
                  </>
                )}
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50%',
                flexDirection: 'column',
                marginBottom: '10px',
              }}
            >
              {comic && comic.stock === 0 && (
                <Typography variant="h6" color="error">
                  No tenemos stock disponible
                </Typography>
              )}

              {comic && comic.stock !== 0 && (
                <>
                  <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                      const stepProps: { completed?: boolean } = {}

                      return (
                        <Step key={label} {...stepProps}>
                          <StepLabel>{label}</StepLabel>
                        </Step>
                      )
                    })}
                  </Stepper>
                  {activeStep === 0 && (
                    <PersonalDataForm formData={formData} setFormData={setFormData} handleNext={handleNext} />
                  )}
                  {activeStep === 1 && (
                    <DeliveryDataForm
                      formData={formData}
                      setFormData={setFormData}
                      handleBack={handleBack}
                      handleNext={handleNext}
                    />
                  )}
                  {activeStep === 2 && (
                    <PaymentDataForm formData={formData} handleBack={handleBack} onSubmit={onSubmit} />
                  )}
                  {error !== '' && (
                    <Snackbar open={true} autoHideDuration={6000}>
                      <Alert severity="error">{error}</Alert>
                    </Snackbar>
                  )}
                </>
              )}
            </Box>
          </CardContent>
        </Card>
      </BodySingle>
    </LayoutCheckout>
  )
}

export default StepperFormulario

export async function getServerSideProps(context: { query: { id: any } }) {
  const { id } = context.query
  const res = await getComic(id)

  return {
    props: {
      comic: res,
    },
  }
}
