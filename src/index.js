import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/index.js';
import Home from './containers/Home/index.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>

      </Switch>
    </App>
  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
