import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../../../components/atoms/Input';

describe('Input Component', () => {
    it('renderiza el input correctamente con su placeholder', () => {
        render(<Input placeholder="Escribe aquí" />);
        const inputElement = screen.getByPlaceholderText('Escribe aquí');
        expect(inputElement).toBeTruthy();
    });

    it('aplica el tipo por defecto y los props correctamente', () => {
        render(<Input placeholder="Test" />);
        const inputElement = screen.getByPlaceholderText('Test');
        expect(inputElement.getAttribute('type')).toBe('text');
    });

    it('ejecuta la función onChange cuando se escribe en el input', () => {
        const handleChange = jasmine.createSpy('handleChange');
        render(<Input placeholder="Test" onChange={handleChange} />);
        
        const inputElement = screen.getByPlaceholderText('Test');
        fireEvent.change(inputElement, { target: { value: 'Nuevo valor' } });
        
        expect(handleChange).toHaveBeenCalled();
    });
});