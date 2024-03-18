// usar extensión Better Comments
/**
 *  * se modifica la importación dh-marvel ya que genera este error unable to resolve path to module
 */
import { render, screen } from '@testing-library/react'
import GeneralFooter from '../../../components/layouts/footer/general-footer.component'

describe('GeneralFooter', () => {
  describe('when rendering default layout', () => {
    it('should render the powered by text', () => {
      render(<GeneralFooter />)
      const poweredBy = screen.getByText('Powered by')
      expect(poweredBy).toBeInTheDocument()
    })
    it('should render the logo', () => {
      render(<GeneralFooter />)
      const logo = screen.getByAltText('Digital House Logo')
      expect(logo).toBeInTheDocument()
    })
  })
})
