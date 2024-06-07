import { generateAuthenticationString } from './marvel-auth.service'

const MARVEL_API_URL = 'https://gateway.marvel.com/v1/public'

const fetchApi = async (endpoint: string, urlParams?: URLSearchParams): Promise<any> => {
  const authString = generateAuthenticationString()
  const url = new URL(`${MARVEL_API_URL}/${endpoint}`)
  url.search = `${authString}&${urlParams?.toString() ?? ''}`

  try {
    const response = await fetch(url.toString())
    if (!response.ok) {
      throw new Error(`Error fetching ${endpoint}: ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error)
    throw error
  }
}

export const getComics = async (offset?: number, limit?: number): Promise<any> => {
  const params = new URLSearchParams()
  if (offset) params.set('offset', `${offset}`)
  if (limit) params.set('limit', `${limit}`)
  return await fetchApi('comics', params)
}

export const getComic = async (comicId: string): Promise<any> => {
  if (isNaN(Number(comicId))) {
    // Convertir comicId a número y luego verificar si es NaN
    throw new Error('Invalid comicId')
  }
  const data = await fetchApi(`comics/${comicId}`)
  return data.data.results[0] || null
}

export const getCharacter = async (characterId: string): Promise<any> => {
  if (isNaN(Number(characterId))) {
    // Convertir characterId a número y luego verificar si es NaN
    throw new Error('Invalid characterId')
  }
  const data = await fetchApi(`characters/${characterId}`)
  return data.data.results[0] || null
}
