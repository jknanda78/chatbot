import React from 'react';
import PropTypes from 'prop-types';
import reduxForm from 'redux-form/es/reduxForm';
import Field from 'redux-form/es/Field';
import Header from './header';
import Footer from './footer';
import MessageContainer from './message-container';

require('./style.scss');

/**
 * @function
 * @param {object} props - props passed from parent component
 */
const renderTextarea = ({ input, meta: { touched, error } }) => (
  <div>
    <textarea {...input} name="message" placeholder="Enter message" rows="1" cols="5" />
    {touched && error && <span>{error}</span>}
  </div>
);

renderTextarea.propTypes = {
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string
  }).isRequired,
  input: PropTypes.shape({}).isRequired
};

/**
 * Represents Layout component.
 * @function
 * @param {object} props - props passed from parent component
 */
const Layout = ({ messages, sendMessage, handleSubmit }) => (
  <div className="chatbot-layout">
    <Header />
    <main className="main" role="main">
      <MessageContainer messages={messages} />
      <form onSubmit={handleSubmit(sendMessage)}>
        <Field name="message" component={renderTextarea} placeholder="Enter message" />
        <div>
          <button name="send" type="submit">Send</button>
        </div>
      </form>
    </main>
    <Footer />
  </div>
);

Layout.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    msg: PropTypes.string,
    type: PropTypes.string
  })).isRequired,
  sendMessage: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

/**
 * @function
 * @param {values}
 */

const validate = (values) => {
  const errors = {};

  if (!values.message) {
    errors.message = 'Cannot be blank';
  }

  return errors;
};

export default reduxForm({
  form: 'chatBot',
  fields: ['message'],
  validate
})(Layout);
