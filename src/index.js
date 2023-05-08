import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/GlobalStyle';
import { App } from 'components/App/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter basename="/react_starter">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
