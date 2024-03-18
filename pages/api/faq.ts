// usar extensión Better Comments
/**
 *  * se modifica la importación dh-marvel ya que genera este error unable to resolve path to module
 */

import { type NextApiRequest, type NextApiResponse } from 'next'
import { faqsData } from '../../components/faqs/faqsData'
export default function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(faqsData)
  } else {
    res.status(400).json({ error: 'Método no permitido' })
  }
}
