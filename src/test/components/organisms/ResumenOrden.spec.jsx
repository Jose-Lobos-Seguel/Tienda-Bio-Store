import React from 'react';
import { render, screen } from '@testing-library/react';
import ResumenOrden from '../../../components/organisms/ResumenOrden';

describe('ResumenOrden Component', () => {
    const mockOrden = {
        id: 101,
        nombre: 'Juan Pérez',
        correo: 'juan@test.com',
        calle: 'Av. Principal 123',
        comuna: 'Santiago',
        total: 15000,
        productos: [
            { name: 'Producto A', price: 5000 },
            { name: 'Producto B', price: 10000 }
        ]
    };

    it('renderiza la información del cliente y el número de boleta correctamente', () => {
        render(<ResumenOrden orden={mockOrden} />);
        
        expect(screen.getByText('Boleta: Nº 101')).toBeTruthy();
        expect(screen.getByText('Cliente: Juan Pérez (juan@test.com)')).toBeTruthy();
        expect(screen.getByText('Entrega: Av. Principal 123, Santiago')).toBeTruthy();
    });

    it('renderiza la lista de productos y el total de la orden', () => {
        render(<ResumenOrden orden={mockOrden} />);
        
        expect(screen.getByText('Producto A')).toBeTruthy();
        expect(screen.getByText('$5000')).toBeTruthy();
        expect(screen.getByText('Producto B')).toBeTruthy();
        expect(screen.getByText('$10000')).toBeTruthy();
        expect(screen.getByText('Total: $15000')).toBeTruthy();
    });

    it('renderiza de forma segura sin fallar si la orden no contiene productos', () => {
        const ordenSinProductos = {
            id: 102,
            nombre: 'María Gómez',
            correo: 'maria@test.com',
            calle: 'Calle Secundaria 456',
            comuna: 'Providencia',
            total: 0
        };

        render(<ResumenOrden orden={ordenSinProductos} />);
        
        expect(screen.getByText('Boleta: Nº 102')).toBeTruthy();
        expect(screen.getByText('Total: $0')).toBeTruthy();
    });
});