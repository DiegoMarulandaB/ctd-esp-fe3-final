import { Html, Head, Main, NextScript } from 'next/document'

const Document: React.FC = () => {
  return (
    <Html style={{ height: '100%' }}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=optional" rel="stylesheet" />
        <meta
          name="description"
          content="Final work of the frontend subject 3 of the Frontend specialization in Digital House"
        />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <body style={{ height: '100%' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
