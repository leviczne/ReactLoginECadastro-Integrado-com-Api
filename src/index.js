import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter } from 'react-router-dom';
import RouterMain from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RouterMain />
  </BrowserRouter>
);


