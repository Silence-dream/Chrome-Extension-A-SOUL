import './App.scss';

import { Outlet } from 'react-router-dom';

import HeaderNav from '@/pages/popup/components/HeaderNav/HeaderNav';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Outlet />
    </div>
  );
}

export default App;
