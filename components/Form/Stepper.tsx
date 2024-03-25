// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Typography from '@mui/material/Typography';
// import { FormPersonalData } from './FormPersonalData/FormPersonalData';
// import { DirectionData } from './DirectionData/DirectionData';
// import { PaymentData } from './PaymentData/PaymentData';
// import { FormProvider, useForm } from 'react-hook-form';
// import { Alert, Snackbar } from '@mui/material';
// import router from 'next/router';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { FormData } from 'dh-marvel/features/checkout/form.types';

// const steps = ['Datos Personales', 'Dirección de entrega', 'Datos del pago'];

// export interface SteppertProps {
//   title: string;
//   image: string;
//   price: number;
// }

// export default function HorizontalLinearStepper({ title, image, price }: SteppertProps) {
//   const [activeStep, setActiveStep] = React.useState<number>(0);
//   const [error, setError] = React.useState<string>('');
//   const [formData, setFormData] = React.useState({
//     nombre: '',
//     apellido: '',
//     email: '',

//     direccion: '',
//     dpto: '',
//     ciudad: '',
//     provincia: '',
//     codigopostal: '',

//     numtarjeta: '',
//     nombretarjeta: '',
//     codigodeseguridad: '',
//     fechadeexpiración: '',
//   });

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

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
//           state: formData.provincia,
//           zipCode: formData.codigopostal,
//         },
//       },
//       card: {
//         number: data.numtarjeta,
//         cvc: data.codigodeseguridad,
//         expDate: data.fechadeexpiración,
//         nameOnCard: data.nombretarjeta,
//       },
//       order: {
//         name: title,
//         image: image,
//         price: price,
//       },
//     };

//     fetch('/api/checkout', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(sentFormData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data['error']) {
//           setError(data['message']);
//         } else {
//           localStorage.setItem('purchase-data', JSON.stringify(data));
//           router.push({
//             pathname: '/confirmacion-compra',
//           });
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Stepper activeStep={activeStep} sx={{ marginBottom: '30px' }}>
//         {steps.map((label, index) => {
//           const stepProps: { completed?: boolean } = {};
//           const labelProps: {
//             optional?: React.ReactNode;
//           } = {};
//           return (
//             <Step key={label} {...stepProps}>
//               <StepLabel {...labelProps}>{label}</StepLabel>
//             </Step>
//           );
//         })}
//       </Stepper>

//       <Typography sx={{ mt: 2, mb: 1, fontWeight: 700 }}>
//         Paso {activeStep + 1}: {steps[activeStep]}{' '}
//       </Typography>
//       {activeStep === 0 && (
//         <FormPersonalData
//           formData={formData}
//           setFormData={setFormData}
//           activeStep={activeStep}
//           handleNext={handleNext}
//         />
//       )}

//       {activeStep === 1 && (
//         <DirectionData
//           formData={formData}
//           setFormData={setFormData}
//           activeStep={activeStep}
//           handleBack={handleBack}
//           handleNext={handleNext}
//         />
//       )}

//       {activeStep === 2 && (
//         <PaymentData
//           formData={formData}
//           activeStep={activeStep}
//           handleBack={handleBack}
//           handleNext={handleNext}
//           onSubmit={onSubmit}
//         />
//       )}

//       {error !== '' && (
//         <Snackbar open={true} autoHideDuration={6000}>
//           <Alert severity="error">{error}</Alert>
//         </Snackbar>
//       )}
//     </Box>
//   );
// }

// refactor

// import * as React from 'react'
// import Box from '@mui/material/Box'
// import Stepper from '@mui/material/Stepper'
// import Step from '@mui/material/Step'
// import StepLabel from '@mui/material/StepLabel'
// import Typography from '@mui/material/Typography'
// import { FormPersonalData } from './FormPersonalData/FormPersonalData'
// import { DirectionData } from './DirectionData/DirectionData'
// import { PaymentData } from './PaymentData/PaymentData'
// // import { FormProvider, useForm } from 'react-hook-form'
// import { Alert, Snackbar } from '@mui/material'
// import router from 'next/router'
// // import { yupResolver } from '@hookform/resolvers/yup'
// import { type FormData } from '../../features/checkout/form.types'

