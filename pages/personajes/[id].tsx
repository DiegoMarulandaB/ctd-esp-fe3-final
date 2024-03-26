/*
* Usar la extensión better comments
! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
*/

// refactor
// import React from 'react'
// import { Box } from '@mui/material'
// import CardCharacter from '../../components/Cards/CardCharacter'
// import BodySingle from '../../components/layouts/body/single/body-single'
// import LayoutGeneral from '../../components/layouts/layout-general'
// import { getCharacter, getCharacters } from '../../services/marvel/marvel.service'
// import { type GetStaticPaths, type GetStaticProps } from 'next'
// import Head from 'next/head'
// // import React, { type ReactNode } from 'react'

// export const getStaticPaths: GetStaticPaths = async () => {
//   const data: any = await getCharacters()

//   const paths = data.map((character: any) => {
//     return { params: { id: character.id.toString() } }
//   })

//   return {
//     paths,
//     fallback: true
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const id = parseInt(params?.id as string)
//   const character = await getCharacter(id)

//   return {
//     props: {
//       character
//     },
//     revalidate: 10
//   }
// }

// function CharacterDetails ({ character }: { character: any }) {
//   return (
//     <>
//       <Head>
//         <title>{character?.name} | DH MARVEL</title>
//         <meta name="description" content={`${character?.name}: página detalle de personaje de cómic`} />
//       </Head>
//       <LayoutGeneral>
//         <Box sx={{ margin: '1rem', width: '400' }}>
//           <BodySingle title="Detalle personaje">
//             <CardCharacter
//               name={character?.name}
//               description={character?.description}
//               image={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
//               id={character?.id}
//             />
//           </BodySingle>
//         </Box>
//       </LayoutGeneral>
//     </>
//   )
// }

// export default CharacterDetails

// !refactor con tres errores en any
// import React from 'react'
// import { Box } from '@mui/material'
// import CardCharacter from '../../components/Cards/CardCharacter'
// import BodySingle from '../../components/layouts/body/single/body-single'
// import LayoutGeneral from '../../components/layouts/layout-general'
// import { getCharacter, getCharacters } from '../../services/marvel/marvel.service'
// import { type GetStaticPaths, type GetStaticProps } from 'next'
// import Head from 'next/head'

// export const getStaticPaths: GetStaticPaths = async () => {
//   const data: any = await getCharacters()

//   const paths = data.map((character: any) => {
//     return { params: { id: character.id.toString() } }
//   })

//   return {
//     paths,
//     fallback: true
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const id = parseInt(params?.id as string)
//   const character = await getCharacter(id)

//   return {
//     props: {
//       character
//     },
//     revalidate: 10
//   }
// }

// function CharacterDetails ({ character }: { character: any }): React.ReactNode {
//   return (
//     <>
//       <Head>
//         <title>{character?.name} | DH MARVEL</title>
//         <meta name="description" content={`${character?.name}: página detalle de personaje de cómic`} />
//       </Head>
//       <LayoutGeneral>
//         <Box sx={{ margin: '1rem', width: '400' }}>
//           <BodySingle title="Detalle personaje">
//             <CardCharacter
//               name={character?.name}
//               description={character?.description}
//               image={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
//               id={character?.id}
//             />
//           </BodySingle>
//         </Box>
//       </LayoutGeneral>
//     </>
//   )
// }

// export default CharacterDetails

//! refactor data y character

// import React from 'react'
// import { Box } from '@mui/material'
// import CardCharacter from '../../components/Cards/CardCharacter'
// import BodySingle from '../../components/layouts/body/single/body-single'
// import LayoutGeneral from '../../components/layouts/layout-general'
// import { getCharacter, getCharacters } from '../../services/marvel/marvel.service'
// import { type GetStaticPaths, type GetStaticProps } from 'next'
// import Head from 'next/head'

// //! refactor
// // interface Character {
// //   id: number
// //   name: string
// //   description: string
// //   thumbnail: {
// //     path: string
// //     extension: string
// //   }
// // }

// //! refactor chat

// interface Character {
//   id: number
//   name: string
//   description: string
//   thumbnail: {
//     path: string
//     extension: string
//   }
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const data: Character[] = await getCharacters()

