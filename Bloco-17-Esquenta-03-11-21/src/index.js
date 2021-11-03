/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Provider from './context/Provider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
