import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { history } from '../store';
import Chatbot from '../container';

/**
 * Represents Routes component.
 * @function
 */
const Routes = () => (
  <ConnectedRouter history={history}>
    <Route exact path="/example/" component={Chatbot} />
  </ConnectedRouter>
);

export default Routes;
