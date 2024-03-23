/*
* Usar la extensión better comments
! se modifica la importación dh- marver, por  este error  Unable to resolve path to module dado en eslint
*/
import React from 'react'
import BodySingle from '../../../../components/layouts/body/single/body-single'
import { render, screen } from '@testing-library/react'

describe('BodySingle', () => {
  describe('when rendering default layout', () => {
    it('should render the children', () => {
      render(
        <BodySingle>
          <p>children</p>
        </BodySingle>
      )
      const children = screen.getByText('children')
      expect(children).toBeInTheDocument()
    })
  })
  describe('when rendering with title', () => {
    it('should render the children & the title', () => {
      render(
        <BodySingle title={'title'}>
          <p>children</p>
        </BodySingle>
      )
      const children = screen.getByText('children')
      expect(children).toBeInTheDocument()

      const title = screen.getByText('title')
      expect(title).toBeInTheDocument()
    })
  })
})
