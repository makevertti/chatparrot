Meteor.methods({
  newMessage: function (message) {
    message.timestamp = Date.now();
    message.user = Meteor.userId();
    Messages.insert(message);
  }
});

Meteor.methods({
  newChannel: function (channel) {
    if (!Channels.findOne({name: channel.name})) {
      Channels.insert(channel);
    }
  }
});
