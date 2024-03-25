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

// import type { GetServerSideProps, NextPage } from 'next'
// import Head from 'next/head'
// import BodySingle from '../components/layouts/body/single/body-single'
// import { getComics } from '../services/marvel/marvel.service'
// import React, { useEffect, useState } from 'react'
// import ResponsiveGrid from '../components/Grid'
// import PaginationOutlined from '../components/Pagination'
// import LayoutGeneral from '../components/layouts/layout-general'

// const INITIAL_OFFSET = 0
// const INITIAL_LIMIT = 12

// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
//   return {
//     props: {
//       initialComics: response.data.results,
//       limit: response.data.count,
//       initialTotal: response.data.total
//     }
//   }
// }

// interface IndexProps {
//   initialComics: any
//   initialTotal: number
// }

// const Index: NextPage<IndexProps> = ({ initialComics, initialTotal }) => {
//   const [comics, setComics] = useState(initialComics)
//   const [page, setPage] = useState(1)
//   const [total, setTotal] = useState(initialTotal)
//   const LIMIT = 12

//   // const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
//   //   setPage(value)
//   // }

//   const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
//     setPage(value)
//   }

//   async function deleteCookie (): Promise<void> {
//     await fetch('/api/cookie')
//   }

//   useEffect(() => {
//     const offset = LIMIT * (page - 1)
//     getComics(offset, LIMIT).then((response) => {
//       setComics(response?.data?.results)
//       setTotal(response?.data?.total)
//     })

//     deleteCookie()
//     localStorage.clear()
//   }, [page])

//   return (
//     <>
//       <Head>
//         <title>Inicio | DH MARVEL</title>
//         <meta name="description" content="Marvel Store Sitio Web" />
//       </Head>
//       <LayoutGeneral>
//         <BodySingle title={'¡Bienvenidx a Marvel Store!'}>
//           <PaginationOutlined count={Math.round(total / 12)} page={page} handleChange={handleChange} />
//           <ResponsiveGrid data={comics} />
//           <PaginationOutlined count={Math.round(total / 12)} page={page} handleChange={handleChange} />
//         </BodySingle>
//       </LayoutGeneral>
//     </>
//   )
// }

// export default Index

// refactor 3

// const INITIAL_OFFSET = 0
// const INITIAL_LIMIT = 12

// interface indexProps {
//   initialComics: any
//   initialTotal: number
// }

// // export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
// //   const response = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
// //   return {
// //     props: {
// //       initialComics: response.data.results,
// //       limit: response.data.count,
// //       initialTotal: response.data.total
// //     }
// //   }
// // }

// export const getServerSideProps: GetServerSideProps<indexProps> = async () => {
//   const response = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
//   return {
//     props: {
//       initialComics: response.data.results,
//       limit: response.data.count,
//       initialTotal: response.data.total
//     }
//   }
// }

// const Index: NextPage<indexProps> = ({ initialComics, initialTotal }) => {
//   const [comics, setComics] = useState(initialComics)
//   const [page, setPage] = useState(1)
//   const [total, settotal] = useState(initialTotal)
//   const LIMIT = 12

//   // const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
//   //   setPage(value)
//   // }

//   const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
//     setPage(value)
//   }

//   // async function deleteCookie () {
//   //   await fetch('/api/cookie')
//   // }

//   async function deleteCookie (): Promise<void> {
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

// refactor 4

// import type { GetServerSideProps, NextPage } from 'next'
// import Head from 'next/head'
// import BodySingle from '../components/layouts/body/single/body-single'
// import { getComics } from '../services/marvel/marvel.service'
// import React, { useEffect, useState } from 'react'
// import ResponsiveGrid from '../components/Grid'
// import PaginationOutlined from '../components/Pagination'
// import LayoutGeneral from '../components/layouts/layout-general'

// const INITIAL_OFFSET = 0
// const INITIAL_LIMIT = 12

// interface IndexProps {
//   initialComics: any
//   initialTotal: number
// }

// export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
//   const response = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
//   return {
//     props: {
//       initialComics: response.data.results,
//       initialTotal: response.data.total
//     }
//   }
// }