//   const paths = data.map((character) => {
//     return { params: { id: character.id.toString() } }
//   })

//   return {
//     paths,
//     fallback: true
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const id = parseInt(params?.id as string)
//   const character: Character | null = await getCharacter(id)

//   return {
//     props: {
//       character
//     },
//     revalidate: 10
//   }
// }

// function CharacterDetails ({ character }: { character: Character | null }): React.ReactNode {
//   if (!character) return null

//   return (
//     <>
//       <Head>
//         <title>{character.name} | DH MARVEL</title>
//         <meta name="description" content={`${character.name}: página detalle de personaje de cómic`} />
//       </Head>
//       <LayoutGeneral>
//         <Box sx={{ margin: '1rem', width: '400' }}>
//           <BodySingle title="Detalle personaje">
//             <CardCharacter
//               name={character.name}
//               description={character.description}
//               image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
//               id={character.id}
//             />
//           </BodySingle>
//         </Box>
//       </LayoutGeneral>
//     </>
//   )
// }

// export default CharacterDetails

//! refactor chatt con 3 ERRORES ERRORES

// import React from 'react'
// import { Box } from '@mui/material'
// import CardCharacter from '../../components/Cards/CardCharacter'
// import BodySingle from '../../components/layouts/body/single/body-single'
// import LayoutGeneral from '../../components/layouts/layout-general'
// import { getCharacter, getCharacters } from '../../services/marvel/marvel.service'
// import { type GetStaticPaths, type GetStaticProps } from 'next'
// import Head from 'next/head'

// interface Character {
//   id: number
//   name: string
//   description: string
//   thumbnail: {
//     path: string
//     extension: string
//   }
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const data: Character[] = await getCharacters()

//   const paths = data.map((character) => {
//     return { params: { id: character.id.toString() } }
//   })

//   return {
//     paths,
//     fallback: true
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const id = parseInt(params?.id as string)
//   const character: Character | null = await getCharacter(id)

//   return {
//     props: {
//       character
//     },
//     revalidate: 10
//   }
// }

// function CharacterDetails ({ character }: { character: Character | null }): React.ReactNode {
//   if (!character) return null

//   return (
//     <>
//       <Head>
//         <title>{character.name} | DH MARVEL</title>
//         <meta name="description" content={`${character.name}: página detalle de personaje de cómic`} />
//       </Head>
//       <LayoutGeneral>
//         <Box sx={{ margin: '1rem', width: '400' }}>
//           <BodySingle title="Detalle personaje">
//             <CardCharacter
//               name={character.name}
//               description={character.description}
//               image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
//               id={character.id}
//             />
//           </BodySingle>
//         </Box>
//       </LayoutGeneral>
//     </>
//   )
// }

// export default CharacterDetails

// !REFACTOR
// import React from 'react'
// import { Box } from '@mui/material'
// import CardCharacter from '../../components/Cards/CardCharacter'
// import BodySingle from '../../components/layouts/body/single/body-single'
// import LayoutGeneral from '../../components/layouts/layout-general'
// import { getCharacter, getCharacters } from '../../services/marvel/marvel.service'
// import { type GetStaticPaths, type GetStaticProps } from 'next'
// import Head from 'next/head'

// interface Character {
//   id: number
//   name: string
//   description: string
//   thumbnail: {
//     path: string
//     extension: string
//   }
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const data: Character[] = await getCharacters()

//   const paths = data.map((character) => {
//     return { params: { id: character.id.toString() } }
//   })

//   return {
//     paths,
//     fallback: true
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const id = parseInt(params?.id as string)
//   const character: Character | null = await getCharacter(id)

//   return {
//     props: {
//       character
//     },
//     revalidate: 10
//   }
// }

// function CharacterDetails ({ character }: { character: Character | null }): React.ReactNode {
//   if (!character) return null

