import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AppStyles from './components/styled/AppStyles';

ReactDOM.render(
  <React.StrictMode>
    <AppStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