// const Index: NextPage<IndexProps> = ({ initialComics, initialTotal }) => {
//   const [comics, setComics] = useState(initialComics)
//   const [page, setPage] = useState(1)
//   const [total, setTotal] = useState(initialTotal)
//   const LIMIT = 12

//   const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
//     setPage(value)
//   }

//   async function deleteCookie (): Promise<void> {
//     await fetch('/api/cookie')
//   }

//   // useEffect(() => {
//   //   const offset = LIMIT * (page - 1)
//   //   getComics(offset, LIMIT).then((response) => {
//   //     setComics(response?.data?.results)
//   //     setTotal(response?.data?.total)
//   //   })

//   useEffect(() => {
//     const offset = LIMIT * (page - 1)
//     getComics(offset, LIMIT)
//       .then((response) => {
//         setComics(response?.data?.results)
//         setTotal(response?.data?.total as number)
//       })
//       .catch((error) => {
//         console.error('Error fetching comics:', error)
//       // Maneja el error según sea necesario
//       })

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

// refactor 5

// import type { GetServerSideProps, NextPage } from 'next'
// import Head from 'next/head'
// import BodySingle from '../components/layouts/body/single/body-single'
// import { getComics } from '../services/marvel/marvel.service'
// import React, { useEffect, useState } from 'react'
// import ResponsiveGrid from '../components/Grid'
// import PaginationOutlined from '../components/Pagination'
// import LayoutGeneral from '../components/layouts/layout-general'

// const INITIAL_OFFSET = 0
// const INITIAL_LIMIT = 12

// interface IndexProps {
//   initialComics: any
//   initialTotal: number
// }

// export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
//   const response = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
//   return {
//     props: {
//       initialComics: response.data.results,
//       initialTotal: response.data.total
//     }
//   }
// }

// const Index: NextPage<IndexProps> = ({ initialComics, initialTotal }) => {
//   const [comics, setComics] = useState(initialComics)
//   const [page, setPage] = useState(1)
//   const [total, setTotal] = useState(initialTotal)
//   const LIMIT = 12

//   const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
//     setPage(value)
//   }

//   async function deleteCookie (): Promise<void> {
//     await fetch('/api/cookie')
//   }

//   useEffect(() => {
//     async function fetchData (): Promise<void> {
//       const offset = LIMIT * (page - 1)
//       try {
//         const response = await getComics(offset, LIMIT)
//         setComics(response?.data?.results)
//         setTotal(response?.data?.total as number)
//       } catch (error) {
//         console.error('Error fetching comics:', error)
//       // Maneja el error según sea necesario
//       }

//       await deleteCookie()
//       localStorage.clear()
//     }

//     fetchData()
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

// refacor

// const INITIAL_OFFSET = 0
// const INITIAL_LIMIT = 12

// // interface IndexProps {
// //   initialComics: any
// //   initialTotal: number
// // }

// interface Comic {
//   // Define la estructura de un cómic según los datos que recibes de la API
//   // por ejemplo:
//   id: number
//   title: string
//   // otras propiedades...
// }

// // interface MarvelApiResponse {
// //   // Define la estructura de la respuesta de la API de Marvel
// //   // por ejemplo:
// //   results: Comic[]
// //   total: number
// //   // otras propiedades...
// // }

// interface IndexProps {
//   initialComics: Comic[]
//   initialTotal: number
// }

// // export async function getServerSideProps () {
// //   const response = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
// //   return {
// //     props: {
// //       initialComics: response.data.results,
// //       limit: response.data.count,
// //       initialTotal: response.data.total
// //     }
// //   }
// // }

// export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
//   const response = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
//   return {
//     props: {
//       initialComics: response.data.results,
//       initialTotal: response.data.total
//     }
//   }
// }

// const Index: NextPage<indexProps> = ({ initialComics, initialTotal }) => {
//   const [comics, setComics] = useState(initialComics)
//   const [page, setPage] = useState(1)
//   const [total, settotal] = useState(initialTotal)
//   const LIMIT = 12

//   // const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
//   //   setPage(value)
//   // }
//   const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
//     setPage(value)
//   }

//   // async function deleteCookie () {
//   //   await fetch('/api/cookie')
//   // }

//   async function deleteCookie (): Promise<void> {
//     await fetch('/api/cookie')
//   }

