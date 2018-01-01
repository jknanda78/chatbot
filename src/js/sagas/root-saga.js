import { all } from 'redux-saga/effects';
import watchChatbotSendMessage from './chatbot-sendMessage-saga';

export default function* rootSaga() {
  yield all([
    watchChatbotSendMessage()
  ]);
}
