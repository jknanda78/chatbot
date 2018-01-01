import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Routes from './routes';

/**
 * Represents Root component.
 * @function
 * @param {object} store - store passed from parent component
 */
const Root = ({ store }) => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({}).isRequired
};

export default Root;
