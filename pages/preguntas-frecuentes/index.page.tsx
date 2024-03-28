/* eslint-disable @typescript-eslint/explicit-function-return-type */
/*
* Usar la extensión better comments
! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
*/

// import SimpleAccordion from '../../components/Accordions/SimpleAccordion'
// import React from 'react'
// import LayoutGeneral from '../../components/layouts/layout-general'
// import Head from 'next/head'
// import BodySingle from '../../components/layouts/body/single/body-single'
// import { type GetStaticProps } from 'next'
// import { type FaqsType } from '../../components/faqs/faqsData'

// export const getStaticProps: GetStaticProps = async (ctx) => {
//   const urlVercel = 'https://aplicacionmarvel.vercel.app'
//   try {
//     const res = await fetch(`${urlVercel}/api/preguntas-frecuentes`)
//     if (!res.ok) {
//       throw new Error('La solicitud de FAQs no fue exitosa')
//     }
//     const data: FaqsType[] = await res.json()
//     return {
//       props: {
//         data
//       }
//     }
//   } catch (error) {
//     console.error('Error en getStaticProps:', error)
//     return {
//       props: {
//         data: []
//       }
//     }
//   }
// }

// interface FaqProps {
//   data: FaqsType[]
// }

// const Faq: React.FC<FaqProps> = ({ data }) => {
//   return (
//     <>
//       <Head>
//         <title>Preguntas frecuentes | DH MARVEL</title>
//         <meta name="description" content="Preguntas frecuentes sobre DH MARVEL" />
//       </Head>
//       <LayoutGeneral>
//         <BodySingle title="Preguntas frecuentes">
//           {data.map((faq) => {
//             return <SimpleAccordion key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
//           })}
//         </BodySingle>
//       </LayoutGeneral>
//     </>
//   )
// }

// export default Faq

//! refactor

import SimpleAccordion from '../../components/Accordions/SimpleAccordion'
import React from 'react'
import LayoutGeneral from '../../components/layouts/layout-general'
import Head from 'next/head'
import BodySingle from '../../components/layouts/body/single/body-single'
import { type FaqsType } from '../../components/faqs/faqsData'
import { type GetStaticProps, type NextPage } from 'next'

interface FaqProps {
  data: FaqsType[]
}

const Faq: NextPage<FaqProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Preguntas frecuentes | DH MARVEL</title>
        <meta name="description" content="Preguntas frecuentes sobre DH MARVEL"
        />
      </Head>
      <LayoutGeneral>
        <BodySingle title="Preguntas frecuentes">
          {data.map((faq) => {
            return <SimpleAccordion key={faq.id} id={faq.id} question=
              {faq.question} answer={faq.answer} />
          })}
        </BodySingle>
      </LayoutGeneral>
    </>
  )
}

export const getStaticProps: GetStaticProps<FaqProps> = async (ctx) => {
  const urlVercel = 'http://localhost:3000'
  try {
    const res = await fetch(`${urlVercel}/api/preguntas-frecuentes`)
    if (!res.ok) {
      throw new Error('La solicitud de FAQs no fue exitosa')
    }
    const data: FaqsType[] = await res.json()
    return {
      props: {
        data
      },
      revalidate: 1
    }
  } catch (error) {
    console.error('Error en getStaticProps:', error)
    return {
      props: {
        data: []
      }
    }
  }
}

export default Faq

//! alternativa2
// export const getStaticProps = async () => {
//   const res = await fetch('https://aplicacionmarvel.vercel.appp/api/faq')
//   const data: FaqsType[] = await res.json()

//   return {
//     props: {
//       data
//     }
//   }
// }

// export const getStaticProps = async () => {
//   const res = await fetch('https://aplicacionmarvel.vercel.app/api/faq') // Corregido el typo en la URL
//   const data: FaqsType[] = await res.json()

//   return {
//     props: {
//       data
//     }
//   }
// }

// const Faq: React.FC<FaqProps> = ({ data }) => {
//   return (
//     <>
//       <Head>
//         <title>Preguntas frecuentes | DH MARVEL</title>
//         <meta name="description" content="Preguntas frecuentes sobre DH MARVEL" />
//       </Head>
//       <LayoutGeneral>
//         <BodySingle title="Preguntas frecuentes">
//           {data.map((faq) => {
//             return <SimpleAccordion key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
//           })}
//         </BodySingle>
//       </LayoutGeneral>
//     </>
//   )
// }

// export default Faq
