import { render, screen } from '@testing-library/react';
import Options from '../Options';

describe('Scoop Option Tests', () => {
  test('Displays image for each scoop option from the server', async () => {
    render(<Options optionType="scoops" />);

    const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    const altText = scoopImages.map((element) => {
      return element.alt;
    });
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']); //Arrays HAVE to use .toEqual. They cannot use .toBe
  });

  test('Displays image for each topping option from the server', async () => {
    render(<Options optionType="toppings" />);

    const toppingImages = await screen.findAllByRole('img', {
      name: /topping$/i,
    });
    expect(toppingImages).toHaveLength(3);

    const altText = toppingImages.map((element) => {
      return element.alt;
    });
    expect(altText).toEqual([
      'Cherries topping',
      'M&Ms topping',
      'Hot fudge topping',
    ]);
  });
});
