// import CardCheckout from './CardCheckout'
// import { render, screen } from '@testing-library/react'

// describe('CardCheckout', () => {
//   describe('when rendering default', () => {
//     it('should render the title', () => {
//       render(<CardCheckout title={'Gun Theory (2003) #3'} image={'image.jpg'} id={0} price={0} />)
//       const title = screen.getByText('Gun Theory (2003) #3')
//       expect(title).toBeInTheDocument()
//     })
//   })
// })

// refactor

import React from 'react'
import { render, screen } from '@testing-library/react'
import CardCharacter from './CardCharacter'

describe('CardCharacter', () => {
  describe('when rendering default', () => {
    it('should render the title', () => {
      render(<CardCharacter name={'Captain American'} image={'image.jpg'} id={0} description="A real superhero!" />)
      const title = screen.getByText('Captain American')
      expect(title).toBeInTheDocument()
    })
  })
})
