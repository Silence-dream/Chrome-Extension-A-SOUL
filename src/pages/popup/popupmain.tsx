import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import AppRoute from '@/pages/popup/router';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <AppRoute />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
