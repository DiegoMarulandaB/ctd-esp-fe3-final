// usar extensión Better Comments
/**
 *  * se modifica la importación dh-marvel ya que genera este error unable to resolve path to module
 */

import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import LayoutGeneral from '../components/layouts/layout-general'
import { theme } from '../styles/material-theme'

// function MyApp ({ Component, pageProps }: AppProps) {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <LayoutGeneral>
//         <Component {...pageProps} />
//       </LayoutGeneral>
//       <style jsx global>{`
//         /* Other global styles such as 'html, body' etc... */

//         #__next {
//           height: 100%;
//         }
//       `}</style>
//     </ThemeProvider>
//   )
// }

// export default MyApp

// refactor

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  // Agregar tipo de retorno explícito
  return (
    <ThemeProvider theme={theme}>
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
  )
}

export default MyApp
