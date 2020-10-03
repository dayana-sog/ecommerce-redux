import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import CustomHistory from './service/history';

import GlobalStyle from './styles/global';
import Header from './components/Header';

import Routes from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={CustomHistory}>
        <Header />
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
