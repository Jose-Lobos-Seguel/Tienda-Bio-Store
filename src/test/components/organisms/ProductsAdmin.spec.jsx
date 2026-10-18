import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductsAdmin from '../../../components/organisms/ProductsAdmin.jsx';

describe('ProductsAdmin Component', () => {
    beforeEach(() => {
        localStorage.clear();
        localStorage.setItem('productos', JSON.stringify([
            { id: 1, name: 'Laptop', category: 'Tecnología', price: 1000, stock: 5, description: 'Desc', image: 'url' }
        ]));
    });

    it('renderiza el título y la lista de productos correctamente', () => {
        render(<ProductsAdmin />);
        
        expect(screen.getByText('Administración de Productos')).toBeTruthy();
        expect(screen.getByText('Laptop')).toBeTruthy();
        expect(screen.getByText('Tecnología')).toBeTruthy();
    });

    it('muestra un mensaje de error si se intenta guardar con campos obligatorios vacíos', () => {
        render(<ProductsAdmin />);
        
        const submitButton = screen.getByRole('button', { name: /Crear/i });
        fireEvent.click(submitButton);
        
        expect(screen.getByText('Nombre, precio y stock no pueden quedar en blanco.')).toBeTruthy();
    });

    it('carga los datos en el formulario al hacer clic en Editar', () => {
        render(<ProductsAdmin />);
        
        const editButton = screen.getByRole('button', { name: /Editar/i });
        fireEvent.click(editButton);
        
        expect(screen.getByRole('button', { name: /Guardar cambios/i })).toBeTruthy();
        expect(screen.getByRole('button', { name: /Cancelar/i })).toBeTruthy();
    });
});