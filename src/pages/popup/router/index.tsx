import { RouteObject, useRoutes } from 'react-router-dom';

import Home from '@/pages/popup/views/Home/Home';
import Live from '@/pages/popup/views/Live/Live';
import TimeLine from '@/pages/popup/views/TimeLine/TimeLine';

import App from '../App';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'timeline',
        element: <TimeLine />,
      },
      {
        path: 'live',
        element: <Live />,
      },
      {
        path: '*',
        element: <div>404</div>,
      },
    ],
  },
];

function AppRoute() {
  let element = useRoutes(routes);
  return element;
}
export default AppRoute;
