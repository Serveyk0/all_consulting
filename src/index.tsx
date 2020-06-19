import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { HashRouter } from 'react-router-dom';
import { GetSwitch } from './GetSwitch';


ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <App>
          <GetSwitch />
        </App>
      </HashRouter>
    </React.StrictMode>,
  document.getElementById('root')
);
