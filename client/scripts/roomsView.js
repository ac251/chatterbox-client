var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    for (roomObj in Rooms.storage) {
      debugger;
      RoomsView.renderRoom(roomObj);
    }
  },

  render: _.template('<option><%-name%></option>'),
  
  renderRoomMessages: function() {
    MessagesView.render($select.val());
  },

  renderRoom: function(roomObj) {
    // inputs: string
    // outputs: no outputs
    // edge cases: submitted room doesn't exist. 

    // strategy:
    // append a new <option> tag to the rooms <select> tag. 
    
    let roomHTML = RoomsView.render(roomObj);
    RoomsView.$select.append(roomHTML);
    Rooms.add(roomObj);
    $(roomHTML).click(RoomsView.renderRoomMessages);
  }

};


//renderRoom shoul also add the roomObject to rooms? 