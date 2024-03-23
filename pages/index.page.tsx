// import type { NextPage } from 'next'
// import ResponsiveGrid from 'dh-marvel/components/Grid'
// import PaginationOutlined from 'dh-marvel/components/Pagination'
// import LayoutGeneral from 'dh-marvel/components/layouts/layout-general'
// import Head from 'next/head'
// import BodySingle from 'dh-marvel/components/layouts/body/single/body-single'
// import { useEffect, useState } from 'react'
// import { getComics } from 'dh-marvel/services/marvel/marvel.service'

// const INITIAL_OFFSET = 0
// const INITIAL_LIMIT = 12

// export async function getServerSideProps () {
//   const response = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
//   return {
//     props: {
//       initialComics: response.data.results,
//       limit: response.data.count,
//       initialTotal: response.data.total
//     }
//   }
// }

// interface indexProps {
//   initialComics: any
//   initialTotal: number
// }

// const Index: NextPage<indexProps> = ({ initialComics, initialTotal }) => {
//   const [comics, setComics] = useState(initialComics)
//   const [page, setPage] = useState(1)
//   const [total, settotal] = useState(initialTotal)
//   const LIMIT = 12

//   const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
//     setPage(value)
//   }

//   async function deleteCookie () {
//     await fetch('/api/cookie')
//   }

//   useEffect(() => {
//     const offset = LIMIT * (page - 1)
//     getComics(offset, LIMIT).then(response => {
//       setComics(response?.data?.results)
//       settotal(response?.data?.total)
//     })

//     deleteCookie()
//     localStorage.clear()
//   }, [page])

//   return (
//     <>
//       <Head>
//         <title>Inicio | DH MARVEL</title>
//         <meta
//           name="description"
//           content="Marvel Store Sitio Web. Trabajo final de la especialización de frontend de la materia frontend 3"
//         />
//         <link rel="icon" href="/faviconMarvel.ico" />
//       </Head>
//       <LayoutGeneral>
//         <BodySingle title={'Aplicación Marvel'}>
//           <PaginationOutlined count={Math.round(total / 12)} page={page} handleChange={handleChange} />
//           <ResponsiveGrid data={comics} />
//           <PaginationOutlined count={Math.round(total / 12)} page={page} handleChange={handleChange} />
//         </BodySingle>
//       </LayoutGeneral>
//     </>
//   )
// }

// export default Index

// refactor

/*
* Usar la extensión better comments
! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
*/

import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import BodySingle from '../components/layouts/body/single/body-single'
import { getComics } from '../services/marvel/marvel.service'
import React, { useEffect, useState } from 'react'
import ResponsiveGrid from '../components/Grid'
import PaginationOutlined from '../components/Pagination'
import LayoutGeneral from '../components/layouts/layout-general'

const INITIAL_OFFSET = 0
const INITIAL_LIMIT = 12

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
  return {
    props: {
      initialComics: response.data.results,
      limit: response.data.count,
      initialTotal: response.data.total
    }
  }
}

interface IndexProps {
  initialComics: any
  initialTotal: number
}

const Index: NextPage<IndexProps> = ({ initialComics, initialTotal }) => {
  const [comics, setComics] = useState(initialComics)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(initialTotal)
  const LIMIT = 12

  // const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
  //   setPage(value)
  // }

  const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
    setPage(value)
  }

  async function deleteCookie (): Promise<void> {
    await fetch('/api/cookie')
  }

  useEffect(() => {
    const offset = LIMIT * (page - 1)
    getComics(offset, LIMIT).then((response) => {
      setComics(response?.data?.results)
      setTotal(response?.data?.total)
    })

    deleteCookie()
    localStorage.clear()
  }, [page])

  return (
    <>
      <Head>
        <title>Inicio | DH MARVEL</title>
        <meta name="description" content="Marvel Store Sitio Web" />
      </Head>
      <LayoutGeneral>
        <BodySingle title={'¡Bienvenidx a Marvel Store!'}>
          <PaginationOutlined count={Math.round(total / 12)} page={page} handleChange={handleChange} />
          <ResponsiveGrid data={comics} />
          <PaginationOutlined count={Math.round(total / 12)} page={page} handleChange={handleChange} />
        </BodySingle>
      </LayoutGeneral>
    </>
  )
}

export default Index
