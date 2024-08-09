import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render } from '@testing-library/react';
import Directors from '../pages/Directors';
import Home from '../pages/Home';
import Actors from '../pages/Actors';
import Movie from '../pages/Movie';

// Define routes for testing
const routes = [
  { path: '/', element: <Home /> },
  { path: '/directors', element: <Directors /> },
  { path: '/actors', element: <Actors /> },
  { path: '/movie/:id', element: <Movie /> },
];

test('renders the Directors component on route "/directors"', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/directors'],
    initialIndex: 0
  });
  render(<RouterProvider router={router} />);
});
