import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Chatbot from '../container';

/**
 * Represents Routes component.
 * @function
 */
const Routes = () => (
  <BrowserRouter>
    <Chatbot />
  </BrowserRouter>
);

export default Routes;
