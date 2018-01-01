import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import chatbotMsgReducer from './chatbot-msg-reducer';

export default combineReducers({
  form: formReducer,
  chatbotMsgReducer
});
