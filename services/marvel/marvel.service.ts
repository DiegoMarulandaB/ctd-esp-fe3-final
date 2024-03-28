/*
* Usar la extensión better comments
! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
! original repo dh, quitando los errores que da eslint, pero se debe comentar estar import type { MarvelApiResponse } from '../services/marvel/marvel.service', en el archivo index.page.tsx, pero se rompe todo el archivo.
**/
// import { generateAuthenticationString } from '../../services/marvel/marvel-auth.service'

// const MARVEL_API_URL = process.env.NEXT_PUBLIC_MARVEL_API_URL

// const fetchApi = async (endpoint: string, urlParams?: string) => {
//   const authString = generateAuthenticationString()
//   const url = `${MARVEL_API_URL}/${endpoint}?${authString}&${urlParams || ''}`
//   const response = await fetch(url)
//   return await response.json()
// }

// export const getComics = async (offset?: number, limit?: number) => {
//   const params = new URLSearchParams()
//   if (offset) params.set('offset', `${offset}`)
//   if (limit) params.set('limit', `${limit}`)
//   return await fetchApi('comics', params.toString())
// }

// export const getComic = async (comicId: number) => {
//   const data = await fetchApi(`comics/${comicId}`)
//   const results = data.data.results
//   if (results.length > 0) {
//     const comic = results[0]
//     if (`${comic.id}`.endsWith('0')) {
//       comic.price = 48
//       comic.oldPrice = 48
//       comic.stock = 0
//     } else {
//       comic.price = 72
//       comic.oldPrice = 87
//       comic.stock = 2
//     }
//     return comic
//   } else return null
// }

// export const getCharacters = async () => {
//   const data = await fetchApi('characters')
//   return data.data.results
// }

// export const getCharacter = async (characterId: number) => {
//   const data = await fetchApi(`characters/${characterId}`)
//   const results = data.data.results
//   if (results.length > 0) return results[0]
//   else return null
// }

// export const getCharacterByComic = async (comicId: number) => {
//   const data = await fetchApi(`comics/${comicId}/characters`)
//   return data.data.results
// }

/*
 !Usar la extensión better comments
 ! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
 ! error linea 104 const response = await fetch(url)
**/

import { generateAuthenticationString } from '../../services/marvel/marvel-auth.service'

export interface Comic {
  id: number
  title: string
  price: number
  oldPrice: number
  stock: number
  images: string
  thumbnail: {
    path: string
    extension: string
  }
}

export interface Character {
  id: number
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
}

export interface MarvelApiResponse<T> {
  code: number
  status: string
  data: {
    results: T[]
    total: number
  }
}

const MARVEL_API_URL: string = process.env.NEXT_PUBLIC_MARVEL_API_URL ?? ''

const fetchApi = async (endpoint: string, urlParams?: string): Promise<MarvelApiResponse<Comic | Character>> => {
  const authString: string = generateAuthenticationString()
  const url: string = `${MARVEL_API_URL}/${endpoint}?${authString}&${urlParams ?? ''}`
  const response = await fetch(url)
  const responseData = await response.json()
  return responseData
}

export const getComics = async (offset?: number, limit?: number): Promise<Comic[]> => {
  const params = new URLSearchParams()
  if (offset !== undefined) params.set('offset', `${offset}`)
  if (limit !== undefined) params.set('limit', `${limit}`)
  const data: MarvelApiResponse<Comic | Character> = await fetchApi('comics', params.toString())
  return data.data.results.filter((result): result is Comic => 'title' in result)
}

