/* eslint-disable @typescript-eslint/explicit-function-return-type */
//! original repo dh
import md5 from 'md5'

export const generateAuthenticationString = () => {
  const ts = new Date().getTime()
  const hash = md5(`${ts}${process.env.MARVEL_API_PRIVATE_KEY}${process.env.MARVEL_API_PUBLIC_KEY}`)
  return `ts=${ts}&apikey=${process.env.MARVEL_API_PUBLIC_KEY}&hash=${hash}`
}

// !Refactor

// import md5 from 'md5'
// export const generateAuthenticationString = (): string => {
//   const ts = new Date().getTime().toString()
//   const privateKey = process.env.MARVEL_PRIVATE_KEY // Asegúrate de tener MARVEL_PRIVATE_KEY configurado correctamente
//   const publicKey = process.env.MARVEL_PUBLIC_KEY // Asegúrate de tener MARVEL_PUBLIC_KEY configurado correctamente
//   const hash = md5(`${ts}${privateKey}${publicKey}`)
//   return `ts=${ts}&apikey=${publicKey}&hash=${hash}`
// }
