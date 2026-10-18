import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../../components/organisms/Footer';

describe('Footer Component', () => {
    it('renderiza la información de contacto y el correo correctamente', () => {
        render(<Footer />);
        
        expect(screen.getByText('Contacto')).toBeTruthy();
        expect(screen.getByText('Correo: contacto@biostore.com')).toBeTruthy();
    });

    it('renderiza los enlaces de redes sociales con sus atributos href correspondientes', () => {
        render(<Footer />);
        
        const instagramLink = screen.getByRole('link', { name: /instagram/i });
        const tiktokLink = screen.getByRole('link', { name: /tiktok/i });

        expect(instagramLink.href).toBe('https://www.instagram.com/_levelnai/');
        expect(tiktokLink.href).toBe('https://vt.tiktok.com/ZSgMgP8VU/');
    });

    it('renderiza el contenedor principal con la clase footer sin errores', () => {
        const { container } = render(<Footer />);
        const footerElement = container.querySelector('.footer');
        
        expect(footerElement).toBeTruthy();
    });
});