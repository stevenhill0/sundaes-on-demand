import { render, screen } from '../../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import Options from '../Options';

test('Update scoop subtotal when scoops change', async () => {
  render(<Options optionType="scoops" />);

  // exact option is by default true. If it is only a partial match use exact with a false value
  const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false }); // if it is a display element you can just use getByText insread of Role
  expect(scoopsSubtotal).toHaveTextContent('0.00');

  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '1'); //how many scoops
  expect(scoopsSubtotal).toHaveTextContent('2.00'); //Dollar value

  const chocolateInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate',
  });
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, '2');
  expect(scoopsSubtotal).toHaveTextContent('6:00');
});
