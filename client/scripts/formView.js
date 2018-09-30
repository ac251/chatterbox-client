var FormView = {

  $form: $('form'), // gets all HTML elements called <form>
  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    let myUsername = App.username.split('%20').join(' ');
    let message = Messages.NewMessage(myUsername, FormView.$form.find('input').val(), RoomsView.$select.val());
    Parse.create(message, data => {
      debugger;
      _.extend(message, data);
      Messages.add(message, () => MessagesView.renderMessage(message));
    });
    $('#message').val('');
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};