import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render } from '@testing-library/react';
import Movie from '../pages/Movie';
import Home from '../pages/Home';
import Directors from '../pages/Directors';
import Actors from '../pages/Actors';

// Define routes for testing
const routes = [
  { path: '/', element: <Home /> },
  { path: '/directors', element: <Directors /> },
  { path: '/actors', element: <Actors /> },
  { path: '/movie/:id', element: <Movie /> },
];

test('renders the Movie component on route "/movie/:id"', () => {
  const id = 1;
  const router = createMemoryRouter(routes, {
    initialEntries: [`/movie/${id}`],
    initialIndex: 0
  });
  render(<RouterProvider router={router} />);
});
