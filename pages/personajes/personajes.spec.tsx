import CharacterDetails from "dh-marvel/pages/personajes/[id]";
import { render, screen } from "@testing-library/react";

describe('Personajes', () => {
    it('should render the title', () => {
        render(<CharacterDetails character={undefined} />)
        const title = screen.getByText('Detalle personaje')
        expect(title).toBeInTheDocument()
    })
})

// npm test personajes.spec.tsx
