// import React from 'react'
// import LayoutGeneral from 'dh-marvel/components/layouts/layout-general'
// import Head from 'next/head'
// import CardCharacter from 'dh-marvel/components/Cards/CardCharacter'
// import BodySingle from 'dh-marvel/components/layouts/body/single/body-single'
// import { type GetStaticPaths, type GetStaticProps } from 'next'
// import { getCharacter, getCharacters } from 'dh-marvel/services/marvel/marvel.service'
// import { Box } from '@mui/material'

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
//         <Box sx={{ margin: '1rem', width: '400' }} >
//           <BodySingle title='Detalle personaje'>
//             <CardCharacter
//               name={character?.name}
//               description={character?.description}
//               image={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
//               id={character?.id}
//             />
//           </BodySingle>
//         </Box >
//       </LayoutGeneral>
//     </>
//   )
// }

// export default CharacterDetails

// refactor

/*
* Usar la extensión better comments
! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
*/

import React from 'react'
import LayoutGeneral from '../../components/layouts/layout-general'
import Head from 'next/head'
import CardCharacter from '../../components/Cards/CardCharacter'
import BodySingle from '../../components/layouts/body/single/body-single'
import { type GetStaticPaths, type GetStaticProps } from 'next'
import { getCharacter, getCharacters } from '../../services/marvel/marvel.service'
import { Box } from '@mui/material'

interface Character {
  id: number
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data: Character[] = await getCharacters()

  const paths = data.map((character) => {
    return { params: { id: character.id.toString() } }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = parseInt(params?.id as string)
  const character: Character = await getCharacter(id)

  return {
    props: {
      character
    },
    revalidate: 10
  }
}

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

export default CharacterDetails
