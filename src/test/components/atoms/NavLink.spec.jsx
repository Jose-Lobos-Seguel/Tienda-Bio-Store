import React from 'react';
import { render, screen } from '@testing-library/react';
import NavLink from '../../../components/atoms/NavLink';

describe('NavLink Component', () => {
    it('renderiza el enlace correctamente con su texto', () => {
        render(<NavLink href="/Inicio">Inicio</NavLink>);
        const linkElement = screen.getByText('Inicio');
        expect(linkElement).toBeTruthy();
    });

    it('aplica el atributo href correctamente', () => {
    render(<NavLink href="/contacto">Contacto</NavLink>);
    const linkElement = screen.getByText('Contacto');
    expect(linkElement.getAttribute('href')).toBe('/contacto');
    });

    it('renderiza el componente sin errores en el contenedor', () => {
        const { container } = render(<NavLink href="/Nosotros">Acerca de</NavLink>);
        expect(container).toBeTruthy();
    });
});