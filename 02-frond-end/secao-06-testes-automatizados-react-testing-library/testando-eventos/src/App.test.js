import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Verificando se o botão e o campo email estão funcionando.', () => {
  const textEmail = screen.getByTestId('id-email-user');
  render(<App />)

  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');
  
  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');
  userEvent.type(inputEmail, 'email@email.com');
  userEvent.click(btnSend);
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: email@email.com`)
  });
  
  