import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductCard from '../../../components/organisms/ProductCard';

describe('ProductCard Component', () => {
    const mockProduct = {
        id: '1',
        name: 'Producto Test',
        description: 'Descripción de prueba',
        price: '100',
        image: 'test.webp'
    };

    it('renderiza la información del producto y sus subcomponentes correctamente', () => {
        render(
            <MemoryRouter>
                <ProductCard product={mockProduct} />
            </MemoryRouter>
        );
        
        expect(screen.getByText('Producto Test')).toBeTruthy();
        expect(screen.getByText('Descripción de prueba')).toBeTruthy();
        expect(screen.getByText('$100')).toBeTruthy();
        expect(screen.getByAltText('Producto Test')).toBeTruthy();
    });

    it('muestra el botón Ver detalles y permite interactuar con él', () => {
        render(
            <MemoryRouter>
                <ProductCard product={mockProduct} />
            </MemoryRouter>
        );
        
        const detailButton = screen.getByText('Ver detalles');
        expect(detailButton).toBeTruthy();
        fireEvent.click(detailButton);
    });

    it('muestra el botón Agregar al carrito y permite hacer clic en él', () => {
        render(
            <MemoryRouter>
                <ProductCard product={mockProduct} />
            </MemoryRouter>
        );
        
        const addButton = screen.getByText('Agregar al carrito');
        expect(addButton).toBeTruthy();
        fireEvent.click(addButton);
    });
});