export const getComic = async (comicId: number): Promise<Comic | null> => {
  const data = await fetchApi(`comics/${comicId}`)
  const results = data.data.results

  if (results.length > 0) {
    const comic = results[0]
    if ('price' in comic && 'oldPrice' in comic && 'stock' in comic) {
      // Si las propiedades están presentes, entonces sabemos que es un Comic
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
  } else {
    return null
  }
}

export const getCharacters = async (): Promise<Character[]> => {
  const data = await fetchApi('characters')
  return data.data.results.filter((result): result is Character => 'name' in result)
}
export const getCharacter = async (characterId: number): Promise<Character | null> => {
  const data = await fetchApi(`characters/${characterId}`)
  const results = data?.data?.results[0]

  if (results != null && 'name' in results) {
    return results
  } else {
    return null
  }
}

export const getCharacterByComic = async (comicId: number): Promise<Character[]> => {
  const data: MarvelApiResponse<Comic | Character> = await fetchApi(`comics/${comicId}/characters`)
  return data.data.results.filter((result): result is Character => 'name' in result) // Filtramos solo los personajes
}

/*
* Usar la extensión better comments
! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
! error  const response = await fetch(url) , linea 213
**/

// import { generateAuthenticationString } from '../../services/marvel/marvel-auth.service'

// export interface Comic {
//   id: number
//   title: string
//   price: number
//   oldPrice: number
//   stock: number
//   images: string
//   thumbnail: {
//     path: string
//     extension: string
//   }
// }

// export interface Character {
//   id: number
//   name: string
//   description: string
//   thumbnail: {
//     path: string
//     extension: string
//   }
// }

// export interface MarvelApiResponse<T> {
//   code: number
//   status: string
//   data: {
//     results: T[]
//     total: number
//   }
// }

// const MARVEL_API_URL = process.env.NEXT_PUBLIC_MARVEL_API_URL

// const fetchApi = async (endpoint: string, urlParams?: string): Promise<MarvelApiResponse<Comic | Character>> => {
//   const authString: string = generateAuthenticationString()
//   let url: string = `${MARVEL_API_URL}/${endpoint}?${authString}`

//   if (urlParams !== undefined) {
//     url += `&${urlParams}`
//   }

//   const response = await fetch(url)

//   if (!response.ok) {
//     throw new Error(`Failed to fetch data from ${url}`)
//   }

//   const responseData = await response.json()
//   return responseData
// }

// export const getComics = async (offset?: number, limit?: number): Promise<Comic[]> => {
//   const params = new URLSearchParams()

//   if (offset !== undefined) {
//     params.set('offset', `${offset}`)
//   }

//   if (limit !== undefined) {
//     params.set('limit', `${limit}`)
//   }

//   const data: MarvelApiResponse<Comic | Character> = await fetchApi('comics', params.toString())
//   return data.data.results.filter((result): result is Comic => 'title' in result)
// }

// export const getComic = async (comicId: number): Promise<Comic | null> => {
//   const data = await fetchApi(`comics/${comicId}`)
//   const results = data.data.results

//   if (results.length > 0) {
//     const comic = results[0]
//     if ('price' in comic && 'oldPrice' in comic && 'stock' in comic) {
//       // Si las propiedades están presentes, entonces sabemos que es un Comic
//       if (`${comic.id}`.endsWith('0')) {
//         comic.price = 48
//         comic.oldPrice = 48
//         comic.stock = 0
//       } else {
//         comic.price = 72
//         comic.oldPrice = 87
//         comic.stock = 2
//       }
//       return comic
//     } else {
//       // De lo contrario, no es un Comic válido, devolvemos null o lanzamos un error según el caso
//       return null
//     }
//   } else {
//     return null
//   }
// }

// export const getCharacters = async (): Promise<Character[]> => {
//   const data = await fetchApi('characters')
//   return data.data.results.filter((result): result is Character => 'name' in result)
// }
// export const getCharacter = async (characterId: number): Promise<Character | null> => {
//   const data = await fetchApi(`characters/${characterId}`)
//   const results = data?.data?.results[0]

//   if (results != null && 'name' in results) {
//     return results
//   } else {
//     return null
//   }
// }

// export const getCharacterByComic = async (comicId: number): Promise<Character[]> => {
//   const data: MarvelApiResponse<Comic | Character> = await fetchApi(`comics/${comicId}/characters`)
//   return data.data.results.filter((result): result is Character => 'name' in result) // Filtramos solo los personajes
// }
