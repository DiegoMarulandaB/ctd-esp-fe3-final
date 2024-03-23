/* eslint-disable import/no-unresolved */
/*
* Usar la extensión better comments
! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
*/
// import React from 'react'
// import LayoutCheckout from '../../components/layouts/layout-checkout'
// import { type HeaderProps } from '@storybook/mdx1-csf/dist/ts/stories/Header'
// import { render, screen } from '@testing-library/react'

// const mockHeaderProps = jest.fn()
// jest.mock('dh-marvel/components/layouts/header/general-header.component', () => (props: HeaderProps) => {
//   mockHeaderProps(props)
//   return <div>Header</div>
// })
// jest.mock('dh-marvel/components/layouts/footer/general-footer.component', () => () => {
//   return <div>Footer</div>
// })

// describe('LayoutCheckout', () => {
//   beforeEach(() => {
//     jest.clearAllMocks()
//   })
//   describe('when rendering default', () => {
//     it('should render the children', () => {
//       render(
//         <LayoutCheckout>
//           <p>children</p>
//         </LayoutCheckout>
//       )
//       const children = screen.getByText('children')
//       expect(children).toBeInTheDocument()
//     })
//     it('should render the header with variant simple', () => {
//       render(
//         <LayoutCheckout>
//           <p>children</p>
//         </LayoutCheckout>
//       )
//       const header = screen.getByText('Header')
//       expect(header).toBeInTheDocument()
//       expect(mockHeaderProps).toHaveBeenLastCalledWith({ variant: 'simple' })
//     })
//     it('should render the footer', () => {
//       render(
//         <LayoutCheckout>
//           <p>children</p>
//         </LayoutCheckout>
//       )
//       const footer = screen.getByText('Footer')
//       expect(footer).toBeInTheDocument()
//     })
//   })
// })

// refactor

import React from 'react'
import LayoutCheckout from '../../components/layouts/layout-checkout'
import { type HeaderProps } from '@storybook/mdx1-csf/dist/ts/stories/Header'
import { render, screen } from '@testing-library/react'

const mockHeaderProps = jest.fn()
jest.mock('dh-marvel/components/layouts/header/general-header.component', () => {
  return function GeneralHeaderComponent (props: HeaderProps) {
    mockHeaderProps(props)
    return <div>Header</div>
  }
})
jest.mock('dh-marvel/components/layouts/footer/general-footer.component', () => {
  return function GeneralFooterComponent () {
    return <div>Footer</div>
  }
})

describe('LayoutCheckout', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  describe('when rendering default', () => {
    it('should render the children', () => {
      render(
        <LayoutCheckout>
          <p>children</p>
        </LayoutCheckout>
      )
      const children = screen.getByText('children')
      expect(children).toBeInTheDocument()
    })
    it('should render the header with variant simple', () => {
      render(
        <LayoutCheckout>
          <p>children</p>
        </LayoutCheckout>
      )
      const header = screen.getByText('Header')
      expect(header).toBeInTheDocument()
      expect(mockHeaderProps).toHaveBeenLastCalledWith({ variant: 'simple' })
    })
    it('should render the footer', () => {
      render(
        <LayoutCheckout>
          <p>children</p>
        </LayoutCheckout>
      )
      const footer = screen.getByText('Footer')
      expect(footer).toBeInTheDocument()
    })
  })
})
