var Messages = {
  
  NewMessage: function(userName, messageText, roomName = 'lobby') {
    let message = {};
    message.username = userName;
    message.text = messageText;
    message.roomname = roomName;
    return message;
  },
  
  update: function(messages, callback = () => {}) {
    let oldLength = Messages._storage.size;
    for (let i = messages.length - 1; i >= 0; i--) {
      let myMessage = messages[i];
      Messages._storage.set(myMessage.objectId, myMessage);
    }
    Messages._storage.size !== oldLength ? callback() : null;
  },
  
  add: function(message, callback = () => {}) {
    Messages._storage.set(message.objectId, message);  
    callback();
  },
  
  _storage: new Map()
};


