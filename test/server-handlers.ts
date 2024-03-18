// usar extensión Better Comments
/**
 *  * se modifica la importación dh-marvel ya que genera este error unable to resolve path to module
 */

import { rest } from 'msw'
import comics from '../test/mocks/comics'
import character from '../test/mocks/character'
import comic from '../test/mocks/comic'
import comicsWithOffsetAndLimit from '../test/mocks/comicsWithOffsetAndLimit'
import comicWithoutStock from '../test/mocks/comicWithoutStock'

const handlers = [
  rest.get('/marvel/api/comics', async (req, res, ctx) => {
    const query = req.url.searchParams
    if (query.get('offset') === '10' && query.get('limit') === '5') {
      return await res(ctx.json(comicsWithOffsetAndLimit))
    }
    return await res(ctx.json(comics))
  }),
  rest.get('/marvel/api/comics/:id', async (req, res, ctx) => {
    const id = req.params.id
    if (id === '1') return await res(ctx.json({ data: { results: [comic] } }))
    if (id === '10') return await res(ctx.json({ data: { results: [comicWithoutStock] } }))
    return await res(ctx.json({ data: { results: [] } }))
  }),
  rest.get('/marvel/api/characters/:id', async (req, res, ctx) => {
    const id = req.params.id
    if (id === '1') return await res(ctx.json({ data: { results: [character] } }))
    return await res(ctx.json({ data: { results: [] } }))
  })
]

export { handlers }
