import React from 'react';
import { render, screen } from '@testing-library/react';
import Image from '../../../components/atoms/Image';
import logoimagen from "../../../assets/LogoTienda.webp"

describe('Image Component', () => {
    it('aplica los atributos correctamente', () => {
    render(<Image src={logoimagen} alt="Logotipo" />);
    const imgElement = screen.getByAltText('Logotipo');
    expect(imgElement.getAttribute('src')).toBe(logoimagen);
    });

    it('aplica la clase className correctamente', () => {
        render(<Image src="logoimagen" alt="Test" className="image-custom" />);
        const imgElement = screen.getByAltText('Test');
        expect(imgElement).toHaveClass('image-custom');
    });

    it('renderiza el componente sin errores en el contenedor', () => {
        const { container } = render(<Image src="logoimagen" alt="Test" />);
        expect(container).toBeTruthy();
    });
});