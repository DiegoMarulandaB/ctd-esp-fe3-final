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

//! bueno
export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
  const response: Comic[] = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
  const marvelApiResponse: MarvelApiResponse<Comic> = {
    code: 200,
    status: 'OK',
    data: {
      results: response, // Aquí debes eliminar los corchetes alrededor de `response`
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
        const response: Comic[] = await getComics(offset, LIMIT)
        const marvelApiResponse: MarvelApiResponse<Comic> = {
          code: 200,
          status: 'OK',
          data: {
            results: response, // Aquí debes eliminar los corchetes alrededor de `response`
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