//   return (
//     <>
//       <Head>
//         <title>{character.name} | DH MARVEL</title>
//         <meta name="description" content={`${character.name}: página detalle de personaje de cómic`} />
//       </Head>
//       <LayoutGeneral>
//         <Box sx={{ margin: '1rem', width: '400' }}>
//           <BodySingle title="Detalle personaje">
//             <CardCharacter
//               name={character.name}
//               description={character.description}
//               image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
//               id={character.id}
//             />
//           </BodySingle>
//         </Box>
//       </LayoutGeneral>
//     </>
//   )
// }

// export default CharacterDetails

//! codeRami con type character

// import { Box } from '@mui/material'
// import CardCharacter from '../../components/Cards/CardCharacter'
// import BodySingle from '../../components/layouts/body/single/body-single'
// import LayoutGeneral from '../../components/layouts/layout-general'
// import { getCharacter, getCharacters, type Character } from '../../services/marvel/marvel.service'
// import { type GetStaticPaths, type GetStaticProps } from 'next'
// import Head from 'next/head'
// import React from 'react'
// // import { type Character } from './character'

// export const getStaticPaths: GetStaticPaths = async () => {
//   // const data: any = await getCharacters()
//   const data: Character[] = await getCharacters()

//   // const paths = data.map((character: any) => {
//   //   return { params: { id: character.id.toString() } }
//   // })

//   const paths = data.map((character: Character) => {
//     return { params: { id: character.id.toString() } }
//   })

//   return {
//     paths,
//     fallback: true
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const id = parseInt(params?.id as string)
//   const character = await getCharacter(id)

//   return {
//     props: {
//       character
//     },
//     revalidate: 10
//   }
// }

// // function CharacterDetails ({ character }: { character: any }) {
// //   return (
// //     <>
// //       <Head>
// //         <title>{character?.name} | DH MARVEL</title>
// //         <meta name="description" content={`${character?.name}: página detalle de personaje de cómic`} />
// //       </Head>
// //       <LayoutGeneral>
// //         <Box sx={{ margin: '1rem', width: '400' }}>
// //           <BodySingle title="Detalle personaje">
// //             <CardCharacter
// //               name={character?.name}
// //               description={character?.description}
// //               image={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
// //               id={character?.id}
// //             />
// //           </BodySingle>
// //         </Box>
// //       </LayoutGeneral>
// //     </>
// //   )
// // }

// function CharacterDetails ({ character }: { character: Character }) {
//   return (
//     <>
//       <Head>
//         <title>{character?.name} | DH MARVEL</title>
//         <meta name="description" content={`${character?.name}: página detalle de personaje de cómic`} />
//       </Head>
//       <LayoutGeneral>
//         <Box sx={{ margin: '1rem', width: '400' }}>
//           <BodySingle title="Detalle personaje">
//             <CardCharacter
//               name={character?.name}
//               description={character?.description}
//               image={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
//               id={character?.id}
//             />
//           </BodySingle>
//         </Box>
//       </LayoutGeneral>
//     </>
//   )
// }

// export default CharacterDetails

//! REFACTOR

// character-details.tsx
import { Box } from '@mui/material'
import CardCharacter from '../../components/Cards/CardCharacter'
import BodySingle from '../../components/layouts/body/single/body-single'
import LayoutGeneral from '../../components/layouts/layout-general'
import { getCharacter, getCharacters, type Character } from '../../services/marvel/marvel.service'
import { type GetStaticPaths, type GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'

function CharacterDetails ({ character }: { character: Character }): JSX.Element {
  return (
    <>
      <Head>
        <title>{character?.name} | DH MARVEL</title>
        <meta name="description" content={`${character?.name}: página detalle de personaje de cómic`} />
      </Head>
      <LayoutGeneral>
        <Box sx={{ margin: '1rem', width: '400' }}>
          <BodySingle title="Detalle personaje">
            <CardCharacter
              name={character?.name}
              description={character?.description}
              image={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
              id={character?.id}
            />
          </BodySingle>
        </Box>
      </LayoutGeneral>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data: Character[] = await getCharacters()

  const paths = data.map((character: Character) => {
    return { params: { id: character.id.toString() } }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = parseInt(params?.id as string)
  const character = await getCharacter(id)

  return {
    props: {
      character
    },
    revalidate: 10
  }
}

export default CharacterDetails
