import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render } from '@testing-library/react';
import Actors from '../pages/Actors';
import Home from '../pages/Home';
import Directors from '../pages/Directors';
import Movie from '../pages/Movie';

// Define routes for testing
const routes = [
  { path: '/', element: <Home /> },
  { path: '/directors', element: <Directors /> },
  { path: '/actors', element: <Actors /> },
  { path: '/movie/:id', element: <Movie /> },
];

test('renders the Actors component on route "/actors"', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/actors'],
    initialIndex: 0
  });
  render(<RouterProvider router={router} />);
});
