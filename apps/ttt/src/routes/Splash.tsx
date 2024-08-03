import { Welcome, Home } from '../features/splash';
import { Outlet } from 'react-router-dom';
import GameFrame from '../layout/GameFrame';

const splashRoute = {
  path: 'splash/',
  element: (
    <GameFrame>
      <Outlet />
    </GameFrame>
  ),
  children: [
    {
      path: '',
      element: <Home />,
    },
    {
      path: 'welcome',
      element: <Welcome />,
    },
  ],
};
export default splashRoute;
