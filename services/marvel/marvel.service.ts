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

// !refactor 9-con3 ERRORES NO MAS

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

// //! any
// // const fetchApi = async (endpoint: string, urlParams?: string): Promise<Comic> => {
// //   const authString: string = generateAuthenticationString()
// //   const url: string = `${MARVEL_API_URL}/${endpoint}?${authString}&${urlParams ?? ''}`
// //   const response = await fetch(url)
// //   return await response.json()
// // }

// //! chat
// const fetchApi = async (endpoint: string, urlParams?: string): Promise<MarvelApiResponse<Comic>> => {
//   const authString: string = generateAuthenticationString()
//   const url: string = `${MARVEL_API_URL}/${endpoint}?${authString}&${urlParams ?? ''}`
//   const response = await fetch(url)
//   const responseData = await response.json()
//   return responseData // Assuming the API response already conforms to MarvelApiResponse<Comic>
// }

// export const getComics = async (offset?: number, limit?: number): Promise<Comic[]> => {
//   const params = new URLSearchParams()
//   if (offset !== undefined) params.set('offset', `${offset}`)
//   if (limit !== undefined) params.set('limit', `${limit}`)
//   const data: MarvelApiResponse<Comic> = await fetchApi('comics', params.toString())
//   return data.data.results
// }

// // export const getComic = async (comicId: number): Promise<Comic | null> => {
// //   try {
// //     const data: MarvelApiResponse<Comic[]> = await fetchApi(`comics/${comicId}`)
// //     const results = data?.data?.results ?? []
// //     if (results.length > 0) {
// //       const comic = results[0]
// //       // Hacer ajustes si es necesario
// //       return comic
// //     } else {
// //       return null
// //     }
// //   } catch (error) {
// //     console.error('Error fetching comic:', error)
// //     return null
// //   }
// // }

// //! rami
// // export const getComic = async (comicId: number) => {
// //   const data = await fetchApi(`comics/${comicId}`)
// //   const results = data.data.results
// //   if (results.length > 0) {
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
// //   } else return null
// // }

// //! ramiconchat
// export const getComic = async (comicId: number): Promise<Comic | null> => {
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

// // export const getComic = async (comicId: number): Promise<Comic | null> => {
// //   try {
// //     const data: MarvelApiResponse<Comic[]> = await fetchApi(`comics/${comicId}`)
// //     const results = data?.data?.results ?? []
// //     if (results.length > 0) {
// //       // const comic = results[0] as Comic
// //       const comic = results.length > 0 ? results[0] : null
// //       return comic
// //     } else {
// //       return null
// //     }
// //   } catch (error) {
// //     console.error('Error fetching comic:', error)
// //     return null
// //   }
// // }

// //! buenamaso
// // export const getComic = async (comicId: number): Promise<Comic | null> => {
// //   try {
// //     const data: MarvelApiResponse<Comic[]> = await fetchApi(`comics/${comicId}`)
// //     const results = data?.data?.results ?? []
// //     if (results.length > 0) {
// //       const comic = results[0] // Seleccionamos el primer cómic
// //       return comic
// //     } else {
// //       return null
// //     }
// //   } catch (error) {
// //     console.error('Error fetching comic:', error)
// //     return null
// //   }
// // }
// // export const getComics = async (offset?: number, limit?: number): Promise<MarvelApiResponse<Comic>> => {
// //   const params = new URLSearchParams()
// //   if (offset !== undefined) params.set('offset', `${offset}`)
// //   if (limit !== undefined) params.set('limit', `${limit}`)
// //   const data: MarvelApiResponse<Comic> = await fetchApi('comics', params.toString())
// //   return data
// // }

// //! amy original
// // export const getCharacters = async (): Promise<Comic[]> => {
// //   const data = await fetchApi('characters')
// //   return data?.data?.results ?? []
// // }

// //! refactor dado para corregir id
// export const getCharacters = async (): Promise<Character[]> => {
//   const data = await fetchApi('characters')
//   return data?.data?.results ?? []
// }

// //! any
// // export const getCharacter = async (characterId: number): Promise<Comic | null> => {
// //   const data = await fetchApi(`characters/${characterId}`)
// //   const results: Comic[] | undefined = data?.data?.results
// //   if (results && results.length > 0) {
// //     return results[0]
// //   } else {
// //     return null
// //   }
// // }

// //! chat correcion if pero con comic
// // export const getCharacter = async (characterId: number): Promise<Comic | null> => {
// //   const data = await fetchApi(`characters/${characterId}`)
// //   const results: Comic[] | undefined = data?.data?.results
// //   if (results != null && results.length > 0) {
// //     return results[0]
// //   } else {
// //     return null
// //   }
// // }

// //! refactor para corregir errores en id
// export const getCharacter = async (characterId: number): Promise<Character | null> => {
//   const data = await fetchApi(`characters/${characterId}`)
//   const results: Character[] | undefined = data?.data?.results
//   if (results != null && results.length > 0) {
//     return results[0]
//   } else {
//     return null
//   }
// }

// //! any
// export const getCharacterByComic = async (comicId: number): Promise<Comic[]> => {
//   const data: MarvelApiResponse<Comic> = await fetchApi(`comics/${comicId}/characters`)
//   return data.data.results
// }

//! REFACTOR

// import { generateAuthenticationString } from '../../services/marvel/marvel-auth.service'

// interface Comic {
//   id: number
//   title: string
//   price: number
//   oldPrice: number
//   stock: number
// }

