// import { Html, Head, Main, NextScript } from 'next/document'

// export default function Document () {
//   return (
//     <Html style={{ height: '100%' }}>
//       <Head>
//         <link
//           href="https://fonts.googleapis.com/css2?family=Roboto"
//           rel="stylesheet"
//         />
//       </Head>
//       <body style={{ height: '100%' }}>
//         <Main />
//         <NextScript />
//       </body>

//     </Html>
//   )
// }

// refactor

import { Html, Head, Main, NextScript } from 'next/document'
import { ReactNode } from 'react'

const Document: React.FC = () => {
  return (
    <Html style={{ height: '100%' }}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto" rel="stylesheet" />
      </Head>
      <body style={{ height: '100%' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
