var Messages = {
  
  NewMessage: function(userName, messageText, roomName = 'lobby') {
    let message = {};
    message.username = userName;
    message.text = messageText;
    message.roomname = roomName;
    return message;
  },
  
  update: function(messages, callback = () => {}) {
    for (let i = 0; i < messages.length; i++) {
      let oldLength = Messages._storage.size;
      let myMessage = messages[i];
      Messages._storage.set(myMessage.objectId, myMessage);
      Messages._storage.size !== oldLength ? callback() : null;
    }
  },
  
  add: function(message, callback = () => {}) {
    Messages._storage.set(message.objectId, message);  
    callback();
  },
  
  _storage: new Map()
};


