/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useForm, FormProvider } from 'react-hook-form'

// export const Wrapper = ({ children }: any) => {
//   // Obtenemos los métodos del formulario mediante useForm
//   const methods = useForm({
//     mode: 'all',
//     defaultValues: {
//       nombre: ''
//     }
//   })

//   // Envolvemos los "hijos" del componente dentro del FormProvider
//   return <FormProvider {...methods}>{children}</FormProvider>
// }

// refactor

import { useForm, FormProvider } from 'react-hook-form'
import { type ReactNode } from 'react'

export const Wrapper = ({ children }: { children: ReactNode }): JSX.Element => {
  // Obtenemos los métodos del formulario mediante useForm
  const methods = useForm({
    mode: 'all',
    defaultValues: {
      nombre: ''
    }
  })

  // Envolvemos los "hijos" del componente dentro del FormProvider
  return <FormProvider {...methods}>{children}</FormProvider>
}