//   // useEffect(() => {
//   //   const offset = LIMIT * (page - 1)
//   //   getComics(offset, LIMIT).then((response) => {
//   //     setComics(response?.data?.results)
//   //     settotal(response?.data?.total)
//   //   })

//   useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const offset = LIMIT * (page - 1);
//       const response = await getComics(offset, LIMIT);
//       setComics(response?.data?.results);
//       settotal(response?.data?.total);
//     } catch (error) {
//       // Manejar el error aquí, por ejemplo, mostrando un mensaje de error o realizando alguna acción específica
//       console.error("Error fetching comics:", error);
//     }
//   };

//   fetchData();
//   deleteCookie();
//   localStorage.clear();
// }, [page]);

//     deleteCookie()
//     localStorage.clear()
//   }, [page])

//   return (
//     <>
//       <Head>
//         <title>Inicio | DH MARVEL</title>
//         <meta name="description" content="Marvel Store Sitio Web" />
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

// refactor6
// import type { GetServerSideProps, NextPage } from 'next'
// import Head from 'next/head'
// import BodySingle from '../components/layouts/body/single/body-single'
// import { getComics } from '../services/marvel/marvel.service'
// import React, { useEffect, useState } from 'react'
// import ResponsiveGrid from '../components/Grid'
// import PaginationOutlined from '../components/Pagination'
// import LayoutGeneral from '../components/layouts/layout-general'

// const INITIAL_OFFSET = 0
// const INITIAL_LIMIT = 12

// interface Comic {
//   id: number
//   title: string
// }

// interface IndexProps {
//   initialComics: Comic[]
//   initialTotal: number
// }

// export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
//   const response = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
//   return {
//     props: {
//       initialComics: response.data.results,
//       initialTotal: response.data.total
//     }
//   }
// }

// const Index: NextPage<IndexProps> = ({ initialComics, initialTotal }) => {
//   const [comics, setComics] = useState(initialComics)
//   const [page, setPage] = useState(1)
//   const [total, setTotal] = useState(initialTotal)
//   const LIMIT = 12

//   const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
//     setPage(value)
//   }

//   async function deleteCookie (): Promise<void> {
//     await fetch('/api/cookie')
//   }

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const offset = LIMIT * (page - 1)
//   //       const response = await getComics(offset, LIMIT)
//   //       setComics(response?.data?.results)
//   //       setTotal(response?.data?.total)
//   //     } catch (error) {
//   //       console.error('Error fetching comics:', error)
//   //     }
//   //   }

//   //   fetchData()
//   //   deleteCookie()
//   //   localStorage.clear()
//   // }, [page])

//   useEffect(() => {
//     const fetchDataAndCleanUp = async () => {
//       try {
//         const offset = LIMIT * (page - 1)
//         const response = await getComics(offset, LIMIT)
//         setComics(response?.data?.results)
//         setTotal(response?.data?.total)
//       } catch (error) {
//         console.error('Error fetching comics:', error)
//       }
//       await deleteCookie()
//       localStorage.clear()
//     }

//     fetchDataAndCleanUp()
//   }, [page])

//   return (
//     <>
//       <Head>
//         <title>Inicio | DH MARVEL</title>
//         <meta name="description" content="Marvel Store Sitio Web" />
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

// refactor7

// import type { GetServerSideProps, NextPage } from 'next'
// import Head from 'next/head'
// import BodySingle from '../components/layouts/body/single/body-single'
// import { getComics } from '../services/marvel/marvel.service'
// import React, { useEffect, useState } from 'react'
// import ResponsiveGrid from '../components/Grid'
// import PaginationOutlined from '../components/Pagination'
// import LayoutGeneral from '../components/layouts/layout-general'

// const INITIAL_OFFSET = 0
// const INITIAL_LIMIT = 12

// interface Comic {
//   id: number
//   title: string
// }

// interface IndexProps {
//   initialComics: Comic[]
//   initialTotal: number
// }

// export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
//   const response = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
//   return {
//     props: {
//       initialComics: response.data.results,
//       initialTotal: response.data.total
//     }
//   }
// }

