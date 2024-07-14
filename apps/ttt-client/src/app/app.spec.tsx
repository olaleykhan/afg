import { render, screen } from '@testing-library/react';

import App from './app';

describe('TIC TAC TOE App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have some form of text saying tic tact toe', () => {
    render(<App />);
    const app = screen.getByRole('heading', {name: /tic-tac-toe/i})
    expect(app).toBeTruthy();
  });
});
