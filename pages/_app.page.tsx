/* eslint-disable react/no-unknown-property */
import { CssBaseline, ThemeProvider } from '@mui/material'
import { type AppProps } from 'next/app'
import { theme } from '../styles/material-theme'
// import LayoutGeneral from '../components/layouts/layout-general'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <LayoutGeneral> */}
      <Component {...pageProps} />
      {/* </LayoutGeneral> */}
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
