import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import chatbotMsgReducer from './chatbot-msg-reducer';

export default combineReducers({
  form: formReducer,
  chatbotMsgReducer,
  routing
});
