import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from '../../../components/molecules/Logo';

describe('Logo Component', () => {
    it('renderiza la imagen del logotipo con su texto alternativo correctamente', () => {
        render(<Logo />);
        const imgElement = screen.getByAltText('Logotipo');
        expect(imgElement).toBeTruthy();
    });

    it('aplica las clases CSS y el atributo href correctamente en el enlace', () => {
        const { container } = render(<Logo />);
        const linkElement = container.querySelector('.molecule-logo');
        const imgElement = screen.getByAltText('Logotipo');

        expect(linkElement).toBeTruthy();
        expect(linkElement.getAttribute('href')).toBe('pagina inicio');
        expect(imgElement).toHaveClass('Logo-img');
    });

    it('renderiza el componente sin errores en el contenedor principal', () => {
        const { container } = render(<Logo />);
        expect(container).toBeTruthy();
    });
});