// const Index: NextPage<IndexProps> = ({ initialComics, initialTotal }) => {
//   const [comics, setComics] = useState<Comic[]>(initialComics)
//   const [page, setPage] = useState(1)
//   const [total, setTotal] = useState<number>(initialTotal)
//   const LIMIT = 12

//   const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
//     setPage(value)
//   }

//   async function deleteCookie (): Promise<void> {
//     await fetch('/api/cookie')
//   }

//   useEffect(() => {
//     const fetchDataAndCleanUp = async (): Promise<void> => {
//       try {
//         const offset = LIMIT * (page - 1)
//         const response = await getComics(offset, LIMIT)
//         setComics(response?.data?.results || [])
//         setTotal(response?.data?.total || 0)
//       } catch (error) {
//         console.error('Error fetching comics:', error)
//       }
//       await deleteCookie()
//       localStorage.clear()
//     }

//     fetchDataAndCleanUp()
//   }, [page])

//   return (
//     <>
//       <Head>
//         <title>Inicio | DH MARVEL</title>
//         <meta name="description" content="Marvel Store Sitio Web" />
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

// refactor8

// import type { GetServerSideProps, NextPage } from 'next'
// import Head from 'next/head'
// import BodySingle from '../components/layouts/body/single/body-single'
// import { getComics } from '../services/marvel/marvel.service'
// import React, { useEffect, useState } from 'react'
// import ResponsiveGrid from '../components/Grid'
// import PaginationOutlined from '../components/Pagination'
// import LayoutGeneral from '../components/layouts/layout-general'

// const INITIAL_OFFSET = 0
// const INITIAL_LIMIT = 12

// interface Comic {
//   id: number
//   title: string
// }

// interface IndexProps {
//   initialComics: Comic[]
//   initialTotal: number
// }

// export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
//   const response = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
//   return {
//     props: {
//       initialComics: response.data.results,
//       initialTotal: response.data.total
//     }
//   }
// }

// const Index: NextPage<IndexProps> = ({ initialComics, initialTotal }) => {
//   const [comics, setComics] = useState<Comic[]>(initialComics)
//   const [page, setPage] = useState<number>(1) // Added explicit typing
//   const [total, setTotal] = useState<number>(initialTotal)
//   const LIMIT = 12

//   const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
//     setPage(value)
//   }

//   async function deleteCookie (): Promise<void> {
//     await fetch('/api/cookie')
//   }

//   useEffect(() => {
//     const fetchDataAndCleanUp = async (): Promise<void> => {
//       try {
//         const offset = LIMIT * (page - 1)
//         const response = await getComics(offset, LIMIT)
//         setComics(response?.data?.results || [])
//         setTotal(response?.data?.total || 0)
//       } catch (error) {
//         console.error('Error fetching comics:', error)
//       }
//       await deleteCookie()
//       localStorage.clear()
//     }

//     fetchDataAndCleanUp()
//   }, [page])

//   return (
//     <>
//       <Head>
//         <title>Inicio | DH MARVEL</title>
//         <meta name="description" content="Marvel Store Sitio Web" />
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

// refactor 9 -1 error

// import type { GetServerSideProps, NextPage } from 'next'
// import Head from 'next/head'
// import BodySingle from '../components/layouts/body/single/body-single'
// import { getComics } from '../services/marvel/marvel.service'
// import React, { useEffect, useState } from 'react'
// import ResponsiveGrid from '../components/Grid'
// import PaginationOutlined from '../components/Pagination'
// import LayoutGeneral from '../components/layouts/layout-general'

// const INITIAL_OFFSET = 0
// const INITIAL_LIMIT = 12

// interface Comic {
//   id: number
//   title: string
// }

// interface IndexProps {
//   initialComics: Comic[]
//   initialTotal: number
// }

// export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
//   const response = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
//   return {
//     props: {
//       initialComics: response.data.results,
//       initialTotal: response.data.total
//     }
//   }
// }

// const Index: NextPage<IndexProps> = ({ initialComics, initialTotal }) => {
//   const [comics, setComics] = useState<Comic[]>(initialComics)
//   const [page, setPage] = useState<number>(1) // Added explicit typing
//   const [total, setTotal] = useState<number>(initialTotal)
//   const LIMIT = 12

//   const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
//     setPage(value)
//   }

