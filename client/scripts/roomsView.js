var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    for (roomObj in Rooms.storage) {
      RoomsView.renderRoom(roomObj);
    }
  },

  render: _.template('<option><%-name%></option>'),

  renderRoom: function(roomObj) {
    debugger;
    // inputs: string
    // outputs: no outputs
    // edge cases: submitted room doesn't exist. 

    // strategy:
    // append a new <option> tag to the rooms <select> tag. 
    
    RoomsView.$select.append(RoomsView.render(roomObj));
    Rooms.add(roomObj);
  }

};


//renderRoom shoul also add the roomObject to rooms? 