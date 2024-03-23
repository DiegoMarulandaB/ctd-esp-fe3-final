// import md5 from 'md5'

// export const generateAuthenticationString = () => {
//   const ts = new Date().getTime()
//   const hash = md5(`${ts}${process.env.NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY}${process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY}`)
//   return `ts=${ts}&apikey=${process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY}&hash=${hash}`
// }

// refactor

// import md5 from 'md5'

// export const generateAuthenticationString = (): string => {
//   const ts = new Date().getTime()
//   const hash = md5(
//     `${ts}${process.env.NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY}${process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY}`
//   )
//   return `ts=${ts}&apikey=${process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY}&hash=${hash}`
// }

import md5 from 'md5'

export const generateAuthenticationString = (): string => {
  const ts = new Date().getTime()
  const hash = md5(
    `${ts}${process.env.NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY}${process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY}`
  )
  return `ts=${ts}&apikey=${process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY}&hash=${hash}`
}
