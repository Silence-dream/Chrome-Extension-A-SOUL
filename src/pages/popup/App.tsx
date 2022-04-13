import './App.scss';

import { Outlet } from 'react-router-dom';

import HeaderNav from '@/pages/popup/components/HeaderNav/HeaderNav';
import Menu from '@/pages/popup/components/Menu/Menu';

function App() {
  // navigate({ pathname: '/live' }, { replace: true });
  return (
    <div className="App">
      <div className="left-box">
        <div className="top-bar">
          <HeaderNav />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
      <div className="right-box">
        <Menu />
      </div>
      {/* 底部工具栏 */}
      {/*<FooterNav />*/}
    </div>
  );
}

export default App;
