Template.channel.events({
    'click .channel': function (e) {
        Session.set('channel', this.name);
        setTimeout(scrollToBot, 100, true);
    }
});

function scrollToBot() {
    var messageHistory = document.getElementById("message-history");
    messageHistory.scrollTop = messageHistory.scrollHeight;
    prevScrollHeight = messageHistory.scrollHeight;
}
