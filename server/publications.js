Meteor.publish('messages', function () {
    return Messages.find();
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