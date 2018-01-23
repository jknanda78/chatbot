import React from 'react';
import { render } from 'react-dom';
import Root from './src/js/routes';
import store from './src/js/store';

render(<Root store={store} />, document.getElementById('flexContainer'));
