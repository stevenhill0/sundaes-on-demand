import { render } from '@testing-library/react';
import { OrderDetailsProvider } from '../contexts/OrderDetails';

const renderWithContext = (ui, options) => {
  return render(ui, { wrapper: OrderDetailsProvider, ...options });
  // in the options object we're providing the imported context provider, and whatever other options we pass through
};

// standard from the testing does: re-exporting everything in case we need other methods beside render e.g. screen
// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithContext as render };
