Meteor.publish('messages', function (channel) {
    return Messages.find({channel: channel});
});

Meteor.publish("allUsernames", function () {
  return Meteor.users.find({}, {fields: {
    "username": 1,
  }});
});

Messages.allow({
  insert: function (userId, doc) {
    return (userId && doc.user === userId);
  }
});

Meteor.publish('channels', function () {
    return Channels.find();
});
