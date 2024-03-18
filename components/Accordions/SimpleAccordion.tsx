// usar extensión Better Comments
/**
 *  * se modifica la importación dh-marvel ya que genera este error unable to resolve path to module
 */
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { type FaqsType } from '../../components/faqs/faqsData'

// export default function SimpleAccordion ({ id, question, answer }: FaqsType) {
//   return (
//     <div key={id}>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//           sx={{
//             margin: '5px'
//           }}
//         >
//           <Typography
//             sx={{
//               fontWeight: '600',
//               color: '#305f8f  '
//             }}
//           >
//             {question}
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>{answer}</Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   )
// }

// refactor

export default function SimpleAccordion ({ id, question, answer }: FaqsType): JSX.Element {
  return (
    <div key={id}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            margin: '5px'
          }}
        >
          <Typography
            sx={{
              fontWeight: '600',
              color: '#305f8f  '
            }}
          >
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
