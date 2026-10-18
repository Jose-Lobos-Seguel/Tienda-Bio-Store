import React from 'react';
import { render, screen } from '@testing-library/react';
import NavHeader from '../../../components/organisms/NavHeader';

describe('NavHeader Component', () => {
    it('renderiza los subcomponentes Logo y NavMenu correctamente', () => {
        render(<NavHeader />);
        
        expect(screen.getByAltText('Logotipo')).toBeTruthy();
        expect(screen.getByText('Inicio')).toBeTruthy();
    });

    it('aplica la clase organism-header en el elemento header contenedor', () => {
        const { container } = render(<NavHeader />);
        const headerElement = container.querySelector('.organism-header');
        
        expect(headerElement).toBeTruthy();
    });

    it('renderiza el componente completo sin errores en el contenedor', () => {
        const { container } = render(<NavHeader />);
        expect(container).toBeTruthy();
    });
});