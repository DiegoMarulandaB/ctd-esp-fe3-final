/*
* Usar la extensión better comments
! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
*/

import React from 'react'
import PurchaseConfirmation from './index.page'
import { render, screen } from '@testing-library/react'

describe('Confirmación compra', () => {
  it('should render the title', () => {
    render(<PurchaseConfirmation />)
    const title = screen.getByText('¡Qué disfrutes de tu compra!')
    expect(title).toBeInTheDocument()
  })
})

// npm test confirmacion-compra.spec.tsx
