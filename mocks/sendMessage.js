var messages = [
  {msg: 'Please tell us how we can help you?', type: 'chatbot'},
  {msg: 'Please see FAQ', type: 'chatbot'},
  {msg: 'Could you please confirm your name?', type: 'chatbot'},
  {msg: 'Please wait while I verify your information', type: 'chatbot'},
  {msg: 'Have a nice day !!', type: 'chatbot'}
];

exports.sendMessage = function (req, res, next) {
  var random = Math.floor((Math.random() * 5));

  res.set({"Content-Type": "application/json"});
  res.status(200).json({"message": messages[random]});
}