// const steps = ['Datos Personales', 'Dirección de entrega', 'Datos del pago']

// export interface SteppertProps {
//   title: string
//   image: string
//   price: number
// }

// interface Data {
//   error?: string
//   // Otros campos si los hay
// }
// export default function HorizontalLinearStepper ({ title, image, price }: SteppertProps): JSX.Element {
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

//   // const handleNext = () => {
//   //   setActiveStep((prevActiveStep) => prevActiveStep + 1)
//   // }

//   const handleNext = (): void => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1)
//   }

//   const handleBack = (): void => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1)
//   }

//   // const onSubmit = async (data: FormData) =>
//   const onSubmit = async (data: FormData): Promise<void> => {
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

//       <Typography sx={{ mt: 2, mb: 1, fontWeight: 700 }}>
//         Paso {activeStep + 1}: {steps[activeStep]}{' '}
//       </Typography>
//       {activeStep === 0 && (
//         <FormPersonalData
//           formData={formData}
//           setFormData={setFormData}
//           activeStep={activeStep}
//           handleNext={handleNext}
//         />
//       )}

//       {activeStep === 1 && (
//         <DirectionData
//           formData={formData}
//           setFormData={setFormData}
//           activeStep={activeStep}
//           handleBack={handleBack}
//           handleNext={handleNext}
//         />
//       )}

//       {activeStep === 2 && (
//         <PaymentData
//           formData={formData}
//           activeStep={activeStep}
//           handleBack={handleBack}
//           handleNext={handleNext}
//           onSubmit={onSubmit}
//         />
//       )}

//       {error !== '' && (
//         <Snackbar open={true} autoHideDuration={6000}>
//           <Alert severity="error">{error}</Alert>
//         </Snackbar>
//       )}
//     </Box>
//   )
// }

// refactor3

// import * as React from 'react'
// import Box from '@mui/material/Box'
// import Stepper from '@mui/material/Stepper'
// import Step from '@mui/material/Step'
// import StepLabel from '@mui/material/StepLabel'
// import Typography from '@mui/material/Typography'
// import { FormPersonalData } from './FormPersonalData/FormPersonalData'
// import { DirectionData } from './DirectionData/DirectionData'
// import { PaymentData } from './PaymentData/PaymentData'
// import { Alert, Snackbar } from '@mui/material'
// import router from 'next/router'
// import { type FormData } from '../../features/checkout/form.types'

// const steps = ['Datos Personales', 'Dirección de entrega', 'Datos del pago']

// export interface SteppertProps {
//   title: string
//   image: string
//   price: number
// }

// export default function HorizontalLinearStepper ({ title, image, price }: SteppertProps): JSX.Element {
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

//   const handleNext = (): void => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1)
//   }

//   const handleBack = (): void => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1)
//   }

//   // const onSubmit = async (data: FormData): Promise<void> => {
//   //   // Tu código onSubmit aquí...
//   // }
//   const onSubmit = async (data: FormData): Promise<void> => {
//     try {
//       // Aquí colocas el código para enviar los datos, por ejemplo, una solicitud HTTP
//       // Puedes usar fetch, axios, etc.
//       await enviarDatos(data)
//       // Si la solicitud se completa correctamente, puedes redirigir al usuario a otra página
//       router.push('/pagina-de-exito')
//     } catch (error) {
//       // Si ocurre algún error, puedes manejarlo y mostrar un mensaje adecuado
//       setError('Error al enviar los datos. Por favor, inténtalo de nuevo más tarde.')
//     }
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

//       <Typography sx={{ mt: 2, mb: 1, fontWeight: 700 }}>
//         Paso {activeStep + 1}: {steps[activeStep]}{' '}
//       </Typography>
//       {activeStep === 0 && (
//         <FormPersonalData
//           formData={formData}
//           setFormData={setFormData}
//           activeStep={activeStep}
//           handleNext={handleNext}
//         />
//       )}

