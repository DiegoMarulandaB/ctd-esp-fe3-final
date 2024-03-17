// import React from "react";
import { type FaqsType } from 'dh-marvel/components/faqs/faqsData';
// import { type FaqsType } from '../../components/faqs/faqsData'
import SimpleAccordion from 'dh-marvel/components/Accordions/SimpleAccordion';
// import SimpleAccordion from '../../components/Accordions/SimpleAccordion'
import BodySingle from 'dh-marvel/components/layouts/body/single/body-single';
// import BodySingle from '../../components/layouts/body/single/body-single'
import LayoutGeneral from 'dh-marvel/components/layouts/layout-general';
// import LayoutGeneral from '../../components/layouts/layout-general'
import Head from 'next/head';

export const getStaticProps = async () => {
  const res = await fetch('https://aplicacionmarvel.vercel.app/api/faq');
  const data: FaqsType[] = await res.json();

  return {
    props: {
      data,
    },
  };
};

interface FaqProps {
  data: FaqsType[];
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
            return <SimpleAccordion key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />;
          })}
        </BodySingle>
      </LayoutGeneral>
    </>
  );
};

export default Faq;
