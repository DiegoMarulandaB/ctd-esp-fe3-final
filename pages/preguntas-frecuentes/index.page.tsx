/* eslint-disable @typescript-eslint/explicit-function-return-type */
/*
* Usar la extensión better comments
! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
*/

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

//! vercel https://aplicacionmarvel.vercel.app
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
