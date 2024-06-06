import { type GetStaticProps } from 'next'
import { generateAuthenticationString } from '../../services/marvel/marvel-auth.service'

// Interfaz para un cómic
interface Comic {
  id: number;
  price?: number;
  oldPrice?: number;
  stock?: number;
}

// URL de la API de Marvel
const MARVEL_API_URL = 'https://gateway.marvel.com/v1/public'

// Función para generar la URL de la API
export const fetchApi = async (endpoint: string, urlParams?: string): Promise<any> => {
  const authString = generateAuthenticationString()
  const url = `${MARVEL_API_URL}/${endpoint}?${authString}&${urlParams ?? ''}`
  const response = await fetch(url)
  return await response.json()
}

// Función para obtener una lista de cómics
export const getComics = async (offset?: number, limit?: number): Promise<any> => {
  const params = new URLSearchParams()
  if (offset) params.set('offset', `${offset}`)
  if (limit) params.set('limit', `${limit}`)
  return await fetchApi('comics', params.toString())
}

// Función para obtener un cómic por ID
export const getComic = async (comicId: number): Promise<Comic | null> => {
  try {
    const data = await fetchApi(`comics/${comicId}`)
    if (data?.data?.results && data.data.results.length > 0) {
      const results = data.data.results
      const comic = results[0] as Comic
      if (`${comic.id}`.endsWith('0')) {
        comic.price = 48
        comic.oldPrice = 48
        comic.stock = 0
      } else {
        comic.price = 72
        comic.oldPrice = 87
        comic.stock = 2
      }
      return comic
    } else {
      return null
    }
  } catch (error) {
    console.error('Error fetching comic:', error)
    return null
  }
}


// Función para obtener un personaje por ID
export const getCharacter = async (characterId: number): Promise<any> => {
  const data = await fetchApi(`characters/${characterId}`)
  const results = data.data.results
  if (results.length > 0) {
    return results[0]
  } else {
    return null
  }
}

// getStaticProps para obtener las propiedades estáticas de la página
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const idParsed = parseInt(params?.id as string)
  const comic = await getComic(idParsed)
  return {
    props: {
      comic,
    },
  }
}

