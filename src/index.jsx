import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { GetSwitch } from './GetSwitch';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <HashRouter>
        <GetSwitch />
      </HashRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
