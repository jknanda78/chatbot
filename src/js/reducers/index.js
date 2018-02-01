import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import reducer from 'redux-form/es/reducer';
import chatbotMsgReducer from './chatbot-msg-reducer';

export default combineReducers({
  form: reducer,
  chatbotMsgReducer,
  routing
});
