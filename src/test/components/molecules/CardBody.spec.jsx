import React from 'react';
import { render, screen } from '@testing-library/react';
import CardBody from '../../../components/molecules/CardBody';

describe('CardBody Component', () => {
    it('renderiza el título, la descripción y el precio correctamente', () => {
        render(<CardBody titulo="Producto X" descripcion="Descripción de prueba" precio="50.00" />);
        
        expect(screen.getByText('Producto X')).toBeTruthy();
        expect(screen.getByText('Descripción de prueba')).toBeTruthy();
        expect(screen.getByText('$50.00')).toBeTruthy();
    });

    it('aplica las clases CSS correspondientes en sus elementos internos', () => {
        render(<CardBody titulo="Título Test" descripcion="Texto Test" precio="10" />);
        
        expect(screen.getByText('Título Test')).toHaveClass('card-title');
        expect(screen.getByText('Texto Test')).toHaveClass('card-text');
        expect(screen.getByText('$10')).toHaveClass('precio');
    });

    it('renderiza el contenedor principal con la clase card-body sin errores', () => {
        const { container } = render(<CardBody titulo="T" descripcion="D" precio="1" />);
        expect(container).toBeTruthy();
        expect(container.firstChild).toHaveClass('card-body');
    });
});