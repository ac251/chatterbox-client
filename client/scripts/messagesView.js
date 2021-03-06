var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //should call MessagesView.render for the current room? Anything else?
    // $(document).ajaxSuccess(MessagesView.render);
  },

  render: function() {
    MessagesView.$chats.html('');
    if (RoomsView.$select.val() === 'lobby') {
      Messages._storage.forEach(message => MessagesView.renderMessage(message));
    } else {
      Messages._storage.forEach(message => {
      if (message.roomname === RoomsView.$select.val()) {
        MessagesView.renderMessage(message);
      }
    });
    }
  },

  renderMessage: function(messageObj) {
    // do some jQuery to display the username and text. 
    // the roomname property on each message indicates that 
    // the messageObj should also go in some rooms collection. 

    // a variable which stores a string which contains a message html... 
    // might be messageView.render(). 
    if (messageObj.text && messageObj.username && messageObj.roomname) {
      let $myMessage = $(MessageView.render(messageObj));
      $myMessage.prependTo(MessagesView.$chats);
      $myMessage.find('.username').click(() => Friends.toggleStatus(messageObj.username));
    }
    
  }
};

// Things that a collection of messages can do?
// add a renderMessage method?

// render may call renderMessage in a loop.