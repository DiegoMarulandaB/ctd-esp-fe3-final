//! refactor3 poner cuidado a este

// import { generateAuthenticationString } from '../../services/marvel/marvel-auth.service'

// const MARVEL_API_URL = process.env.NEXT_PUBLIC_MARVEL_API_URL

// const fetchApi = async (endpoint: string, urlParams?: string) => {
//   const authString = generateAuthenticationString()
//   // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
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

// refactor4

// import { generateAuthenticationString } from '../../services/marvel/marvel-auth.service'

// const MARVEL_API_URL: string = process.env.NEXT_PUBLIC_MARVEL_API_URL || ''

// const fetchApi = async (endpoint: string, urlParams?: string): Promise<any> => {
//   const authString: string = generateAuthenticationString()
//   const url: string = `${MARVEL_API_URL}/${endpoint}?${authString}&${urlParams || ''}`
//   const response = await fetch(url)
//   return await response.json()
// }

// export const getComics = async (offset?: number, limit?: number): Promise<any> => {
//   const params = new URLSearchParams()
//   if (offset !== undefined) params.set('offset', `${offset}`)
//   if (limit !== undefined) params.set('limit', `${limit}`)
//   return await fetchApi('comics', params.toString())
// }

// export const getComic = async (comicId: number): Promise<any | null> => {
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
//   } else {
//     return null
//   }
// }

// export const getCharacters = async (): Promise<any[]> => {
//   const data = await fetchApi('characters')
//   return data.data.results
// }

// export const getCharacter = async (characterId: number): Promise<any | null> => {
//   const data = await fetchApi(`characters/${characterId}`)
//   const results = data.data.results
//   if (results.length > 0) {
//     return results[0]
//   } else {
//     return null
//   }
// }

// export const getCharacterByComic = async (comicId: number): Promise<any[]> => {
//   const data = await fetchApi(`comics/${comicId}/characters`)
//   return data.data.results
// }

// refactor5

// import { generateAuthenticationString } from '../../services/marvel/marvel-auth.service'

// const MARVEL_API_URL: string = process.env.NEXT_PUBLIC_MARVEL_API_URL ?? ''

// const fetchApi = async (endpoint: string, urlParams?: string): Promise<any> => {
//   const authString: string = generateAuthenticationString()
//   const url: string = `${MARVEL_API_URL}/${endpoint}?${authString}&${urlParams ?? ''}`
//   const response = await fetch(url)
//   return await response.json()
// }

// export const getComics = async (offset?: number, limit?: number): Promise<any[]> => {
//   const params = new URLSearchParams()
//   if (offset !== undefined) params.set('offset', `${offset}`)
//   if (limit !== undefined) params.set('limit', `${limit}`)
//   return await fetchApi('comics', params.toString())
// }

// export const getComic = async (comicId: number): Promise<any | null> => {
//   const data = await fetchApi(`comics/${comicId}`)
//   const results = data?.data?.results
//   if (results && results.length > 0) {
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
//   } else {
//     return null
//   }
// }

// export const getCharacters = async (): Promise<any[]> => {
//   const data = await fetchApi('characters')
//   return data?.data?.results ?? []
// }

// export const getCharacter = async (characterId: number): Promise<any | null> => {
//   const data = await fetchApi(`characters/${characterId}`)
//   const results = data?.data?.results
//   if (results && results.length > 0) {
//     return results[0]
//   } else {
//     return null
//   }
// }

// export const getCharacterByComic = async (comicId: number): Promise<any[]> => {
//   const data = await fetchApi(`comics/${comicId}/characters`)
//   return data?.data?.results ?? []
// }

// refactor6

// import { generateAuthenticationString } from '../../services/marvel/marvel-auth.service'

// interface Comic {
//   id: number
//   price: number
//   oldPrice: number
//   stock: number
//   // Agrega otras propiedades si es necesario
// }

// const MARVEL_API_URL: string = process.env.NEXT_PUBLIC_MARVEL_API_URL ?? ''

// const fetchApi = async (endpoint: string, urlParams?: string): Promise<string> => {
//   const authString: string = generateAuthenticationString()
//   const url: string = `${MARVEL_API_URL}/${endpoint}?${authString}&${urlParams ?? ''}`
//   const response = await fetch(url)
//   return await response.json()
// }

// export const getComics = async (offset?: number, limit?: number): Promise<any[]> => {
//   const params = new URLSearchParams()
//   if (offset !== undefined) params.set('offset', `${offset}`)
//   if (limit !== undefined) params.set('limit', `${limit}`)
//   return await fetchApi('comics', params.toString())
// }

// !refactor34 8 errores
// import { generateAuthenticationString } from '../../services/marvel/marvel-auth.service'

// interface Comic {
//   id: number
//   title: string
//   price: number
//   oldPrice: number
//   stock: number
// }
// export interface MarvelApiResponse<T> {
//   code: number
//   status: string
//   data: {
//     results: T[]
//     total: number
//     // otras propiedades si es necesario
//   }
// }

// const MARVEL_API_URL: string = process.env.NEXT_PUBLIC_MARVEL_API_URL ?? ''

// const fetchApi = async (endpoint: string, urlParams?: string): Promise<any> => {
//   const authString: string = generateAuthenticationString()
//   const url: string = `${MARVEL_API_URL}/${endpoint}?${authString}&${urlParams ?? ''}`
//   const response = await fetch(url)
//   return await response.json()
// }

