import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from '../../../components/atoms/Text';

describe('Text Component', () => {
    it('renderiza el texto correctamente con sus hijos', () => {
        render(<Text>Hola Mundo</Text>);
        const textElement = screen.getByText('Hola Mundo');
        expect(textElement).toBeTruthy();
    });

    it('aplica los props correctamente', () => {
        render(<Text variant="h1" className="text-custom">Título</Text>);
        const textElement = screen.getByText('Título');
        expect(textElement).toBeTruthy();
    });

    it('renderiza el componente sin errores', () => {
        const { container } = render(<Text>Texto de prueba</Text>);
        expect(container).toBeTruthy();
    });
});