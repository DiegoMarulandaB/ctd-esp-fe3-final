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

import { Box } from '@mui/material'
import { getCharacterByComic, getComic, getComics } from 'dh-marvel/services/marvel/marvel.service'
import { type GetStaticPaths, type GetStaticProps } from 'next'
import BodySingle from 'dh-marvel/components/layouts/body/single/body-single'
import CardComic from 'dh-marvel/components/Cards/CardComic'
import Head from 'next/head'
import LayoutGeneral from 'dh-marvel/components/layouts/layout-general'
import { type Comic, type Character } from 'dh-marvel/types' // Asumiendo que tengas los tipos Comic y Character definidos en tu aplicación

export const getStaticPaths: GetStaticPaths = async (): Promise<{
  paths: Array<{ params: { id: string } }>
  fallback: string
}> => {
  const response = await getComics()

  const paths = response.data.results.map(({ id }: { id: number }) => ({
    params: {
      id: id?.toString()
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({
  params
}: {
  params: { id: string }
}): Promise<{ props: { comic: Comic, characters: Character[] }, revalidate: number }> => {
  const id = parseInt(params?.id)
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

interface ComicDetailsProps {
  comic: Comic
  characters: Character[]
}

const ComicDetails = ({ comic, characters }: ComicDetailsProps): JSX.Element => {
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
