/* eslint-disable react/display-name */
/*
* Usar la extensión better comments
! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
*/
// import React from 'react'
// import LayoutGeneral from '../../components/layouts/layout-general'
// import { render, screen } from '@testing-library/react'

// jest.mock('../../components/layouts/header/general-header.component', () => () => {
//   return <div>Header</div>
// })
// jest.mock('../../components/layouts/footer/general-footer.component', () => () => {
//   return <div>Footer</div>
// })

// describe('LayoutGeneral', () => {
//   describe('when rendering default', () => {
//     it('should render the children', () => {
//       render(
//         <LayoutGeneral>
//           <p>children</p>
//         </LayoutGeneral>
//       )
//       const children = screen.getByText('children')
//       expect(children).toBeInTheDocument()
//     })
//     it('should render the header', () => {
//       render(
//         <LayoutGeneral>
//           <p>children</p>
//         </LayoutGeneral>
//       )
//       const header = screen.getByText('Header')
//       expect(header).toBeInTheDocument()
//     })
//     it('should render the footer', () => {
//       render(
//         <LayoutGeneral>
//           <p>children</p>
//         </LayoutGeneral>
//       )
//       const footer = screen.getByText('Footer')
//       expect(footer).toBeInTheDocument()
//     })
//   })
// })

// refactor

import React from 'react'
import LayoutGeneral from '../../components/layouts/layout-general'
import { render, screen } from '@testing-library/react'

jest.mock('../../components/layouts/header/general-header.component', () => (): React.ReactNode => {
  return <div>Header</div>
})
jest.mock('../../components/layouts/footer/general-footer.component', () => (): React.ReactNode => {
  return <div>Footer</div>
})

const LayoutGeneralTest = (): JSX.Element => (
  <LayoutGeneral>
    <p>children</p>
  </LayoutGeneral>
)

LayoutGeneralTest.displayName = 'LayoutGeneralTest'

describe('LayoutGeneral', () => {
  describe('when rendering default', () => {
    it('should render the children', () => {
      render(<LayoutGeneralTest />)
      const children = screen.getByText('children')
      expect(children).toBeInTheDocument()
    })
    it('should render the header', () => {
      render(<LayoutGeneralTest />)
      const header = screen.getByText('Header')
      expect(header).toBeInTheDocument()
    })
    it('should render the footer', () => {
      render(<LayoutGeneralTest />)
      const footer = screen.getByText('Footer')
      expect(footer).toBeInTheDocument()
    })
  })
})
