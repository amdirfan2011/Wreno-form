import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {AppRoutes} from './Route';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <AppRoutes />
  </Router>,
  </React.StrictMode>,
  document.getElementById('root')
);
