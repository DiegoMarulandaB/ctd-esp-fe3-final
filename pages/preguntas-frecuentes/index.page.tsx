// usar extensión Better Comments
/**
 *  * se modifica la importación dh-marvel ya que genera este error unable to resolve path to module
 */
import React from 'react'
import { type FaqsType } from '../../components/faqs/faqsData'
import SimpleAccordion from '../../components/Accordions/SimpleAccordion'
import BodySingle from '../../components/layouts/body/single/body-single'
import LayoutGeneral from '../../components/layouts/layout-general'
import Head from 'next/head'
import { type GetStaticProps } from 'next'
import PropTypes from 'prop-types'

export const getStaticProps: GetStaticProps<{ data: FaqsType[] }> = async () => {
  const res = await fetch('https://aplicacionmarvel.vercel.app/api/faq')
  const data: FaqsType[] = await res.json()

  return {
    props: {
      data
    }
  }
}

interface FaqProps {
  data: FaqsType[]
}

const Faq: React.FC<FaqProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Preguntas frecuentes | DH MARVEL</title>
        <meta name="description" content="Preguntas frecuentes sobre DH MARVEL" />
      </Head>
      <LayoutGeneral>
        <BodySingle title="Preguntas frecuentes">
          {data.map((faq) => {
            return <SimpleAccordion key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
          })}
        </BodySingle>
      </LayoutGeneral>
    </>
  )
}

Faq.propTypes = {
  data: PropTypes.array.isRequired
}

export default Faq

// import React from 'react'
// import { type NextPage, type GetStaticProps } from 'next'
// import Accordion from '@mui/material/Accordion'
// import AccordionSummary from '@mui/material/AccordionSummary'
// import AccordionDetails from '@mui/material/AccordionDetails'
// import Typography from '@mui/material/Typography'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import { Container, Box } from '@mui/material'
// import BodySingle from '../../components/layouts/body/single/body-single'
// import { type FaqsType } from 'dh-marvel/interface/faqs'
// import LayoutGeneral from '../../components/layouts/layout-general'

// interface Props {
//   faqs: FaqsType[]
// }

// const Faqs: NextPage<Props> = ({ faqs }) => {
//   return (
//     <LayoutGeneral>
//       <Container>
//         <BodySingle title={'Preguntas Frecuentes'}>
//           {faqs.map((faq) => {
//             return (
//               <Accordion key={faq.id}>
//                 <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
//                   <Typography>{faq.question}</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                   <Typography>{faq.answer}</Typography>
//                 </AccordionDetails>
//               </Accordion>
//             )
//           })}
//         </BodySingle>
//       </Container>
//     </LayoutGeneral>
//   )
// }

// export const getStaticProps: GetStaticProps = async () => {
//   const response = await fetch('https://aplicacionmarvel.vercel.app/api/faq')
//   const faqs = await response.json()

//   return {
//     props: {
//       faqs
//     }
//   }
// }

// export default Faqs
