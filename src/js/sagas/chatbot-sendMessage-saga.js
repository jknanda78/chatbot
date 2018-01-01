import { all, call, put, takeLatest } from 'redux-saga/effects';
import { CHATBOT_SEND_MESSAGE, CHATBOT_RECEIVE_MESSAGE_SUCCESSFUL, CHATBOT_RECEIVE_MESSAGE_FAILED } from '../actions/types';
import callAPI from './util';

function* chatbotSendMessage(action) {
  try {
    const { response } = yield call(callAPI, '/chatbot/sendMessage', 'POST', undefined, action.payload);

    yield put({ type: CHATBOT_RECEIVE_MESSAGE_SUCCESSFUL, message: response.message });
  } catch (e) {
    yield put({ type: CHATBOT_RECEIVE_MESSAGE_FAILED, message: e.message });
  }
}

function* watchChatbotSendMessage() {
  yield all([
    takeLatest(CHATBOT_SEND_MESSAGE, chatbotSendMessage)
  ]);
}

export default watchChatbotSendMessage;
