// import { type NextApiRequest, type NextApiResponse } from 'next'
// import { faqsData } from 'dh-marvel/components/faqs/faqsData'

// export default function handler (req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'GET') {
//     res.status(200).json(faqsData)
//   } else {
//     res.status(400).json({ error: 'Método no permitido' })
//   }
// }

// refactor

import { type NextApiRequest, type NextApiResponse } from 'next'
import { faqsData } from 'dh-marvel/components/faqs/faqsData'

export default function handler (req: NextApiRequest, res: NextApiResponse): void {
  if (req.method === 'GET') {
    res.status(200).json(faqsData)
  } else {
    res.status(400).json({ error: 'Método no permitido' })
  }
}