//       {activeStep === 1 && (
//         <DirectionData
//           formData={formData}
//           setFormData={setFormData}
//           activeStep={activeStep}
//           handleBack={handleBack}
//           handleNext={handleNext}
//         />
//       )}

//       {activeStep === 2 && (
//         <PaymentData
//           formData={formData}
//           activeStep={activeStep}
//           handleBack={handleBack}
//           handleNext={handleNext}
//           onSubmit={onSubmit}
//         />
//       )}

//       {error !== '' && (
//         <Snackbar open={true} autoHideDuration={6000}>
//           <Alert severity="error">{error}</Alert>
//         </Snackbar>
//       )}
//     </Box>
//   )
// }

// refactor 5
// import * as React from 'react'
// import Box from '@mui/material/Box'
// import Stepper from '@mui/material/Stepper'
// import Step from '@mui/material/Step'
// import StepLabel from '@mui/material/StepLabel'
// import Typography from '@mui/material/Typography'
// import { FormPersonalData } from '../../components/Form/FormPersonalData/FormPersonalData'
// import { DirectionData } from '../../components/Form/DirectionData/DirectionData'
// import { PaymentData } from '../../components/Form/PaymentData/PaymentData'
// // import { FormProvider, useForm } from 'react-hook-form'
// import { Alert, Snackbar } from '@mui/material'
// import router from 'next/router'
// // import { yupResolver } from '@hookform/resolvers/yup'
// import { type FormData } from '../../features/checkout/form.types'
// import React, { Dispatch, SetStateAction } from 'react';

// const steps = ['Datos Personales', 'Dirección de entrega', 'Datos del pago']

// export interface SteppertProps {
//   title: string
//   image: string
//   price: number
// }

// interface ResponseData {
//   error: boolean
//   message: string
// }

// export default function HorizontalLinearStepper ({ title, image, price }: SteppertProps): JSX.Element {
//   const [activeStep, setActiveStep] = React.useState<number>(0)
//   const [error, setError] = React.useState<string>('')
//   // const [formData, setFormData] = React.useState({
//   //   nombre: '',
//   //   apellido: '',
//   //   email: '',

//   //   direccion: '',
//   //   dpto: '',
//   //   ciudad: '',
//   //   departamento: '',
//   //   codigopostal: '',

//   //   numerotarjeta: '',
//   //   nombretarjeta: '',
//   //   codigodeseguridad: '',
//   //   fechadeexpiración: ''
//   const [formData, setFormData]: [PersonalDataFormValues, Dispatch<SetStateAction<PersonalDataFormValues>>] =
//    React.useState({
//      nombre: '',
//      apellido: '',
//      email: '',
//      direccion: '',
//      dpto: '',
//      ciudad: '',
//      departamento: '',
//      codigopostal: '',
//      numerotarjeta: '',
//      nombretarjeta: '',
//      codigodeseguridad: '',
//      fechadeexpiración: ''
//    })

//   // const handleNext = () => {
//   //   setActiveStep((prevActiveStep) => prevActiveStep + 1)
//   // }

//   // const handleBack = () => {
//   //   setActiveStep((prevActiveStep) => prevActiveStep - 1)
//   // }

//   const handleNext = (): void => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1)
//   }

//   const handleBack = (): void => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1)
//   }

//   const onSubmit = async (data: FormData): Promise<void> => {
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
//       .then((data: ResponseData) => {
//         if (data.error) {
//           setError(data.message.toString())
//         } else {
//           localStorage.setItem('purchase-data', JSON.stringify(data))
//           router
//             .push({
//               pathname: '/confirmacion-compra'
//             })
//             .catch((error) => {
//               console.error(error)
//             })
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

