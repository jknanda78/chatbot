import { CHATBOT_SEND_MESSAGE, CHATBOT_RECEIVE_MESSAGE_SUCCESSFUL } from '../actions/types';

const defaultState = {
  messages: [{ msg: 'Do you have any questions? We can help. Chat with us!', type: 'chatbot' }]
};

/**
 * `state` for signup
 * @param {Object} state
 * @param {Action} action
 * @return {Object}
 */
export default function (currentState = defaultState, action) {
  let state = currentState;
  const newMessage = state.messages;

  switch (action.type) {
    case CHATBOT_SEND_MESSAGE:
      newMessage.push({ msg: action.payload.message, type: 'user' });
      state = Object.assign({}, state, { messages: newMessage });

      return {
        ...state
      };

    case CHATBOT_RECEIVE_MESSAGE_SUCCESSFUL:
      newMessage.push(action.message);
      state = Object.assign({}, state, { messages: newMessage });

      return {
        ...state
      };

    default:
      return state;
  }
}
