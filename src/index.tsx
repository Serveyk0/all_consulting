import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { GetSwitch } from './GetSwitch';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <HashRouter>
        <App>
          <GetSwitch />
        </App>
      </HashRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
