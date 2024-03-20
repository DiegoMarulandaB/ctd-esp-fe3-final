/* eslint-disable react/react-in-jsx-scope */
// usar extensión Better Comments
/**
 *  * se modifica la importación dh-marvel ya que genera este error unable to resolve path to module
 */
import { render, screen } from '@testing-library/react'
import BodySingle from '../../../../components/layouts/body/single/body-single'

describe('BodySingle', () => {
  describe('when rendering default layout', () => {
    it('should render the children', () => {
      render(
        // eslint-disable-next-line react/react-in-jsx-scope
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
        // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-no-comment-textnodes
        <BodySingle title={'title'}>
          // eslint-disable-next-line react/react-in-jsx-scope, react/react-in-jsx-scope, react/react-in-jsx-scope
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
