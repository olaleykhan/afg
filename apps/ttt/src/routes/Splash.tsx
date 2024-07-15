import { Welcome, Home } from '@afg/ttt-fe/features/splash';
import { Outlet } from 'react-router-dom';
import GameFrame from '@afg/ttt-fe/layout/GameFrame';

const splashRoute = {
  path: 'splash/',
  element: (
    <GameFrame>
      {' '}
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
