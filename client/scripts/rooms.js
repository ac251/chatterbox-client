var Rooms = {

  add: function(roomName) { // takes in a string
    Rooms.storage['roomName'] = {name: roomName};
  },
  
  storage: {}

};