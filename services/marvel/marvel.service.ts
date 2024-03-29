/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/*
* Usar la extensión better comments
! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
! original repo dh, quitando los errores que da eslint, pero se debe comentar estar import type { MarvelApiResponse } from '../services/marvel/marvel.service', en el archivo index.page.tsx, pero se rompe todo el archivo.
**/

import { generateAuthenticationString } from '../../services/marvel/marvel-auth.service'

const MARVEL_API_URL = process.env.MARVEL_API_URL

const fetchApi = async (endpoint: string, urlParams?: string) => {
  const authString = generateAuthenticationString()
  const url = `${MARVEL_API_URL}/${endpoint}?${authString}&${urlParams || ''}`
  const response = await fetch(url)
  return await response.json()
}

export const getComics = async (offset?: number, limit?: number) => {
  const params = new URLSearchParams()
  if (offset) params.set('offset', `${offset}`)
  if (limit) params.set('limit', `${limit}`)
  return await fetchApi('comics', params.toString())
}

export const getComic = async (comicId: number) => {
  const data = await fetchApi(`comics/${comicId}`)
  const results = data.data.results
  if (results.length > 0) {
    const comic = results[0]
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
  } else return null
}

export const getCharacters = async () => {
  const data = await fetchApi('characters')
  return data.data.results
}

export const getCharacter = async (characterId: number) => {
  const data = await fetchApi(`characters/${characterId}`)
  const results = data.data.results
  if (results.length > 0) return results[0]
  else return null
}

export const getCharacterByComic = async (comicId: number) => {
  const data = await fetchApi(`comics/${comicId}/characters`)
  return data.data.results
}
