import React from "react";
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRedux from "./helpers/renderWithRedux";


test('A página deve renderzar dois botões e o número "0"', () => {
  renderWithRedux(<App />);
  const buttonAdicionar = screen.queryAllByRole('button');

  expect(buttonAdicionar.length).toBe(2);
  expect(screen.getByText('0')).toBeInTheDocument();
});

test('testa o click dos botões', () => {
  renderWithRedux(<App />);

  expect(screen.getByText('0')).toBeInTheDocument();


  const buttons = screen.queryAllByRole('button')

  userEvent.click(buttons[0]);
  expect(screen.getByText(/1/i)).toBeInTheDocument();

  userEvent.click(buttons[1]);
  expect(screen.getByText(/5/i)).toBeInTheDocument();

})
