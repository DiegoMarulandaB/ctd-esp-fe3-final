import React from "react";
import PurchaseConfirmation from "dh-marvel/pages/confirmacion-compra";
import { render, screen } from "@testing-library/react";

describe('Confirmación compra', () => {
    it('should render the title', () => {
        render(<PurchaseConfirmation />)
        const title = screen.getByText('¡Qué disfrutes de tu compra!')
        expect(title).toBeInTheDocument()
    })
})

// npm test confirmacion-compra.spec.tsx
