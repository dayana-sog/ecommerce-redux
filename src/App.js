import React from 'react';
import { Router } from 'react-router-dom';

import Home from './pages/Home';

import history from './service/history';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Router history={history}>
      <Home />
      <GlobalStyle />
    </Router>
  );
}

export default App;
