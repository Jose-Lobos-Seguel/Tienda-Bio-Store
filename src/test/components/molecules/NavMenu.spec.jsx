import React from 'react';
import { render, screen } from '@testing-library/react';
import NavMenu from '../../../components/molecules/NavMenu';

describe('NavMenu Component', () => {
    it('renderiza todos los elementos de navegación correctamente', () => {
        render(<NavMenu />);
        
        expect(screen.getByText('Inicio')).toBeTruthy();
        expect(screen.getByText('Productos')).toBeTruthy();
        expect(screen.getByText('Nosotros')).toBeTruthy();
        expect(screen.getByText('Carrito')).toBeTruthy();
        expect(screen.getByText('Iniciar Sesion')).toBeTruthy();
    });

    it('aplica la clase CSS molecule-nav-menu en el contenedor nav', () => {
        const { container } = render(<NavMenu />);
        const navElement = container.querySelector('.molecule-nav-menu');
        
        expect(navElement).toBeTruthy();
    });

    it('renderiza el componente completo sin errores en el contenedor', () => {
        const { container } = render(<NavMenu />);
        expect(container).toBeTruthy();
    });
});