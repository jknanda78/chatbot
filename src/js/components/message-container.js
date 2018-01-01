import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

/**
 * @function
 * @param String message
 */
const MessageItem = ({ messages }) => (
  messages.map((message) => {
    const cssClass = (message.type === 'user') ? 'msg-item user' : 'msg-item chatbot';

    return (
      <div className={cssClass} key={shortid.generate()} >
        {message.msg}
      </div>
    );
  })
);

/**
 * @function
 * @param {object} props - props passed from parent component
 */
const MessageContainer = ({ messages }) => (
  <div className="chatbot-msg-container">
    <MessageItem messages={messages} />
  </div>
);

MessageContainer.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    msg: PropTypes.string,
    type: PropTypes.string
  })).isRequired
};

export default MessageContainer;
