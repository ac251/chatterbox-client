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

  renderRoom: function(roomObj) {
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