import Home from './Home';
import Lobby from './Lobby';
import { createBrowserRouter } from 'react-router-dom';
import Error from './Error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/lobby',
    element: <Lobby />,
  },
]);
