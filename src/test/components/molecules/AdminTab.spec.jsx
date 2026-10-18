import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AdminTab from '../../../components/molecules/AdminTab';

describe('AdminTab Component', () => {
    it('renderiza la pestaña correctamente con su etiqueta', () => {
        render(<AdminTab label="Usuarios" />);
        const tabElement = screen.getByText('Usuarios');
        expect(tabElement).toBeTruthy();
    });

    it('aplica la clase TabButton-on cuando isActive es verdadero', () => {
        render(<AdminTab label="Configuración" isActive={true} />);
        const buttonElement = screen.getByText('Configuración').closest('button');
        expect(buttonElement).toHaveClass('TabButton-on');
    });

    it('aplica la clase TabButton-off y ejecuta onClick cuando se hace clic', () => {
    const handleClick = jasmine.createSpy('handleClick');
    render(<AdminTab label="Reportes" isActive={false} onClick={handleClick} />);
    
    const buttonElement = screen.getByText('Reportes').closest('button');
    expect(buttonElement).toHaveClass('TabButton-off');

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalled();
    });
});