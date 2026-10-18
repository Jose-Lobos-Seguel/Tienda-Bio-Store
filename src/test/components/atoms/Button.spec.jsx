import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../../components/atoms/Button';

describe('Button Component', () => {
    it('renderiza el botón correctamente con su contenido', () => {
        const { getByText } = render(<Button>Haz click</Button>);
        expect(getByText('Haz click')).toBeTruthy();
    });

    it('aplica las clases por defecto y los props correctamente', () => {
        render(<Button>Haz click</Button>);
        const button = screen.getByText('Haz click');
        expect(button).toHaveClass('button-detail');
    });

    it('ejecuta la función onClick cuando se hace clic', () => {
    const handleClick = jasmine.createSpy('handleClick');
    render(<Button onClick={handleClick}>Haz click</Button>);

    const button = screen.getByText('Haz click');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
    });
});