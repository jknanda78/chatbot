/**
 * JSDoc style comment.  Does nothing and returns a function.
 * @param {Object} payload
 * @return {Function}
 */
import { CHATBOT_SEND_MESSAGE } from './types';

const sendChatbotMessage = payload => ({
  type: CHATBOT_SEND_MESSAGE,
  payload
});

export default sendChatbotMessage;
