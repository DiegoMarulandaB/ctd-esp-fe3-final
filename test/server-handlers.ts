import comicWithoutStock from 'dh-marvel/test/mocks/comicWithoutStock'
import comicsWithOffsetAndLimit from 'dh-marvel/test/mocks/comicsWithOffsetAndLimit'
import comics from 'dh-marvel/test/mocks/comics'
import comic from 'dh-marvel/test/mocks/comic'
import checkoutHandler, { validCard } from '../pages/api/checkout.route'
import character from 'dh-marvel/test/mocks/character'
import { rest } from 'msw'

const validCardResponse = {
  customer: {
    name: 'Diego',
    lastname: 'Marulanda',
    email: 'diegomarulanda87@gmail.com',
    address: {
      address1: 'avenida 123',
      address2: '',
      city: 'Bogotá',
      state: 'Cundinamarca',
      zipCode: '110110'
    }
  },
  card: {
    number: '4242 4242 4242 4242',
    cvc: '435',
    expDate: 'qwe',
    nameOnCard: 'qwe'
  },
  order: {
    name: 'Ant-Man (2003) #4',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/4/20/4bc697c680890.jpg',
    price: 72
  }
}

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
  }),

  rest.post('/api/checkout', async (req, res, ctx) => {
    // const cardNumber = req?.body.card?.number?;
    // if (cardNumber === validCard) {
    //   return res(ctx.json({ ...validCardResponse }));
    // }
    // return res(
    //   ctx.status(500),
    //   ctx.json({ error: "error", message: "Something went wrong" })
    // );
  })
]

export { handlers }
