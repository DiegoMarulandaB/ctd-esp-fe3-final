/*
* Usar la extensión better comments
! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
*/

// import GeneralHeader from '../../components/layouts/header/general-header.component'
// import GeneralFooter from '../../components/layouts/footer/general-footer.component'
// import Box from '@mui/material/Box'
// import * as React from 'react'
// import { type FC, type PropsWithChildren } from 'react'
// import { Stack } from '@mui/material'

// const LayoutGeneral: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
//   return (
//     <>
//       <Stack direction={'column'} height={'100%'}>
//         <GeneralHeader />
//         <Box display={'flex'} flexGrow={1} justifyContent={'center'}>
//           {children}
//         </Box>
//         <GeneralFooter />
//       </Stack>
//     </>
//   )
// }
// export default LayoutGeneral

// refactor3

import * as React from 'react'
import { type FC, type PropsWithChildren } from 'react'
import { Stack } from '@mui/material'
import Box from '@mui/material/Box'
import GeneralHeader from '../../components/layouts/header/general-header.component'
import GeneralFooter from '../../components/layouts/footer/general-footer.component'

const LayoutGeneral: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Stack direction={'column'} height={'100%'}>
        <GeneralHeader />
        <Box display={'flex'} flexGrow={1} justifyContent={'center'}>
          {children}
        </Box>
        <GeneralFooter />
      </Stack>
    </>
  )
}
export default LayoutGeneral