// // export const getComics = async (offset?: number, limit?: number): Promise<Comic[]> => {
// //   const params = new URLSearchParams()
// //   if (offset !== undefined) params.set('offset', `${offset}`)
// //   if (limit !== undefined) params.set('limit', `${limit}`)
// //   const data = await fetchApi('comics', params.toString())
// //   return data.results
// // }

// // // Ajusta las funciones restantes según la corrección realizada anteriormente en getComics.

// // export const getComic = async (comicId: number): Promise<Comic | null> => {
// //   const data = await fetchApi(`comics/${comicId}`)
// //   const results: Comic[] | undefined = data?.data?.results
// //   if (results && results.length > 0) {
// //     const comic = results[0]
// //     if (`${comic.id}`.endsWith('0')) {
// //       comic.price = 48
// //       comic.oldPrice = 48
// //       comic.stock = 0
// //     } else {
// //       comic.price = 72
// //       comic.oldPrice = 87
// //       comic.stock = 2
// //     }
// //     return comic
// //   } else {
// //     return null
// //   }
// // }

// export const getComics = async (offset?: number, limit?: number): Promise<Comic[]> => {
//   const params = new URLSearchParams()
//   if (offset !== undefined) params.set('offset', `${offset}`)
//   if (limit !== undefined) params.set('limit', `${limit}`)
//   const data: MarvelApiResponse<Comic> = await fetchApi('comics', params.toString())
//   return data.data.results
// }

// // export const getComic = async (comicId: number): Promise<Comic | null> => {
// //   const data: MarvelApiResponse<Comic> = await fetchApi(`comics/${comicId}`)
// //   const results = data.data.results
// //   if (results && results.length > 0) {
// //     const comic = results[0]
// //     // Hacer ajustes si es necesario
// //     return comic
// //   } else {
// //     return null
// //   }
// // }

// export const getComic = async (comicId: number): Promise<Comic | null> => {
//   const data: MarvelApiResponse<Comic> = await fetchApi(`comics/${comicId}`)
//   const results = data?.data?.results ?? null // Usa el operador de fusión opcional para evitar null/undefined
//   if (results && results.length > 0) {
//     const comic = results[0]
//     // Hacer ajustes si es necesario
//     return comic
//   } else {
//     return null
//   }
// }

// export const getCharacters = async (): Promise<any[]> => {
//   const data = await fetchApi('characters')
//   return data?.data?.results ?? []
// }

// export const getCharacter = async (characterId: number): Promise<any | null> => {
//   const data = await fetchApi(`characters/${characterId}`)
//   const results: any[] | undefined = data?.data?.results
//   if (results && results.length > 0) {
//     return results[0]
//   } else {
//     return null
//   }
// }
// export const getCharacterByComic = async (comicId: number): Promise<any[]> => {
//   const data: MarvelApiResponse<any> = await fetchApi(`comics/${comicId}/characters`)
//   return data.data.results
// }

// !hasta aqui

// export const getCharacterByComic = async (comicId: number): Promise<any[]> => {
//   const data = await fetchApi(`comics/${comicId}/characters`)
//   return data?.data?.results ?? []
// }

// !refactor 9-

import { generateAuthenticationString } from '../../services/marvel/marvel-auth.service'

interface Comic {
  id: number
  title: string
  price: number
  oldPrice: number
  stock: number
}
export interface MarvelApiResponse<T> {
  code: number
  status: string
  data: {
    results: T[]
    total: number
    // otras propiedades si es necesario
  }
}

const MARVEL_API_URL: string = process.env.NEXT_PUBLIC_MARVEL_API_URL ?? ''

const fetchApi = async (endpoint: string, urlParams?: string): Promise<any> => {
  const authString: string = generateAuthenticationString()
  const url: string = `${MARVEL_API_URL}/${endpoint}?${authString}&${urlParams ?? ''}`
  const response = await fetch(url)
  return await response.json()
}

export const getComics = async (offset?: number, limit?: number): Promise<Comic[]> => {
  const params = new URLSearchParams()
  if (offset !== undefined) params.set('offset', `${offset}`)
  if (limit !== undefined) params.set('limit', `${limit}`)
  const data: MarvelApiResponse<Comic> = await fetchApi('comics', params.toString())
  return data.data.results
}

export const getComic = async (comicId: number): Promise<Comic | null> => {
  try {
    const data: MarvelApiResponse<Comic[]> = await fetchApi(`comics/${comicId}`)
    const results = data?.data?.results ?? []
    if (results.length > 0) {
      const comic = results[0]
      // Hacer ajustes si es necesario
      return comic
    } else {
      return null
    }
  } catch (error) {
    console.error('Error fetching comic:', error)
    return null
  }
}

export const getCharacters = async (): Promise<any[]> => {
  const data = await fetchApi('characters')
  return data?.data?.results ?? []
}

export const getCharacter = async (characterId: number): Promise<any | null> => {
  const data = await fetchApi(`characters/${characterId}`)
  const results: any[] | undefined = data?.data?.results
  if (results && results.length > 0) {
    return results[0]
  } else {
    return null
  }
}

export const getCharacterByComic = async (comicId: number): Promise<any[]> => {
  const data: MarvelApiResponse<any> = await fetchApi(`comics/${comicId}/characters`)
  return data.data.results
}