//   async function deleteCookie (): Promise<void> {
//     await fetch('/api/cookie')
//   }

//   // useEffect(() => {
//   //   const fetchDataAndCleanUp = async (): Promise<void> => {
//   //     try {
//   //       const offset = LIMIT * (page - 1)
//   //       const response = await getComics(offset, LIMIT)
//   //       setComics(response?.data?.results ?? []) // Fix applied here
//   //       setTotal(response?.data?.total ?? 0) // Fix applied here
//   //     } catch (error) {
//   //       console.error('Error fetching comics:', error)
//   //     }
//   //     await deleteCookie()
//   //     localStorage.clear()
//   //   }

//   //   fetchDataAndCleanUp()
//   // }, [page])

//   useEffect(() => {
//     const fetchDataAndCleanUp = async (): Promise<void> => {
//       try {
//         const offset = LIMIT * (page - 1)
//         const response = await getComics(offset, LIMIT)
//         setComics(response?.data?.results ?? [])
//         setTotal(response?.data?.total ?? 0)
//       } catch (error) {
//         console.error('Error fetching comics:', error)
//       }
//       try {
//         await deleteCookie()
//         localStorage.clear()
//       } catch (error) {
//         console.error('Error deleting cookie:', error)
//       }
//     }

//     fetchDataAndCleanUp().catch((error) => {
//       console.error('Error in fetchDataAndCleanUp:', error)
//     })
//   }, [page])

//   return (
//     <>
//       <Head>
//         <title>Inicio | DH MARVEL</title>
//         <meta name="description" content="Marvel Store Sitio Web" />
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

// refactor10

// import type { GetServerSideProps, NextPage } from 'next'
// import Head from 'next/head'
// import BodySingle from '../components/layouts/body/single/body-single'
// import { getComics } from '../services/marvel/marvel.service'
// import React, { useEffect, useState } from 'react'
// import ResponsiveGrid from '../components/Grid'
// import PaginationOutlined from '../components/Pagination'
// import LayoutGeneral from '../components/layouts/layout-general'

// const INITIAL_OFFSET = 0
// const INITIAL_LIMIT = 12

// interface Comic {
//   id: number
//   title: string
// }

// interface IndexProps {
//   initialComics: Comic[]
//   initialTotal: number
// }

// export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
//   const response = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
//   return {
//     props: {
//       initialComics: response.data.results,
//       initialTotal: response.data.total
//     }
//   }
// }

// const Index: NextPage<IndexProps> = ({ initialComics, initialTotal }: IndexProps) => {
//   const [comics, setComics] = useState<Comic[]>(initialComics)
//   const [page, setPage] = useState<number>(1)
//   const [total, setTotal] = useState<number>(initialTotal)
//   const LIMIT = 12

//   const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
//     setPage(value)
//   }

//   async function deleteCookie (): Promise<void> {
//     await fetch('/api/cookie')
//   }

//   useEffect(() => {
//     const fetchDataAndCleanUp = async (): Promise<void> => {
//       try {
//         const offset = LIMIT * (page - 1)
//         const response = await getComics(offset, LIMIT)
//         setComics(response?.data?.results ?? [])
//         setTotal(response?.data?.total ?? 0)
//       } catch (error) {
//         console.error('Error fetching comics:', error)
//       }
//       try {
//         await deleteCookie()
//         localStorage.clear()
//       } catch (error) {
//         console.error('Error deleting cookie:', error)
//       }
//     }

//     fetchDataAndCleanUp().catch((error) => {
//       console.error('Error in fetchDataAndCleanUp:', error)
//     })
//   }, [page])

//   return (
//     <>
//       <Head>
//         <title>Inicio | DH MARVEL</title>
//         <meta name="description" content="Marvel Store Sitio Web" />
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

// ! refactor11-4 errores

// import type { GetServerSideProps, NextPage } from 'next'
// import Head from 'next/head'
// import BodySingle from '../components/layouts/body/single/body-single'
// import { getComics } from '../services/marvel/marvel.service'
// import React, { useEffect, useState } from 'react'
// import ResponsiveGrid from '../components/Grid'
// import PaginationOutlined from '../components/Pagination'
// import LayoutGeneral from '../components/layouts/layout-general'
// import type { MarvelApiResponse } from '../services/marvel/marvel.service'

