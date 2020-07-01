import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//@ts-ignore
import { App } from './App.tsx';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
//@ts-ignore
import { GetSwitch } from './GetSwitch.tsx';
//@ts-ignore
import store from './store.tsx';


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
