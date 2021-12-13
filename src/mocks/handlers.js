import { rest } from 'msw';

const handlers = [
  rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
    return res([
      { name: 'chocolate', imagePath: '/images/chocolate.png' },
      { name: 'vanilla', imagePath: '/images/vanilla.png' },
    ]);
  }),
];
