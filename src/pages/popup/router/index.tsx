import { RouteObject, useRoutes } from 'react-router-dom';

import Home from '@/pages/popup/views/Home/Home';
import TimeLine from '@/pages/popup/views/TimeLine/TimeLine';

import App from '../App';

const routes: RouteObject[] = [
  {
    path: '/popup.html',
    element: <App />,
    children: [
      {
        index: true,
        path: '/popup.html',
        element: <Home />,
      },
      {
        path: 'timeline',
        element: <TimeLine />,
      },
      {
        path: 'live',
        element: <div>直播</div>,
      },
    ],
  },
];

function AppRoute() {
  let element = useRoutes(routes);
  return element;
}
export default AppRoute;