// const INITIAL_OFFSET = 0
// const INITIAL_LIMIT = 12

// interface Comic {
//   id: number
//   title: string
// }

// interface IndexProps {
//   initialComics: Comic[]
//   initialTotal: number
// }

// // interface MarvelApiResponse<T> {
// //   code: number
// //   status: string
// //   data: {
// //     results: T[]
// //     total: number
// //   }
// // }

// // export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
// //   const response = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
// //   return {
// //     props: {
// //       initialComics: response.data.results,
// //       initialTotal: response.data.total
// //     }
// //   }
// // }

// // export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
// //   const response = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
// //   return {
// //     props: {
// //       initialComics: response.results, // response es un array, no tiene una propiedad "data"
// //       initialTotal: response.total // response es un array, no tiene una propiedad "data"
// //     }
// //   }
// // }

// // export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
// //   const response: MarvelApiResponse<Comic> = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
// //   return {
// //     props: {
// //       initialComics: response.data.results,
// //       initialTotal: response.data.total
// //     }
// //   }
// // }

// export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
//   const response: Comic[] = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
//   const marvelApiResponse: MarvelApiResponse<Comic> = {
//     code: 200,
//     status: 'OK',
//     data: {
//       results: response,
//       total: response.length
//     }
//   }
//   return {
//     props: {
//       initialComics: marvelApiResponse.data.results,
//       initialTotal: marvelApiResponse.data.total
//     }
//   }
// }

// const Index: NextPage<IndexProps> = ({ initialComics, initialTotal }: IndexProps) => {
//   const [comics, setComics] = useState<Comic[]>(initialComics)
//   const [page, setPage] = useState<number>(1)
//   const [total, setTotal] = useState<number>(initialTotal)
//   const LIMIT = 12

//   const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
//     setPage(value)
//   }

//   async function deleteCookie (): Promise<void> {
//     await fetch('/api/cookie')
//   }

//   useEffect(() => {
//     const fetchDataAndCleanUp = async (): Promise<void> => {
//       try {
//         const offset = LIMIT * (page - 1)
//         const response = await getComics(offset, LIMIT)
//         setComics(response?.data?.results ?? [])
//         setTotal(response?.data?.total ?? 0)
//       } catch (error) {
//         console.error('Error fetching comics:', error)
//       }
//       try {
//         await deleteCookie()
//         localStorage.clear()
//       } catch (error) {
//         console.error('Error deleting cookie:', error)
//       }
//     }

//     fetchDataAndCleanUp().catch((error) => {
//       console.error('Error in fetchDataAndCleanUp:', error)
//     })
//   }, [page])

//   return (
//     <>
//       <Head>
//         <title>Inicio | DH MARVEL</title>
//         <meta name="description" content="Marvel Store Sitio Web" />
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

// ! refactor15-dos errores

// import type { GetServerSideProps, NextPage } from 'next'
// import Head from 'next/head'
// import BodySingle from '../components/layouts/body/single/body-single'
// import { getComics } from '../services/marvel/marvel.service'
// import React, { useEffect, useState } from 'react'
// import ResponsiveGrid from '../components/Grid'
// import PaginationOutlined from '../components/Pagination'
// import LayoutGeneral from '../components/layouts/layout-general'
// import type { MarvelApiResponse } from '../services/marvel/marvel.service'

// const INITIAL_OFFSET = 0
// const INITIAL_LIMIT = 12

// interface Comic {
//   id: number
//   title: string
// }

// interface IndexProps {
//   initialComics: Comic[]
//   initialTotal: number
// }

// // interface MarvelApiResponse<T> {
// //   code: number
// //   status: string
// //   data: {
// //     results: T[]
// //     total: number
// //   }
// // }

// // export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
// //   const response = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
// //   return {
// //     props: {
// //       initialComics: response.data.results,
// //       initialTotal: response.data.total
// //     }
// //   }
// // }

// // export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
// //   const response = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
// //   return {
// //     props: {
// //       initialComics: response.results, // response es un array, no tiene una propiedad "data"
// //       initialTotal: response.total // response es un array, no tiene una propiedad "data"
// //     }
// //   }
// // }

