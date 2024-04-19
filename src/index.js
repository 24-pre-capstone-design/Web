import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../src/assets/css/tailwind.css'
import '../src/assets/css/daisy.css'
import '../src/assets/css/animation.css'
import '../src/assets/css/dashboard.css'
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

