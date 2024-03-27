/*
* Usar la extensión better comments
! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
*/

import type { AppProps } from 'next/app'
// import LayoutGeneral from '../components/layouts/layout-general'
import { theme } from '../styles/material-theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  // Especifica el tipo de retorno
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <LayoutGeneral> */}
      <Component {...pageProps} />
      {/* </LayoutGeneral> */}
      {/* eslint-disable-next-line */}
      <style jsx global>{`
        /* Other global styles such as 'html, body' etc... */
        #__next {
          height: 100%;
        }
      `}</style>
    </ThemeProvider>
  )
}

export default MyApp
