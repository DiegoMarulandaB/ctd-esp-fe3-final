// import md5 from "md5"

// export const generateAuthenticationString = () => {
//     // const ts = new Date().getTime();
//     const ts = 1
//     // const hash = md5(`${ts}${process.env.MARVEL_API_PRIVATE_KEY}${process.env.MARVEL_API_PRIVATE_KEY}`)
//     // return `ts=${ts}&apikey=${process.env.MARVEL_API_PRIVATE_KEY}&hash=${hash}`
//     return `ts=${ts}&apikey=455ba9510d4c0f835cc4d00314238421&hash=d0993fdc42e5b8274c194b21cdf674c0`
// }


// ! correciones mias con chat

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import md5 from 'md5'

export const generateAuthenticationString = (): string => {
  // const ts = new Date().getTime();
  const ts = 1
  // const hash = md5(`${ts}${process.env.MARVEL_API_PRIVATE_KEY}${process.env.MARVEL_API_PRIVATE_KEY}`)
  // return `ts=${ts}&apikey=${process.env.MARVEL_API_PRIVATE_KEY}&hash=${hash}`
  return `ts=${ts}&apikey=455ba9510d4c0f835cc4d00314238421&hash=d0993fdc42e5b8274c194b21cdf674c0`
}
