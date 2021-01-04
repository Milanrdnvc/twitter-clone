import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalStyles from '../src/components/styled/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