//       <Typography sx={{ mt: 2, mb: 1, fontWeight: 700 }}>
//         Paso {activeStep + 1}: {steps[activeStep]}{' '}
//       </Typography>
//       {activeStep === 0 && (
//         <FormPersonalData
//           formData={formData}
//           setFormData={setFormData}
//           activeStep={activeStep}
//           handleNext={handleNext}
//         />
//       )}

//       {activeStep === 1 && (
//         <DirectionData
//           formData={formData}
//           setFormData={setFormData}
//           activeStep={activeStep}
//           handleBack={handleBack}
//           handleNext={handleNext}
//         />
//       )}

//       {activeStep === 2 && (
//         <PaymentData
//           formData={formData}
//           activeStep={activeStep}
//           handleBack={handleBack}
//           handleNext={handleNext}
//           onSubmit={onSubmit}
//         />
//       )}

//       {error !== '' && (
//         <Snackbar open={true} autoHideDuration={6000}>
//           <Alert severity="error">{error}</Alert>
//         </Snackbar>
//       )}
//     </Box>
//   )
// }

// !refactor6

import React, { type Dispatch, type SetStateAction } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import { FormPersonalData } from '../../components/Form/FormPersonalData/FormPersonalData'
import { DirectionData } from '../../components/Form/DirectionData/DirectionData'
import { PaymentData } from '../../components/Form/PaymentData/PaymentData'
import { Alert, Snackbar } from '@mui/material'
// import router from 'next/router'
import { type FormData } from '../../features/checkout/form.types'

const steps = ['Datos Personales', 'Dirección de entrega', 'Datos del pago']

interface PersonalDataFormValues {
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
}

export interface SteppertProps {
  title: string
  image: string
  price: number
}

interface ResponseData {
  error: boolean
  message: string
}

export default function HorizontalLinearStepper ({ title, image, price }: SteppertProps): JSX.Element {
  const [activeStep, setActiveStep] = React.useState<number>(0)
  const [error, setError] = React.useState<string>('')
  const [formData, setFormData]: [PersonalDataFormValues, Dispatch<SetStateAction<PersonalDataFormValues>>] =
    React.useState({
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
    // tu código de envío
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

// !original

// import * as React from 'react'
// import Box from '@mui/material/Box'
// import Stepper from '@mui/material/Stepper'
// import Step from '@mui/material/Step'
// import StepLabel from '@mui/material/StepLabel'
// import Typography from '@mui/material/Typography'
// import { FormPersonalData } from './FormPersonalData/FormPersonalData'
// import { DirectionData } from './DirectionData/DirectionData'
// import { PaymentData } from './PaymentData/PaymentData'
// // import { FormProvider, useForm } from 'react-hook-form'
// import { Alert, Snackbar } from '@mui/material'
// import router from 'next/router'
// // import { yupResolver } from '@hookform/resolvers/yup'
// import { type FormData } from '../../features/checkout/form.types'

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

//       <Typography sx={{ mt: 2, mb: 1, fontWeight: 700 }}>
//         Paso {activeStep + 1}: {steps[activeStep]}{' '}
//       </Typography>
//       {activeStep === 0 && (
//         <FormPersonalData
//           formData={formData}
//           setFormData={setFormData}
//           activeStep={activeStep}
//           handleNext={handleNext}
//         />
//       )}

//       {activeStep === 1 && (
//         <DirectionData
//           formData={formData}
//           setFormData={setFormData}
//           activeStep={activeStep}
//           handleBack={handleBack}
//           handleNext={handleNext}
//         />
//       )}

//       {activeStep === 2 && (
//         <PaymentData
//           formData={formData}
//           activeStep={activeStep}
//           handleBack={handleBack}
//           handleNext={handleNext}
//           onSubmit={onSubmit}
//         />
//       )}

//       {error !== '' && (
//         <Snackbar open={true} autoHideDuration={6000}>
//           <Alert severity="error">{error}</Alert>
//         </Snackbar>
//       )}
//     </Box>
//   )
// }

// !refactor pasado por chat los4

