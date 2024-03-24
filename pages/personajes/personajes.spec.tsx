/*
* Usar la extensión better comments
! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
*/
import React from 'react'
import CharacterDetails from './[id]'
import { render, screen } from '@testing-library/react'

describe('Personajes', () => {
  it('should render the title', () => {
    render(<CharacterDetails character={undefined} />)
    const title = screen.getByText('Detalle personaje')
    expect(title).toBeInTheDocument()
  })
})

// npm test personajes.spec.tsx
