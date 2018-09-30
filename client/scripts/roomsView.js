var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $addRoomButton: $('#addRoomButton'),
  $addRoomInput: $('#addRoomInputSpan').find('input'),
  $addRoomInputSpan: $('#addRoomInputSpan'),
  $submitRoomName: $('#submitRoomName'),

  initialize: function() {
    for (roomObj in Rooms.storage) {
      debugger;
      RoomsView.renderRoom(roomObj);
    }
    RoomsView.$select.mouseenter(RoomsView.populateMenu);
    RoomsView.$select.change(MessagesView.render);
    RoomsView.$addRoomButton.click(RoomsView.showAddRoomInput);
    RoomsView.$submitRoomName.click(RoomsView.createNewRoom);
    RoomsView.populateMenu();
  },

  render: _.template('<option><%-name%></option>'),
  
  renderRoomMessages: function() {
    MessagesView.$chats.html('');
    MessagesView.render(RoomsView.$select.val());
    // MessagesView.render(RoomsView.$select.val());
  },

  renderRoom: function(roomObj) {
    // inputs: string
    // outputs: no outputs
    // edge cases: submitted room doesn't exist. 

    // strategy:
    // append a new <option> tag to the rooms <select> tag. 
    
    let roomHTML = RoomsView.render(roomObj);
    RoomsView.$select.append(roomHTML);
    Rooms.storage.add(roomObj.roomname);
    
  },
  
  createNewRoom: function() {
    RoomsView.renderRoom(({ 'name': RoomsView.$addRoomInput.val() } ));
    RoomsView.$addRoomInputSpan.val('');
    RoomsView.showAddRoomInput();
  },
  
  showAddRoomInput: function() {
    RoomsView.$addRoomInputSpan.slideToggle();
    RoomsView.$addRoomButton.text() === 'Add Room' ? RoomsView.$addRoomButton.text('Hide') : RoomsView.$addRoomButton.text('Add Room');
  },
  
  populateMenu: function() {
    let currentRoom = $('select').val();
    $('select').html('');
    Messages._storage.forEach(message => Rooms.storage.add(message.roomname));
    Rooms.storage.forEach(roomName => RoomsView.renderRoom({ 'name' : roomName }));
    $('select').val(currentRoom);
  }

};


//renderRoom shoul also add the roomObject to rooms? 