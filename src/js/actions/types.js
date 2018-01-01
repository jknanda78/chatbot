/**
 * The actions module.
 * @module ChatBot/action-types
 */


/**
 * JSDoc style comment.  Does nothing and returns a string.
 * @param {String} bar
 * @return {String}
 */
const CHATBOT_SEND_MESSAGE = 'CHATBOT_SEND_MESSAGE';
const CHATBOT_RECEIVE_MESSAGE_SUCCESSFUL = 'CHATBOT_RECEIVE_MESSAGE_SUCCESSFUL';
const CHATBOT_RECEIVE_MESSAGE_FAILED = 'CHATBOT_RECEIVE_MESSAGE_FAILED';

export {
  CHATBOT_SEND_MESSAGE,
  CHATBOT_RECEIVE_MESSAGE_SUCCESSFUL,
  CHATBOT_RECEIVE_MESSAGE_FAILED
};
