import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AdminDashboard from '../../../components/organisms/AdminDashboard';

describe('AdminDashboard Component', () => {
    const mockTabs = [
        { id: '1', label: 'General', content: <div data-testid="content-1">Contenido General</div> },
        { id: '2', label: 'Seguridad', content: <div data-testid="content-2">Contenido Seguridad</div> }
    ];

    it('renderiza las pestañas y muestra el contenido de la pestaña inicial por defecto', () => {
        render(<AdminDashboard tabs={mockTabs} />);
        
        expect(screen.getByText('General')).toBeTruthy();
        expect(screen.getByText('Seguridad')).toBeTruthy();
        expect(screen.getByTestId('content-1')).toBeTruthy();
    });

    it('cambia el contenido activo al hacer clic en otra pestaña de la lista', () => {
        render(<AdminDashboard tabs={mockTabs} />);
        
        const tabSeguridad = screen.getByText('Seguridad');
        fireEvent.click(tabSeguridad);
        
        expect(screen.getByTestId('content-2')).toBeTruthy();
    });

    it('no renderiza botones de pestañas cuando el arreglo de tabs está vacío', () => {
        const { container } = render(<AdminDashboard tabs={[]} />);
        

        const botones = container.querySelectorAll('button');
        expect(botones.length).toBe(0);
    });
});