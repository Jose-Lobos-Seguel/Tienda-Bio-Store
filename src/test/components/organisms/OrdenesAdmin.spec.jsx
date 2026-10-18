import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import OrdenesAdmin from '../../../components/organisms/OrdenesAdmin.jsx';

describe('OrdenesAdmin Component', () => {
    beforeEach(() => {
        localStorage.clear();
        localStorage.setItem('ordenes', JSON.stringify([
            { 
                id: 123, 
                nombre: 'Cliente Test', 
                total: 5000, 
                estado: 'Completado',
                productos: [{ id: 1, name: 'Producto 1', price: 5000, quantity: 1 }]
            }
        ]));
    });

    it('renderiza el título y la tabla de órdenes correctamente', () => {
        render(<OrdenesAdmin />);
        
        expect(screen.getByText('Órdenes')).toBeTruthy();
        expect(screen.getByText('Numero de Boleta')).toBeTruthy();
        expect(screen.getByText('Cliente Test')).toBeTruthy();
    });

    it('permite seleccionar una orden al hacer clic en "Ver boleta" y muestra el detalle', () => {
        render(<OrdenesAdmin />);
        
        const botonesVerBoleta = screen.getAllByText('Ver boleta');
        fireEvent.click(botonesVerBoleta[0]);
        
        const cerrarButton = screen.getByText('Cerrar boleta');
        expect(cerrarButton).toBeTruthy();
    });

    it('cierra la vista de la boleta al hacer clic en "Cerrar boleta"', () => {
        render(<OrdenesAdmin />);
        
        const botonesVerBoleta = screen.getAllByText('Ver boleta');
        fireEvent.click(botonesVerBoleta[0]);
        
        const cerrarButton = screen.getByText('Cerrar boleta');
        fireEvent.click(cerrarButton);
        
        expect(screen.queryByText('Cerrar boleta')).toBeNull();
    });
});