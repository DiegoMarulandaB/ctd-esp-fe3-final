import GeneralFooter from 'dh-marvel/components/layouts/footer/general-footer.component'
import { render, screen } from '@testing-library/react'

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
