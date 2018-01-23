import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import formReducer from 'redux-form/es/reduxForm';
import chatbotMsgReducer from './chatbot-msg-reducer';

export default combineReducers({
  form: formReducer,
  chatbotMsgReducer,
  routing
});
