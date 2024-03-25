// import * as React from 'react'
// import Box from '@mui/material/Box'
// import CardHome from 'dh-marvel/components/Cards/CardHome'
// import Grid from '@mui/material/Grid'

// export default function ResponsiveGrid ({ data }: any) {
//   return (
//     <Box sx={{ flexGrow: 1 }} >
//       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//         {data.map((item: any, index: React.Key | null | undefined) => (
//           <Grid item xs={2} sm={4} md={4} key={index}>
//             <CardHome
//               title={item.title}
//               image={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
//               id={item?.id}
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   )
// }

// refactor

/*
* Usar la extensión better comments
! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
*/

// import * as React from 'react'
// import Box from '@mui/material/Box'
// import CardHome from '../components/Cards/CardHome'
// import Grid from '@mui/material/Grid'

// interface Item {
//   title: string
//   thumbnail: {
//     path: string
//     extension: string
//   }
//   id: number
// }

// interface ResponsiveGridProps {
//   data: Item[]
// }

// export default function ResponsiveGrid ({ data }: ResponsiveGridProps): React.ReactNode {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//         {data.map((item: Item, index: number) => (
//           <Grid item xs={2} sm={4} md={4} key={index}>
//             <CardHome title={item.title} image={`${item.thumbnail.path}.${item.thumbnail.extension}`} id={item.id} />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   )
// }

// refactor 2

import React from 'react'
import { Box, Grid } from '@mui/material'
import CardHome from '../components/Cards/CardHome'

interface Item {
  id: number
  title: string
  thumbnail?: {
    path: string
    extension: string
  }
}

interface ResponsiveGridProps {
  data: Item[]
}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({ data }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map((item: Item, index: number) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <CardHome
              title={item.title}
              image={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
              id={item?.id}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ResponsiveGrid
