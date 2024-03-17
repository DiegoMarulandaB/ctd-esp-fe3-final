import type { AppProps } from 'next/app'
import {   CssBaseline, ThemeProvid e r } f'o' '@mui/mate'''
import LayoutGeneral from 'dh-marvel/components/layouts/layout-general'
import {   the m e } f'o' 'dh-marvel/styles/material-t'''

function MyApp   ({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <LayoutGeneral>
      <Component {...pageProps} />
    </LayoutGeneral>
    <style jsx global>{`
              /* Other global styles such as 'html, body' etc... */

              #__next {
                height: 100%;
              }
            `}</style>
  </ThemeProvider>
}

export default MyApp
