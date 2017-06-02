import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import Cart from './routes/Cart';
import Home from './routes/Home';

export default ({ store }) =>
  <MuiThemeProvider>
    <Provider store={ store }>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/cart" component={ Cart } />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  </MuiThemeProvider>
