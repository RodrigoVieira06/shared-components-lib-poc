import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MainButton } from './MainButton';
import '@testing-library/jest-dom';
import { PlusOutlined } from '@ant-design/icons';

describe('MainButton', () => {
  test('renders button with children and handles click', () => {
    const handleClick = jest.fn();
    render(<MainButton onClick={handleClick}>Acessar plataforma</MainButton>);

    const button = screen.getByRole('button', { name: 'Acessar plataforma' });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders icon in the correct position (start)', () => {
    const icon = <PlusOutlined data-testid="icon" />;
    render(
      <MainButton data-testid='button' icon={icon} iconPosition="start">
        Acessar plataforma
      </MainButton>
    );

    const button = screen.getByTestId('button');
    const iconElement = screen.getByTestId('icon');

    expect(button.firstChild).toBe(iconElement);
  });

  test('renders icon in the correct position (end)', () => {
    const icon = <PlusOutlined data-testid="icon" />;
    render(
      <MainButton data-testid='button' icon={icon} iconPosition="end">
        Acessar plataforma
      </MainButton>
    );

    const button = screen.getByTestId('button');
    const iconElement = screen.getByTestId('icon');

    expect(button.lastChild).toBe(iconElement);
  });
});
