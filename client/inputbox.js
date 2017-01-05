Template.footer.events({
    'keypress input': function (event) {
        var inputText = $('.input-box_text').val();
        if (!inputText) return;
        if (event.which == 13) {
            event.stopPropagation();
            Meteor.call('newMessage', {
                text: inputText,
                channel: Session.get('channel')
            });
            $('.input-box_text').val("");
            setTimeout(scrollToBot, 50)
            return;
        }
    }
});

function scrollToBot() {
    var messageHistory = document.getElementById("message-history");
    messageHistory.scrollTop = messageHistory.scrollHeight;
}
