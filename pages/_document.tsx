import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

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
