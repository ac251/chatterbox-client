var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(room) {
  },

  renderMessage: function(messageObj) {
    // do some jQuery to display the username and text. 
    // the roomname property on each message indicates that 
    // the messageObj should also go in some rooms collection. 

    // a variable which stores a string which contains a message html... 
    // might be messageView.render(). 
    if (messageObj.text && messageObj.username && messageObj.roomname) {
      let $myMessage = $(MessageView.render(messageObj));
      $myMessage.appendTo($('#chats'));
      $myMessage.find('.username').click(() => Friends.toggleStatus(messageObj.username));
    }
    
  }
};

// Things that a collection of messages can do?
// add a renderMessage method?

// render may call renderMessage in a loop.