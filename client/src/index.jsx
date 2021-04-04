import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalStyles from '../src/components/styled/GlobalStyles';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
