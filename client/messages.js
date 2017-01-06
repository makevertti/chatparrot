Meteor.subscribe('messages');
Meteor.subscribe('allUsernames');
Meteor.subscribe('channels');

Template.messages.helpers({
    messages: Messages.find({})
});

window.onload = function () {
    scrollToBot(true);
    setInterval(scrollToBot, 1000);
}

var prevScrollHeight = 0;

function scrollToBot(force) {
    var messageHistory = document.getElementById("message-history");
    if (force || messageHistory.scrollHeight > prevScrollHeight && messageHistory.scrollHeight - messageHistory.scrollTop < messageHistory.clientHeight + 100) {
        messageHistory.scrollTop = messageHistory.scrollHeight;
        prevScrollHeight = messageHistory.scrollHeight;
    }
}

Template.messages.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('messages', Session.get('channel'));
  });
});
