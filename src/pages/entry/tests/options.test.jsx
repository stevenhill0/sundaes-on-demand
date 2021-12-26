import { render, screen } from '../../../test-utils/testing-library-utils';
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
    // Mock Service Worker will return three toppings from server
    render(<Options optionType="toppings" />);

    // find images, expect 3 based on what msw returns
    const toppingImages = await screen.findAllByRole('img', {
      name: /topping$/i,
    });
    expect(toppingImages).toHaveLength(3);

    // check the actual alt text for the images
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
