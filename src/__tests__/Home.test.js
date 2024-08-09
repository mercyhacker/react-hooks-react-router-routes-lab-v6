import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render } from '@testing-library/react';
import Home from '../pages/Home';
import Directors from '../pages/Directors';
import Actors from '../pages/Actors';
import Movie from '../pages/Movie';

// Define routes for testing
const routes = [
  { path: '/', element: <Home /> },
  { path: '/directors', element: <Directors /> },
  { path: '/actors', element: <Actors /> },
  { path: '/movie/:id', element: <Movie /> },
];

test('renders "Home Page" inside of an <h1 />', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
    initialIndex: 0
  });
  render(<RouterProvider router={router} />);
});
