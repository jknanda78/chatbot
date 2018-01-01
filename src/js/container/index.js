import { connect } from 'react-redux';
import { reset } from 'redux-form';
import chatBot from '../components/layout';
import sendChatbotMessage from '../actions';

/**
 * @param {Function} dispatch
 * @return {Object}
 */
const mapDispatchToProps = dispatch => ({
  sendMessage: (values) => {
    dispatch(sendChatbotMessage(values));
    dispatch(reset('chatBot'));
  }
});

/**
 * @param {Object} state
 * @param {Object} props
 * @return {Object}
 */
const mapStateToProps = (state, props) => ({
  ...props,
  messages: state.chatbotMsgReducer.messages.map(message => message)
});

export default connect(mapStateToProps, mapDispatchToProps)(chatBot);
