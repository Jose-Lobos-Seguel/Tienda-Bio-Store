import React from 'react';
import { render, screen } from '@testing-library/react';
import Row from '../../../components/atoms/Row';

describe('Row Component', () => {
    it('renderiza la fila correctamente con sus hijos', () => {
        render(<Row>Contenido de la fila</Row>);
        const element = screen.getByText('Contenido de la fila');
        expect(element).toBeTruthy();
    });

    it('aplica la clase por defecto row correctamente', () => {
        render(<Row>Test</Row>);
        const rowElement = screen.getByText('Test');
        expect(rowElement).toHaveClass('row');
    });

    it('renderiza el componente sin errores en el contenedor', () => {
        const { container } = render(<Row>Test</Row>);
        expect(container).toBeTruthy();
    });
});