// // export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
// //   const response: MarvelApiResponse<Comic> = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
// //   return {
// //     props: {
// //       initialComics: response.data.results,
// //       initialTotal: response.data.total
// //     }
// //   }
// // }

// export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
//   const response: Comic[] = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
//   const marvelApiResponse: MarvelApiResponse<Comic> = {
//     code: 200,
//     status: 'OK',
//     data: {
//       results: response,
//       total: response.length
//     }
//   }
//   return {
//     props: {
//       initialComics: marvelApiResponse.data.results,
//       initialTotal: marvelApiResponse.data.total
//     }
//   }
// }

// const Index: NextPage<IndexProps> = ({ initialComics, initialTotal }: IndexProps) => {
//   const [comics, setComics] = useState<Comic[]>(initialComics)
//   const [page, setPage] = useState<number>(1)
//   const [total, setTotal] = useState<number>(initialTotal)
//   const LIMIT = 12

//   const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
//     setPage(value)
//   }

//   async function deleteCookie (): Promise<void> {
//     await fetch('/api/cookie')
//   }

//   useEffect(() => {
//     const fetchDataAndCleanUp = async (): Promise<void> => {
//       try {
//         const offset = LIMIT * (page - 1)
//         const response: MarvelApiResponse<Comic[]> = await getComics(offset, LIMIT)
//         setComics(response?.data?.results ?? [])
//         setTotal(response?.data?.total ?? 0)
//       } catch (error) {
//         console.error('Error fetching comics:', error)
//       }
//       try {
//         await deleteCookie()
//         localStorage.clear()
//       } catch (error) {
//         console.error('Error deleting cookie:', error)
//       }
//     }

//     fetchDataAndCleanUp().catch((error) => {
//       console.error('Error in fetchDataAndCleanUp:', error)
//     })
//   }, [page])

//   return (
//     <>
//       <Head>
//         <title>Inicio | DH MARVEL</title>
//         <meta name="description" content="Marvel Store Sitio Web" />
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

// !refactor16 tiene dos errores+

import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import BodySingle from '../components/layouts/body/single/body-single'
import { getComics } from '../services/marvel/marvel.service'
import React, { useEffect, useState } from 'react'
import ResponsiveGrid from '../components/Grid'
import PaginationOutlined from '../components/Pagination'
import LayoutGeneral from '../components/layouts/layout-general'
import type { MarvelApiResponse } from '../services/marvel/marvel.service'

const INITIAL_OFFSET = 0
const INITIAL_LIMIT = 12

interface Comic {
  id: number
  title: string
}

interface IndexProps {
  initialComics: Comic[]
  initialTotal: number
}

// interface MarvelApiResponse<T> {
//   code: number
//   status: string
//   data: {
//     results: T[]
//     total: number
//   }
// }

// export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
//   const response = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
//   return {
//     props: {
//       initialComics: response.data.results,
//       initialTotal: response.data.total
//     }
//   }
// }

// export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
//   const response = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
//   return {
//     props: {
//       initialComics: response.results, // response es un array, no tiene una propiedad "data"
//       initialTotal: response.total // response es un array, no tiene una propiedad "data"
//     }
//   }
// }

// export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
//   const response: MarvelApiResponse<Comic> = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
//   return {
//     props: {
//       initialComics: response.data.results,
//       initialTotal: response.data.total
//     }
//   }
// }

export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
  const response: Comic[] = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
  const marvelApiResponse: MarvelApiResponse<Comic> = {
    code: 200,
    status: 'OK',
    data: {
      results: response,
      total: response.length
    }
  }
  return {
    props: {
      initialComics: marvelApiResponse.data.results,
      initialTotal: marvelApiResponse.data.total
    }
  }
}

