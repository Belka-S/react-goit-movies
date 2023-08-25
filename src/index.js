import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/GlobalStyle';
import { AppMovieFinder } from 'components/App/AppMovieFinder.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter basename="/react-goit-movies">
      <AppMovieFinder />
    </BrowserRouter>
  </React.StrictMode>
);
