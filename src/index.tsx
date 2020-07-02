import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//@ts-ignore
import { App } from './App.tsx';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
//@ts-ignore
import { GetSwitch } from './GetSwitch.tsx';
//@ts-ignore
import store from './store.tsx';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router history={history}>
        <App>
          <GetSwitch />
        </App>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
