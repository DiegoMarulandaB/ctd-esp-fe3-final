// import { Box, Grid, Stack } from '@mui/material'
// import { getComic } from 'dh-marvel/services/marvel/marvel.service'
// import { useRouter } from 'next/router'
// import BodySingle from 'dh-marvel/components/layouts/body/single/body-single'
// import CardCheckout from 'dh-marvel/components/Cards/CardCheckout'
// import Head from 'next/head'
// import LayoutCheckout from 'dh-marvel/components/layouts/layout-checkout'
// import React, { useEffect, useState } from 'react'
// import Stepper from 'dh-marvel/components/Form/Stepper'

// function Checkout () {
//   const router = useRouter()
//   const { comic } = router.query
//   const [comicData, setComicData] = useState<any>()

//   useEffect(() => {
//     if (comic) {
//       const id = parseInt(comic as string)
//       getComic(id).then((data: any) => {
//         setComicData(data)
//       })
//     } else {
//       router.push('/')
//     }
//   }, [comic, router])

//   return (
//     <>
//       <Head>
//         <title>Checkout | DH MARVEL</title>
//       </Head>
//       <LayoutCheckout>
//         <BodySingle title='Checkout'>
//           <Box sx={{ padding: { xs: '20px', sm: '20px' } }} display={'flex'} justifyContent={'center'}>
//             <Stack
//               direction={{ sm: 'column', md: 'row-reverse' }}
//               spacing={{ xs: 5, sm: 8, md: 8, xl: 20 }}
//               alignItems={'center'}
//             >
//               <CardCheckout
//                 title={comicData?.title}
//                 image={`${comicData?.thumbnail?.path}.${comicData?.thumbnail?.extension}`}
//                 price={comicData?.price}
//                 id={comicData?.id}
//               />
//               <Stepper
//                 title={comicData?.title}
//                 image={`${comicData?.images[0]?.path}.${comicData?.images[0]?.extension}`}
//                 price={comicData?.price}
//               />
//             </Stack>
//           </Box>
//         </BodySingle>
//       </LayoutCheckout>
//     </>
//   )
// }

// export default Checkout

// refactor

import { Box, Stack } from '@mui/material'
import { getComic } from 'dh-marvel/services/marvel/marvel.service'
import { useRouter } from 'next/router'
import BodySingle from 'dh-marvel/components/layouts/body/single/body-single'
import CardCheckout from 'dh-marvel/components/Cards/CardCheckout'
import Head from 'next/head'
import LayoutCheckout from 'dh-marvel/components/layouts/layout-checkout'
import React, { useEffect, useState } from 'react'
import Stepper from 'dh-marvel/components/Form/Stepper'

function Checkout (): JSX.Element {
  const router = useRouter()
  const { comic } = router.query
  const [comicData, setComicData] = useState<any>()

  useEffect(() => {
    if (comic) {
      const id = parseInt(comic as string)
      getComic(id)
        .then((data: any) => {
          setComicData(data)
        })
        .catch((error: any) => {
          console.error('Error fetching comic:', error)
          // Handle the error as needed, for example:
          // setComicData(null)
        })
    } else {
      router.push('/')
    }
  }, [comic, router])

  return (
    <>
      <Head>
        <title>Checkout | DH MARVEL</title>
      </Head>
      <LayoutCheckout>
        <BodySingle title="Checkout">
          <Box sx={{ padding: { xs: '20px', sm: '20px' } }} display={'flex'} justifyContent={'center'}>
            <Stack
              direction={{ sm: 'column', md: 'row-reverse' }}
              spacing={{ xs: 5, sm: 8, md: 8, xl: 20 }}
              alignItems={'center'}
            >
              <CardCheckout
                title={comicData?.title}
                image={`${comicData?.thumbnail?.path}.${comicData?.thumbnail?.extension}`}
                price={comicData?.price}
                id={comicData?.id}
              />
              <Stepper
                title={comicData?.title}
                image={`${comicData?.images[0]?.path}.${comicData?.images[0]?.extension}`}
                price={comicData?.price}
              />
            </Stack>
          </Box>
        </BodySingle>
      </LayoutCheckout>
    </>
  )
}

export default Checkout
