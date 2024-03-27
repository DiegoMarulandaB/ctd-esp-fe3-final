/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/*
* Usar la extensión better comments
! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
*/

import { Box, Stack } from '@mui/material'
import CardCheckout from '../../components/Cards/CardCheckout'
import Stepper from '../../components/Form/Stepper'
import BodySingle from '../../components/layouts/body/single/body-single'
import LayoutCheckout from '../../components/layouts/layout-checkout'
import { getComic, type Comic } from '../../services/marvel/marvel.service'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function Checkout (): JSX.Element {
  const router = useRouter()
  const { comic } = router.query
  const [comicData, setComicData] = useState<Comic | null>(null) // Cambio en el tipo de estado

  useEffect(() => {
    if (comic !== undefined && comic !== null) {
      const id = parseInt(comic as any)
      getComic(id).then((data: Comic | null) => {
        // Cambio en el tipo del argumento
        if (data !== null) {
          setComicData(data)
        } else {
          // Manejar el caso de que no se encuentre el cómic
          router.push('/')
        }
      })
    } else {
      router.push('/')
    }
  }, [comic, router])

  // Verificación adicional para evitar errores al acceder a propiedades de comicData cuando es null
  if (comicData === null) {
    return <div>Loading...</div>
  }

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
                title={comicData.title ?? ''}
                images={`${comicData.thumbnail?.path}.${comicData.thumbnail?.extension}`}
                price={comicData.price ?? 0}
                id={comicData.id ?? 0}
              />
              <Stepper
                title={comicData.title ?? ''}
                image={`${comicData.thumbnail?.path}.${comicData.thumbnail?.extension}`}
                price={comicData.price ?? 0}
              />
            </Stack>
          </Box>
        </BodySingle>
      </LayoutCheckout>
    </>
  )
}

export default Checkout
