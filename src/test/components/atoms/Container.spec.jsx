import React from 'react';
import { render, screen } from '@testing-library/react';
import Container from '../../../components/atoms/Container';

describe('Container Component', () => {
    it('renderiza el contenedor correctamente con sus hijos', () => {
        render(<Container>Contenido interno</Container>);
        const element = screen.getByText('Contenido interno');
        expect(element).toBeTruthy();
    });

    it('aplica la clase por defecto y el className adicional correctamente', () => {
    render(<Container className="custom-class">Test</Container>);
    const containerElement = screen.getByText('Test');
    expect(containerElement.className).toContain('container');
    expect(containerElement.className).toContain('custom-class');
    });

    it('renderiza el componente sin errores en el contenedor', () => {
        const { container } = render(<Container>Test</Container>);
        expect(container).toBeTruthy();
    });
});