import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UsuariosAdmin from '../../../components/organisms/UsuariosAdmin.jsx';

describe('UsuariosAdmin Component', () => {
    it('renderiza el título y las cabeceras de la tabla correctamente', () => {
        render(<UsuariosAdmin />);
        
        expect(screen.getByText('Usuarios')).toBeTruthy();
        expect(screen.getByText('Nombre de Usuario')).toBeTruthy();
        expect(screen.getByText('Correo')).toBeTruthy();
    });

    it('muestra un error si se intenta crear un usuario con campos vacíos', () => {
        render(<UsuariosAdmin />);
        
        const submitButton = screen.getByRole('button', { name: /Crear usuario/i });
        fireEvent.click(submitButton);
        
        expect(screen.getByText('Completa todos los campos')).toBeTruthy();
    });

    it('muestra un error si el formato del correo es inválido', () => {
        render(<UsuariosAdmin />);
        
        fireEvent.change(screen.getByPlaceholderText('Nombre de usuario'), { target: { value: 'Nuevo' } });
        fireEvent.change(screen.getByPlaceholderText('Correo'), { target: { value: 'correoinvalido.com' } });
        fireEvent.change(screen.getByPlaceholderText('Contraseña'), { target: { value: '123456' } });
        
        const submitButton = screen.getByRole('button', { name: /Crear usuario/i });
        fireEvent.click(submitButton);
        
        expect(screen.getByText('Correo inválido')).toBeTruthy();
    });
});