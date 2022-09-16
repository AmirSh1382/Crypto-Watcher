import React from 'react';
import ReactDOM from 'react-dom/client';

// React-Router-dom
import { BrowserRouter } from 'react-router-dom';

// Components
import App from './App';

// Styles
import "./index.css"

// Axios
import axios from 'axios';

axios.defaults.baseURL = "https://api.coingecko.com/"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);