// interface Character {
//   id: number
//   name: string
//   // otras propiedades relevantes
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

// const fetchApi = async (endpoint: string, urlParams?: string): Promise<MarvelApiResponse<Comic | Character>> => {
//   const authString: string = generateAuthenticationString()
//   const url: string = `${MARVEL_API_URL}/${endpoint}?${authString}&${urlParams ?? ''}`
//   const response = await fetch(url)
//   const responseData = await response.json()
//   return responseData // Assuming the API response already conforms to MarvelApiResponse<Comic> or MarvelApiResponse<Character>
// }

// // export const getComics = async (offset?: number, limit?: number): Promise<Comic[]> => {
// //   const params = new URLSearchParams()
// //   if (offset !== undefined) params.set('offset', `${offset}`)
// //   if (limit !== undefined) params.set('limit', `${limit}`)
// //   const data: MarvelApiResponse<Comic> = await fetchApi('comics', params.toString())
// //   return data.data.results
// // }

// // export const getCharacters = async (): Promise<Character[]> => {
// //   const data = await fetchApi('characters')
// //   return data.data.results
// // }
// export const getComics = async (offset?: number, limit?: number): Promise<Comic[]> => {
//   const params = new URLSearchParams()
//   if (offset !== undefined) params.set('offset', `${offset}`)
//   if (limit !== undefined) params.set('limit', `${limit}`)
//   const data: MarvelApiResponse<Comic | Character> = await fetchApi('comics', params.toString())
//   return data.data.results.filter((result): result is Comic => 'title' in result) // Filtramos solo los cómics
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

// export const getCharacters = async (): Promise<Character[]> => {
//   const data = await fetchApi('characters')
//   return data.data.results.filter((result): result is Character => 'name' in result) // Filtramos solo los personajes
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

//! fin del codigo
// export const getCharacter = async (characterId: number): Promise<Character | null> => {
//   const data = await fetchApi(`characters/${characterId}`)
//   const results: Character | undefined = data?.data?.results[0]
//   if (results != null) {
//     return results
//   } else {
//     return null
//   }
// }

// export const getCharacter = async (characterId: number): Promise<Character | null> => {
//   const data = await fetchApi(`characters/${characterId}`)
//   const results: Character[] | undefined = data?.data?.results
//   if (results != null && results.length > 0) {
//     return results[0]
//   } else {
//     return null
//   }
// }

// export const getCharacterByComic = async (comicId: number): Promise<Character[]> => {
//   const data: MarvelApiResponse<Comic | Character> = await fetchApi(`comics/${comicId}/characters`)
//   return data.data.results.filter((result): result is Character => 'name' in result) // Filtramos solo los personajes
// }

//! hastaaqui

// export const getCharacter = async (characterId: number): Promise<Character | null> => {
//   const data = await fetchApi(`characters/${characterId}`)
//   const results: Character[] | undefined = data?.data?.results
//   if (results != null && results.length > 0) {
//     return results[0]
//   } else {
//     return null
//   }
// }

// export const getCharacterByComic = async (comicId: number): Promise<Character[]> => {
//   const data: MarvelApiResponse<Character> = await fetchApi(`comics/${comicId}/characters`)
//   return data.data.results
// }

//! refactor bueno y se anade getcomic

import { generateAuthenticationString } from '../../services/marvel/marvel-auth.service'

export interface Comic {
  id: number
  title: string
  price: number
  oldPrice: number
  stock: number
}

// export interface Character {
//   id: number
//   name: string
//   // otras propiedades relevantes
// }
export interface Character {
  id: number
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
  // Agrega cualquier otra propiedad que pueda tener un personaje
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

const fetchApi = async (endpoint: string, urlParams?: string): Promise<MarvelApiResponse<Comic | Character>> => {
  const authString: string = generateAuthenticationString()
  const url: string = `${MARVEL_API_URL}/${endpoint}?${authString}&${urlParams ?? ''}`
  const response = await fetch(url)
  const responseData = await response.json()
  return responseData // Assuming the API response already conforms to MarvelApiResponse<Comic> or MarvelApiResponse<Character>
}

// export const getComics = async (offset?: number, limit?: number): Promise<Comic[]> => {
//   const params = new URLSearchParams()
//   if (offset !== undefined) params.set('offset', `${offset}`)
//   if (limit !== undefined) params.set('limit', `${limit}`)
//   const data: MarvelApiResponse<Comic> = await fetchApi('comics', params.toString())
//   return data.data.results
// }

// export const getCharacters = async (): Promise<Character[]> => {
//   const data = await fetchApi('characters')
//   return data.data.results
// }
export const getComics = async (offset?: number, limit?: number): Promise<Comic[]> => {
  const params = new URLSearchParams()
  if (offset !== undefined) params.set('offset', `${offset}`)
  if (limit !== undefined) params.set('limit', `${limit}`)
  const data: MarvelApiResponse<Comic | Character> = await fetchApi('comics', params.toString())
  return data.data.results.filter((result): result is Comic => 'title' in result) // Filtramos solo los cómics
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
      // De lo contrario, no es un Comic válido, devolvemos null o lanzamos un error según el caso
      return null
    }
  } else {
    return null
  }
}

export const getCharacters = async (): Promise<Character[]> => {
  const data = await fetchApi('characters')
  return data.data.results.filter((result): result is Character => 'name' in result) // Filtramos solo los personajes
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
