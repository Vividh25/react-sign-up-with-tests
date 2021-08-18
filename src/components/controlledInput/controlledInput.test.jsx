import {
  render,
  fireEvent,
  screen,
  cleanup,
  waitFor,
} from '@testing-library/react';

import controlledInput from './controlledInput';

beforeEach(() => {
  render(<controlledInput />);
});

afterEach(() => {
  cleanup();
});

describe('Tests for input type email', () => {
  test('should show invalud message and change border to red if invalid input is entered', () => {
    const inputField = screen.getByTestId('input-field');
    const errorMessage = screen.getByTestId('error-msg');
    fireEvent.change(inputField, { target: { value: 'test@testcom' } });
    expect(errorMessage).toHaveTextContent(/Please enter a valid email/);
    expect(inputField.classList).toContain('invaild-field');
  });
});
