import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../SummaryForm';

describe('SummaryForm test', () => {
  test('See if checkbox is unchecked by default', () => {
    render(<SummaryForm />);
    const checkBox = screen.getByRole('checkbox', {
      name: 'I agree to Terms and Conditions',
    });
    expect(checkBox).not.toBeChecked();
  });

  test('Checking checkbox enables button', () => {
    render(<SummaryForm />);
    const checkBox = screen.getByRole('checkbox', {
      name: 'I agree to Terms and Conditions',
    });
    const confirmButton = screen.getByRole('button', {
      name: /confirm order/i,
    });

    userEvent.click(checkBox);
    expect(confirmButton).toBeEnabled();

    userEvent.click(checkBox);
    expect(confirmButton).toBeDisabled();
  });

  test('popover responds to hover', async () => {
    render(<SummaryForm />);

    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i,
    );
    expect(nullPopover).not.toBeInTheDocument();

    const termsAndConditions = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);

    const popover = screen.getByText(
      /no ice cream will actually be delivered/i,
    );
    expect(popover).toBeInTheDocument();

    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(() => {
      return screen.queryByText(/no ice cream will actually be delivered/i);
    });
  });
});
