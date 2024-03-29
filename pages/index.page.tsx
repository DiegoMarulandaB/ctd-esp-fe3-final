/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import type { NextPage } from 'next'
import Head from 'next/head'
import BodySingle from '../components/layouts/body/single/body-single'
import { getComics } from '../services/marvel/marvel.service'
import ResponsiveGrid from '../components/Grid'
import PaginationOutlined from '../components/Pagination'
import LayoutGeneral from '../components/layouts/layout-general'
import React, { useEffect, useState } from 'react'

const INITIAL_OFFSET = 0
const INITIAL_LIMIT = 12

export async function getServerSideProps () {
  const response = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
  return {
    props: {
      initialComics: response.data.results,
      limit: response.data.count,
      initialTotal: response.data.total
    }
  }
}

interface indexProps {
  initialComics: any
  initialTotal: number
}

const Index: NextPage<indexProps> = ({ initialComics, initialTotal }) => {
  const [comics, setComics] = useState(initialComics)
  const [page, setPage] = useState(1)
  const [total, settotal] = useState(initialTotal)
  const LIMIT = 12

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  async function deleteCookie () {
    await fetch('/api/cookie')
  }

  useEffect(() => {
    const offset = LIMIT * (page - 1)
    getComics(offset, LIMIT).then((response) => {
      setComics(response?.data?.results)
      settotal(response?.data?.total)
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
        <BodySingle title={''}>
          <PaginationOutlined count={Math.round(total / 12)} page={page} handleChange={handleChange} />
          <ResponsiveGrid data={comics} />
          <PaginationOutlined count={Math.round(total / 12)} page={page} handleChange={handleChange} />
        </BodySingle>
      </LayoutGeneral>
    </>
  )
}

export default Index