const Index: NextPage<IndexProps> = ({ initialComics, initialTotal }: IndexProps) => {
  const [comics, setComics] = useState<Comic[]>(initialComics)
  const [page, setPage] = useState<number>(1)
  const [total, setTotal] = useState<number>(initialTotal)
  const LIMIT = 12

  const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
    setPage(value)
  }

  async function deleteCookie (): Promise<void> {
    await fetch('/api/cookie')
  }

  useEffect(() => {
    const fetchDataAndCleanUp = async (): Promise<void> => {
      try {
        const offset = LIMIT * (page - 1)
        const response: Comic[] = await getComics(offset, LIMIT) // Asigna el resultado directamente a Comic[]
        const marvelApiResponse: MarvelApiResponse<Comic[]> = {
          code: 200,
          status: 'OK',
          data: {
            results: response,
            total: response.length
          }
        }
        setComics(marvelApiResponse.data.results)
        setTotal(marvelApiResponse.data.total)
      } catch (error) {
        console.error('Error fetching comics:', error)
      }
      try {
        await deleteCookie()
        localStorage.clear()
      } catch (error) {
        console.error('Error deleting cookie:', error)
      }
    }

    fetchDataAndCleanUp().catch((error) => {
      console.error('Error in fetchDataAndCleanUp:', error)
    })
  }, [page])

  return (
    <>
      <Head>
        <title>Inicio | DH MARVEL</title>
        <meta name="description" content="Marvel Store Sitio Web" />
      </Head>
      <LayoutGeneral>
        <BodySingle title={'Aplicación Marvel'}>
          <PaginationOutlined count={Math.round(total / 12)} page={page} handleChange={handleChange} />
          <ResponsiveGrid data={comics} />
          <PaginationOutlined count={Math.round(total / 12)} page={page} handleChange={handleChange} />
        </BodySingle>
      </LayoutGeneral>
    </>
  )
}

export default Index

// !refactor 17

// import type { GetServerSideProps, NextPage } from 'next'
// import Head from 'next/head'
// import BodySingle from '../components/layouts/body/single/body-single'
// import { getComics, type MarvelApiResponse, type Comic } from '../services/marvel/marvel.service'
// import React, { useEffect, useState } from 'react'
// import ResponsiveGrid from '../components/Grid'
// import PaginationOutlined from '../components/Pagination'
// import LayoutGeneral from '../components/layouts/layout-general'

// const INITIAL_OFFSET = 0
// const INITIAL_LIMIT = 12

// interface IndexProps {
//   initialComics: Comic[]
//   initialTotal: number
// }

// export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
//   try {
//     const response = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
//     const marvelApiResponse: MarvelApiResponse<Comic[]> = {
//       code: 200,
//       status: 'OK',
//       data: {
//         results: response,
//         total: response.length
//       }
//     }
//     return {
//       props: {
//         initialComics: marvelApiResponse.data.results,
//         initialTotal: marvelApiResponse.data.total
//       }
//     }
//   } catch (error) {
//     console.error('Error fetching comics:', error)
//     return {
//       props: {
//         initialComics: [],
//         initialTotal: 0
//       }
//     }
//   }
// }

// const Index: NextPage<IndexProps> = ({ initialComics, initialTotal }) => {
//   const [comics, setComics] = useState<Comic[]>(initialComics)
//   const [page, setPage] = useState<number>(1)
//   const [total, setTotal] = useState<number>(initialTotal)
//   const LIMIT = 12

//   const handleChange = (_event: React.ChangeEvent<unknown>, value: number): void => {
//     setPage(value)
//   }

//   async function deleteCookie (): Promise<void> {
//     await fetch('/api/cookie')
//   }

//   useEffect(() => {
//     const fetchDataAndCleanUp = async (): Promise<void> => {
//       try {
//         const offset = LIMIT * (page - 1)
//         const response = await getComics(offset, LIMIT)
//         const marvelApiResponse: MarvelApiResponse<Comic[]> = {
//           code: 200,
//           status: 'OK',
//           data: {
//             results: response,
//             total: response.length
//           }
//         }
//         setComics(marvelApiResponse.data.results)
//         setTotal(marvelApiResponse.data.total)
//       } catch (error) {
//         console.error('Error fetching comics:', error)
//       }
//       try {
//         await deleteCookie()
//         localStorage.clear()
//       } catch (error) {
//         console.error('Error deleting cookie:', error)
//       }
//     }

//     fetchDataAndCleanUp().catch((error) => {
//       console.error('Error in fetchDataAndCleanUp:', error)
//     })
//   }, [page])

//   return (
//     <>
//       <Head>
//         <title>Inicio | DH MARVEL</title>
//         <meta name="description" content="Marvel Store Sitio Web" />
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
