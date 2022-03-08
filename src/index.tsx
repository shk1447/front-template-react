import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global } from '@emotion/react';
import { globalStyles } from './globalStyles';
import 'normalize.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  rootElement,
);
