/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Box } from '@mui/material'
// import { getCharacterByComic, getComic, getComics } from 'dh-marvel/services/marvel/marvel.service'
// import { type GetStaticPaths, type GetStaticProps } from 'next'
// import BodySingle from 'dh-marvel/components/layouts/body/single/body-single'
// import CardComic from 'dh-marvel/components/Cards/CardComic'
// import Head from 'next/head'
// import LayoutGeneral from 'dh-marvel/components/layouts/layout-general'

// export const getStaticPaths: GetStaticPaths = async () => {
//   const response = await getComics()

//   const paths = response.data.results.map(({ id }: { id: any }) => ({
//     params: {
//       id: id?.toString()
//     }
//   }))

//   return {
//     paths,
//     fallback: 'blocking'
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const id = parseInt(params?.id as string)
//   const comic = await getComic(id)
//   const characters = await getCharacterByComic(id)

//   return {
//     props: {
//       comic,
//       characters
//     },
//     revalidate: 10
//   }
// }

// function ComicDetails ({ comic, characters }: { comic: any, characters: any }) {
//   return (
//     <>
//       <Head>
//         <title>{comic?.title} | DH MARVEL</title>
//         <meta name="description" content={`${comic?.title}: página detalle de cómic `} />
//       </Head>
//       <LayoutGeneral>
//         <Box sx={{ marginBottom: '1rem' }}>
//           <BodySingle title='Detalle cómic'>
//             <CardComic
//               title={comic?.title}
//               description={comic?.description}
//               image={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
//               id={comic?.id}
//               price={comic?.price}
//               oldPrice={comic?.oldPrice}
//               stock={comic?.stock}
//               characters={characters}
//             />
//           </BodySingle>
//         </Box>
//       </LayoutGeneral>
//     </>
//   )
// }

// export default ComicDetails

// refactor

/*
* Usar la extensión better comments
! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
*/

// import React from 'react'
// import { Box } from '@mui/material'
// import CardComic from '../../components/Cards/CardComic'
// import BodySingle from '../../components/layouts/body/single/body-single'
// import LayoutGeneral from '../../components/layouts/layout-general'
// import { getCharacterByComic, getComic, getComics } from '../../services/marvel/marvel.service'
// import { type GetStaticPaths, type GetStaticProps } from 'next'
// import Head from 'next/head'

// // export const getStaticPaths: GetStaticPaths = async () => {
// //   const response = await getComics()

// //   const paths = response.data.results.map(({ id }: { id: any }) => ({
// //     params: {
// //       id: id?.toString()
// //     }
// //   }))

// //   return {
// //     paths,
// //     fallback: 'blocking'
// //   }
// // }
// // export const getStaticPaths: GetStaticPaths = async () => {
// //   const response = await getComics()

// //   // const paths = response.results.map(({ id }: { id: number }) => ({
// //   //   // El tipo de id es number
// //   //   params: {
// //   //     id: id?.toString()
// //   //   }
// //   // }))

// //   const paths = response.data.results.map(({ id }: { id: number }) => ({
// //     params: {
// //       id: id?.toString()
// //     }
// //   }))

// export const getStaticPaths: GetStaticPaths = async () => {
//   const response = await getComics()

//   const paths = response.data.results.map(({ id }: { id: number }) => ({
//     params: {
//       id: id?.toString()
//     }
//   }))

//   return {
//     paths,
//     fallback: 'blocking'
//   }
// }

// //   return {
// //     paths,
// //     fallback: 'blocking'
// //   }
// // }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const id = parseInt(params?.id as string)
//   const comic = await getComic(id)
//   const characters = await getCharacterByComic(id)

//   return {
//     props: {
//       comic,
//       characters
//     },
//     revalidate: 10
//   }
// }

// function ComicDetails ({ comic, characters }: { comic: any, characters: any }): React.ReactNode {
//   return (
//     <>
//       <Head>
//         <title>{comic?.title} | DH MARVEL</title>
//         <meta name="description" content={`${comic?.title}: página detalle de cómic `} />
//       </Head>
//       <LayoutGeneral>
//         <Box sx={{ marginBottom: '1rem' }}>
//           <BodySingle title="Detalle cómic">
//             <CardComic
//               title={comic?.title}
//               description={comic?.description}
//               image={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
//               id={comic?.id}
//               price={comic?.price}
//               oldPrice={comic?.oldPrice}
//               stock={comic?.stock}
//               characters={characters}
//             />
//           </BodySingle>
//         </Box>
//       </LayoutGeneral>
//     </>
//   )
// }

// export default ComicDetails

import React from 'react'
import { Box } from '@mui/material'
import CardComic from '../../components/Cards/CardComic'
import BodySingle from '../../components/layouts/body/single/body-single'
import LayoutGeneral from '../../components/layouts/layout-general'
import { getCharacterByComic, getComic, getComics } from '../../services/marvel/marvel.service'
import { type GetStaticPaths, type GetStaticProps } from 'next'
import Head from 'next/head'

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await getComics()
    const paths = response.map(({ id }: { id: number }) => ({
      // Eliminar .data de response
      params: {
        id: id?.toString()
      }
    }))
    return {
      paths,
      fallback: 'blocking'
    }
  } catch (error) {
    console.error('Error fetching paths:', error)
    return {
      paths: [],
      fallback: 'blocking'
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = parseInt(params?.id as string)
  const comic = await getComic(id)
  const characters = await getCharacterByComic(id)

  return {
    props: {
      comic,
      characters
    },
    revalidate: 10
  }
}

function ComicDetails ({ comic, characters }: { comic: any, characters: any }): React.ReactNode {
  return (
    <>
      <Head>
        <title>{comic?.title} | DH MARVEL</title>
        <meta name="description" content={`${comic?.title}: página detalle de cómic `} />
      </Head>
      <LayoutGeneral>
        <Box sx={{ marginBottom: '1rem' }}>
          <BodySingle title="Detalle cómic">
            <CardComic
              title={comic?.title}
              description={comic?.description}
              image={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
              id={comic?.id}
              price={comic?.price}
              oldPrice={comic?.oldPrice}
              stock={comic?.stock}
              characters={characters}
            />
          </BodySingle>
        </Box>
      </LayoutGeneral>
    </>
  )
}

export default ComicDetails
